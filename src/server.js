/* global fetch */
// based on https://github.com/hongymagic/k2 boilerplate
require('dotenv').load();
require('isomorphic-fetch');

import Koa from 'koa';

import cors from '@koa/cors';
import jwt from 'koa-jwt';
import bodyParser from 'koa-bodyparser';

import { logger } from './utils/logger';

// import { log } from './utils/logger';
// import migrateLegacyImages from './middleware/legacy-image-migrator';
// import { default as processUploads } from './middleware/process-uploads';
// import getAsset from './middleware/get-asset';

// const log = bunyan.createLogger({ name: 'media', src: true });

const app = new Koa();

app.use(cors({ credentials: true }));
app.use(bodyParser());

app.use(async (ctx, next) => {
  logger.debug(`req: ${ctx.request.origin} ${ctx.request.path}`);
  logger.debug({ my: 'thing', testing: 123 });
  logger.profile('request');
  await next();
  logger.profile('request');
});

// authenticate requests past here.
// app.use(validateJWT());

// Parse Authorization Header for JWT tokens, and set ctx.state.user if token is
// valid. Passthrough to middleware to make decisions on whether or not their
// routes require users. See src/middleware/validate-user.js
app.use(jwt({ secret: process.env.APP_SECRET, passthrough: true }));

export { logger };
export default app;
