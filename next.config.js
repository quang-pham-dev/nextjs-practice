/** @type {import('next').NextConfig} */

const path = require('path')
const env = process.env

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    ROOT_URL: env.ROOT_URL,
    API_PORT: env.API_PORT,
    APP_PORT: env.APP_PORT,
    RECAPTCHA_KEY: env.RECAPTCHA_KEY,
    PUBLIC_KEY: env.PUBLIC_KEY,
  },
}

module.exports = nextConfig
