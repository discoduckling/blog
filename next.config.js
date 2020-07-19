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
