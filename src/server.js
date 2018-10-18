/* global fetch */
// based on https://github.com/hongymagic/k2 boilerplate
require("dotenv").load();
require("isomorphic-fetch");

import Koa from "koa";
import cors from "@koa/cors";
import jwt from "koa-jwt";
import bodyParser from "koa-bodyparser";

const { logger } = require("./utils/logger");

const server = new Koa();

server.use(cors({ credentials: true }));
server.use(bodyParser());

server.use(async (ctx, next) => {
  logger.debug(`req: ${ctx.request.origin} ${ctx.request.path}`);
  logger.debug({ my: "thing", testing: 123 });
  logger.profile("request");
  await next();
  logger.profile("request");
});

server.use(async ctx => {
  if (ctx.request.path === "/health-check") {
    logger.info("inside health check handler.");
    ctx.response.body = {
      healthy: true
    };
  }
});

// authenticate requests past here.
// app.use(validateJWT());

// Parse Authorization Header for JWT tokens, and set ctx.state.user if token is
// valid. Passthrough to middleware to make decisions on whether or not their
// routes require users. See src/middleware/validate-user.js
server.use(jwt({ secret: process.env.APP_SECRET, passthrough: true }));

export { server, logger };
