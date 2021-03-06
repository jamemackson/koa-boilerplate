const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log` 
    // - Write all logs error (and below) to `error.log`.
    //
    // new winston.transports.File({ filename: '.error.log', level: 'error' }),
    // new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.Console({
      prettyPrint: JSON.stringify
    })
  ],
  // exceptionHandlers: [
  //   new winston.transports.File({ filename: 'exceptions.log' })
  // ]
});

module.exports = { logger };
// module.export.default = logger;
