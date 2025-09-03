const path = require('path');

module.exports = {
  webpack: (config) => {
    // Add the common folder to the module resolution path
    config.resolve.modules.push(path.resolve(__dirname, '../common'));
    return config;
  },
};