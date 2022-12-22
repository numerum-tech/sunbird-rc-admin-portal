export const environment = {
    production: true,
    baseUrl: '/admin-ui/',
    schemaUrl: '/admin-ui/assets/config/schema.json', //asset path OR URL
    logo: '/admin-ui/assets/images/logo.png', //asset path OR URL
    keycloakConfig: {
      url: 'https://sunbird-rc.sandbox.gouv.tg/auth',
      realm: 'sunbird-rc',
      clientId: 'registry-frontend'
    }
  };