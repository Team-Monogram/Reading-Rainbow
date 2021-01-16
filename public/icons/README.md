# this command runs pwa asset generator
npx pwa-asset-generator 

npx pwa-asset-generator .\public\icon.svg .\public\icons\
# manifest.json data
[
  {
    "src": "public/icons/manifest-icon-192.png",
    "sizes": "192x192",
    "type": "image/png",
    "purpose": "maskable any"
  },
  {
    "src": "public/icons/manifest-icon-512.png",
    "sizes": "512x512",
    "type": "image/png",
    "purpose": "maskable any"
  }
]