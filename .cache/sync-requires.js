const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/faustino/Documents/ownPros/fimba-blog/src/templates/blog-post.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/faustino/Documents/ownPros/fimba-blog/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/faustino/Documents/ownPros/fimba-blog/src/pages/index.js")))
}

