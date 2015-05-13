'use strict';

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'test/helpers/**/*.js',
            'src/app/**/*.spec.js',
            'src/app/*.spec.js',
            'src/components/**/*.spec.js',
            'src/components/*.spec.js'
        ],
        preprocessors: {
            'src/app/**/*.spec.js': ['webpack'],
            'src/app/*.spec.js': ['webpack'],
            'src/components/**/*.spec.js': ['webpack'],
            'src/components/*.spec.js': ['webpack']
        },
        webpack: {
            cache: true,
            module: {
                loaders: [{
                    test: /\.gif/,
                    loader: 'url-loader?limit=10000&mimetype=image/gif'
                }, {
                    test: /\.jpg/,
                    loader: 'url-loader?limit=10000&mimetype=image/jpg'
                }, {
                    test: /\.png/,
                    loader: 'url-loader?limit=10000&mimetype=image/png'
                }, {
                    test: /\.js$/,
                    loader: 'jsx-loader?harmony'
                }, {
                    test: /\.scss/,
                    loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
                }, {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader'
                }],
                postLoaders: [{
                    test: /\.js$/,
                    // exclude: /(test|node_modules|bower_components){0,1}\/(spec.js){0,1}$/,
                    exclude: /(test|node_modules|bower_components|spec.js)/,
                    loader: 'istanbul-instrumenter'
                }]
            },
            resolve: {
                alias: {
                    'styles': './src/styles',
                    'components': './src/scripts/components/'
                }
            }
        },
        webpackServer: {
            stats: {
                colors: true
            },
            quiet: true
        },
        exclude: [],
        port: 8080,
        logLevel: config.LOG_INFO,
        colors: true,
        autoWatch: true,
        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],
        reporters: ['progress', 'html', 'coverage'],
        captureTimeout: 60000,
        singleRun: false
    });
};
