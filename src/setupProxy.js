const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/indonesia',
    createProxyMiddleware({
      target: 'https://api.kawalcorona.com',
      changeOrigin: true,
    })
  );
};