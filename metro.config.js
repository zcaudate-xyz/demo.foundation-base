const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push('db', 'ttf');
config.resolver.sourceExts.push('db');

module.exports = config;