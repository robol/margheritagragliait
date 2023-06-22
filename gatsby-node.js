exports.createPages = async ({ actions }) => {
  const { createPage, createRedirect } = actions;

  // Create page for "/using-dsg"
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  });

  // Redirect URLs ending in ".html" to "/"
  createRedirect({
    fromPath: "/*.html",
    toPath: "/",
    redirectInBrowser: true,
    isPermanent: true,
  });
};
