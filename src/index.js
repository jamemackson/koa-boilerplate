require('dotenv').config();
require('@babel/register')();
require('@babel/polyfill');

// const bunyan = require('bunyan');
// const log = bunyan.createLogger({ name: 'media', src: true });
// const logger = require('./utils/logger');
const { server, logger } = require('./server');

const port = process.env.PORT || 5000;
server.listen(port, () => logger.info(`API server started on ${port}`));
