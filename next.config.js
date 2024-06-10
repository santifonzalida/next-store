/** @type {import('next').NextConfig} */
const { hostname } = require('os')
const path = require('path')

module.exports = {
  sassOptions: {
      includePaths: [path.join(__dirname, 'src/sass')],
      prependData: `@import "main.sass"`,
    },
  images: {
    remotePatterns: 
    [
      {
        hostname: 'cdn.shopify.com',
        protocol: 'https'
      }
    ]
  }
}