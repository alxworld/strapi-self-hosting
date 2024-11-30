module.exports = [
  'strapi::logger',
  'strapi::errors',
  // 'strapi::security',
  // ...
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', 'strapi-sandbox.s3.ap-south-1.amazonaws.com'],
          //'img-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', env('AWS_BUCKET') || '.s3.' || env('AWS_REGION') || 'amazonaws.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', 'strapi-sandbox.s3.ap-south-1.amazonaws.com'],
          //'media-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', env('AWS_BUCKET') || '.s3.' || env('AWS_REGION') || 'amazonaws.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  // ...
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
]
function env(variable) {
  return process.env[variable] || ''
}
