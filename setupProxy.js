const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api/anthropic',
        createProxyMiddleware({
            target: 'https://api.anthropic.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api/anthropic': '/v1/messages', // Adjust path as needed
            },
        })
    );
};