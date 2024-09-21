const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@store': path.resolve(__dirname, 'src/store'),
      '@layout': path.resolve(__dirname, 'src/app/layout'),
      '@routes': path.resolve(__dirname, 'src/app/routes'),
      '@features': path.resolve(__dirname, 'src/features')
    }
  }
};
