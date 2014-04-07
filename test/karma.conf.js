// Karma configuration

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '..',


    // frameworks to use
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
        'js/backend/loader.js',
        
        {pattern: 'vendors/**/*.js', included: false},
        {pattern: 'js/**/*.js', included: false},
        {pattern: 'test/**/*Spec.js', included: false},

        'test/test-main.js',
    ],

    preprocessors: {
      'js/**/*.js': 'coverage'
    },

    // list of files to exclude
    exclude: [
        'js/frontend/loader.js',
        'js/frontend/app.js',
        'js/frontend/popup/loader.js',
        'js/frontend/popup/app.js',
        'js/backend/main.js',
        'js/darkwallet.js'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress', 'coverage'],
    
    coverageReporter: {
	  type : 'html',
	  dir : 'test/coverage/'
	},


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Firefox'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Timeout for running tests, very important for slow machines
    browserNoActivityTimeout: 100000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};