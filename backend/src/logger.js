const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        // Write everything to console
        new winston.transports.Console({
            format: winston.format.simple(),
        })
    ],
});

module.exports = logger;
