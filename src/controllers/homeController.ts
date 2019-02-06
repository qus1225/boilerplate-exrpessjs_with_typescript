import express from "express";
const router = express.Router();

router.get("/", (req: any, res: any) => {
  const data = {
    title: "body content",
  };
  req.vueOptions.head.title = "Custom title";
  res.renderVue("home.vue", data, req.vueOptions);
});

export default router;