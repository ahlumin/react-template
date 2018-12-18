module.exports = {
  verbose: true,
  setupFiles: ['<rootDir>/.jest/register-context.js'],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  }
};