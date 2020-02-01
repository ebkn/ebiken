module.exports = {
  siteMetadata: {
    title: 'ebiken',
    author: 'ebiken',
    description: "ebiken's portfolio",
    siteUrl: 'https://blog.ebiken.dev',
    image: 'https://blog.ebiken.dev/images/ogp.png',
    social: {
      twitter: '@ebikentennis',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 600,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-autolink-headers',
          'gatsby-remark-responsive-iframe',
          {
            resolve: '@raae/gatsby-remark-oembed',
            options: {
              usePrefix: ["embed"],
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'types/graphql-types.d.ts',
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          { family: 'Source Code Pro' },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        appendScript: require.resolve('./src/sw.js'),
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'ebiken portfolio',
        short_name: 'ebiken',
        start_url: '/',
        background_color: '#FAFAFA',
        theme_color: '#616161',
        display: 'standalone',
        icon: 'src/icon.jpg',
        icons: [
          {
            'src': 'icons/icon-72x72.png',
            'sizes': '72x72',
            'type': 'image/png'
          },
          {
            'src': 'icons/icon-96x96.png',
            'sizes': '96x96',
            'type': 'image/png'
          },
          {
            'src': 'icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'icons/icon-144x144.png',
            'sizes': '144x144',
            'type': 'image/png'
          },
          {
            'src': 'icons/icon-152x152.png',
            'sizes': '152x152',
            'type': 'image/png'
          },
          {
            'src': 'icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          },
        ],
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        features: {
          auth: false,
          database: false,
          firestore: false,
          storage: false,
          messaging: false,
          functions: false,
          performance: true,
          analytics: true,
        },
        credentials: {
          apiKey: 'AIzaSyC5vsB3ECXxMcLSTiaEhmYKkke0z8XEE0s',
          authDomain: 'portfolio-ebiken.firebaseapp.com',
          databaseURL: 'https://portfolio-ebiken.firebaseio.com',
          projectId: 'portfolio-ebiken',
          storageBucket: 'portfolio-ebiken.appspot.com',
          messagingSenderId: '476117283723',
          appId: '1:476117283723:web:bead1f98dc0b97585b758e',
          measurementId: 'G-5NNVVXSKGF',
        },
      },
    },
  ],
};
