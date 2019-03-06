import express from "express";
import logger from "../util/logger";

const router = express.Router();

router.get("/", (req: any, res: any) => {
  logger.info("logging test");
  res.send("Home");
});

export default router;