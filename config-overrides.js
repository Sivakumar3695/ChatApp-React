const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const {InjectManifest} = require('workbox-webpack-plugin');

module.exports = function override(config, env) {
    console.log(config)
    const isEnvProduction = env === 'production';

    config.optimization.splitChunks = isEnvProduction && {
        cacheGroups:{
            react:{
                test: /[\\/]node_modules[\\/]((react).*)[\\/]/, name: 'react', chunks:'all', minSize: 20000
            },
            axios:{
                test: /[\\/]node_modules[\\/](axios)[\\/]/, name: 'axios', chunks:'all', minSize: 2000
            }
        }
    }
    
    config.plugins.push(
        new BundleAnalyzerPlugin(),
        new InjectManifest({
            swSrc: './public/sw.js'
        })
    );

    return config;
  }