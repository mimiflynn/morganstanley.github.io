module.exports = {
  siteMetadata: {
    title: `Morgan Stanley Open Source Software`,
    description: `Morgan Stanley Open Source Software`,
    siteUrl: 'https://morganstanley.github.io',
    contributeUrl: false,
  },
  pathPrefix: `/`, // include subdirectory
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: '@morganstanley/gatsby-theme-ms-gh-pages',
      options: {
        indexContent: 'content',
      },
    },
  ],
};
