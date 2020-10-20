var plugins = [{
      plugin: require('/Users/faustino/Documents/ownPros/fimba-blog/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/faustino/Documents/ownPros/fimba-blog/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/icon.png"},
    },{
      plugin: require('/Users/faustino/Documents/ownPros/fimba-blog/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":false},
    },{
      plugin: require('/Users/faustino/Documents/ownPros/fimba-blog/node_modules/gatsby-plugin-prefetch-google-fonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":[{"family":"Roboto","variants":["300","300i","700","700i"],"subsets":["latin-ext"]},{"family":"Poppins","variants":["300","300i","700","700i"],"subsets":["latin-ext"]}]},
    },{
      plugin: require('/Users/faustino/Documents/ownPros/fimba-blog/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[],"query":"\n          {\n            site {\n              siteMetadata {\n                title\n                description\n                url\n                site_url: url\n              }\n            }\n          }\n        ","feeds":[{"query":"\n              {\n                allMarkdownRemark(\n                  sort: { order: DESC, fields: [frontmatter___date] },\n                ) {\n                  edges {\n                    node {\n                      excerpt\n                      html                      \n                      frontmatter {\n                        title\n                        date\n                        path\n                      }\n                    }\n                  }\n                }\n              }\n            ","output":"/feed.xml","title":"Fimba Code"}]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
