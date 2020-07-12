// module.exports = {
//   webpack: (config, { isServer }) => {
//     // Fixes npm packages that depend on `fs` module
//     if (!isServer) {
//       config.node = {
//         fs: 'empty'
//       }
//     }
//
//     return config
//   }
// }
const images = require('remark-images')
const emoji = require('remark-emoji')
const withMdxEnhanced = require('next-mdx-enhanced')

module.exports = withMdxEnhanced({
  layoutPath: 'components/page-layouts',
  defaultLayout: false,
  fileExtensions: ['mdx'],
  remarkPlugins: [images, emoji],
  rehypePlugins: [],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: 'prebuild|loader|both',
  },
})({
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
})
// const withMDX = require("@next/mdx")({
//   extension: /\.(md|mdx)$/
// });
//
// module.exports = withMDX({
//   webpack: (config, { isServer }) => {
//     // Fixes npm packages that depend on `fs` module
//     if (!isServer) {
//       config.node = {
//         fs: "empty"
//       };
//     }
//
//     return config;
//   }
// });
