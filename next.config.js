/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/sass')],
        prependData: `@import "main.sass"`,
      },
}