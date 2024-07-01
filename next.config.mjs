/** @type {import('next').NextConfig} */
// const withPWA = require('next-pwa')({
//     dest: 'public'
// })
import { withPWA } from 'next-pwa'

const nextConfig = withPWA({})({
        dest: 'public'
    })

export default nextConfig;
