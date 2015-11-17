
module.exports = function (config) {

    config.set({

        basePath: '',

        port: 1337,

        autoWatch: false,

        frameworks: [ 'mocha' ],

        files: [
            { pattern: './node_modules/sinon/pkg/sinon.js', watched: false, included: true,  served: true },
            //{ pattern: './node_modules/lodash/index.js'   , watched: false, included: true,  served: true },
            { pattern: './node_modules/mocha/mocha.js'    , watched: false, included: true,  served: true },
            { pattern: './node_modules/chai/chai.js'      , watched: false, included: true,  served: true },
            //{ pattern: './node_modules/async/lib/async.js', watched: false, included: true,  served: true },
            { pattern: './src/*.js'                       , watched: true , included: true,  served: true },
            { pattern: './src/**/js/*.js'                 , watched: true , included: true,  served: true },
            { pattern: './src/**/tests/*.js'              , watched: true , included: true,  served: true },
            //{ pattern: './src/**/tests/fixtures/*'        , watched: true , included: false, served: true }
        ],

        // This can be overriden on the command line.
        // e.g. karma start karma.conf.json --browsers Firefox
        // Before you can run a browser you need the corresponding `karma-<browser>-launcher` package
        browsers: [ 'PhantomJS_Custom' ],

        customLaunchers: {
            PhantomJS_Custom: {
                base: 'PhantomJS',
                options: {
                    viewportSize: {
                        width: 1000,
                        height: 1000
                    }
                }
            },

            // Available switches:
            // http://peter.sh/experiments/chromium-command-line-switches/
            Chrome_Custom: {
                base: 'Chrome',
                flags: ['--window-size=1000,1000']
            }
        },

        reporters: [ 'mocha', 'coverage' ],

        preprocessors: {
            // Instrument source files on the fly.
            './src/*.js':       [ 'coverage' ],
            './src/**/js/*.js': [ 'coverage' ]
        },

        // coverage reporter options
        coverageReporter: {
            reporters: [
                { type: 'html', dir: './coverage' },
                { type: 'text' },
                { type: 'text-summary' }
            ]
        },
        // Run tests and exit
        singleRun: true
    });
};
