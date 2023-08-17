/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        STOREFRONT_API_KEY: process.env.STOREFRONT_API_KEY,
        SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY,
        SHOPIFY_API_SECRET_KEY: process.env.SHOPIFY_API_SECRET_KEY,
        SHOPIFY_URL: process.env.SHOPIFY_URL
    }
}

module.exports = nextConfig
