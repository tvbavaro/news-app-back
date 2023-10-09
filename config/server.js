
// const strapi = require('@strapi/strapi');
// strapi(/* {...} */).start();

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  // host: env('HOST', '192.168.1.65'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});


