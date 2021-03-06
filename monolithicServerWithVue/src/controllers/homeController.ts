import express from "express";
import logger from "../util/logger";

const router = express.Router();

router.get("/", (req: any, res: any) => {
  logger.info("logging test");
  const data = {
    title: "body content",
  };
  req.vueOptions.head.title = "Custom title";
  res.renderVue("home.vue", data, req.vueOptions);
});

export default router;