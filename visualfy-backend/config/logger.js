const winston = require("winston");
const { createLogger, format, transports } = winston;
const { combine, timestamp, printf } = format;
const DailyRotateFile = require("winston-daily-rotate-file");

const logFormat = printf(({ timestamp, level, message }) => {
    return `${timestamp} ${level}: ${message}`;
});

const dailyRotateFileTransport = new DailyRotateFile({
    filename: "logs/log-%DATE%.log",
    datePattern: "YYYY-MM-DD",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "14d",
});

const logger = createLogger({
    format: combine(
        timestamp({
            format: "YYYY-MM-DD HH:mm:ss",
        }),
        logFormat
    ),
    transports: [new transports.Console(), dailyRotateFileTransport],
});

module.exports = logger;
