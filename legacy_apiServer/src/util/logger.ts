import winston, { format, transports } from "winston";
import SlackHook from "winston-slack-webhook-transport";

const logger = winston.createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: "your-service-name" },
  transports: []
});

if (process.env.NODE_ENV !== "production") {
  logger.add(new winston.transports.Console({
    level: "info"
  }));

  // 유효한 webhookUrl을 넣은 후 사용가능
  // logger.add(new SlackHook({
  //   webhookUrl: "https://hooks.slack.com/services/xxxx/xxxx/xxxx",
  //   level: "info",
  // }));
}

if (process.env.NODE_ENV !== "production") {
  logger.add(new winston.transports.Console({
    format: format.combine(
      format.colorize(),
      format.simple()
    )
  }));
}

export default logger;

