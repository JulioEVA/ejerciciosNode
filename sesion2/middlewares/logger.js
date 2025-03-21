const winston = require('winston');
const expressWinston = require('express-winston');

const requestLogger = expressWinston.logger({
  transports: [new winston.transports.File({ filename: 'requests.log' })],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
});

const errorLogger = expressWinston.errorLogger({
  transports: [new winston.transports.File({ filename: 'errors.log' })],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
});

module.exports = { requestLogger, errorLogger };
