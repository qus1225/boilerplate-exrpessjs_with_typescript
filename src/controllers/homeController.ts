/**
 * GET /
 * Home page.
 */
export let index = (req: any, res: any) => {
  const data = {
    title: "body content",
  };
  req.vueOptions.head.title = "Custom title";
  res.renderVue("home.vue", data, req.vueOptions);
};
