/** @type {import('next').NextConfig} */
const nextConfig = {
  // CONFIGURAZIONE GITHUB PAGES
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  
  // Configurazione per GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/clipflow' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/clipflow/' : '',
  
  // Immagini ottimizzate per export statico
  images: {
    unoptimized: true,
  },

  // Ignora errori per il build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
