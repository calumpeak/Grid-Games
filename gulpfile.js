// Gulp
var gulp    = require("gulp");
var concat  = require("gulp-concat");
var jscs    = require("gulp-jscs");
var hint    = require("gulp-jshint");
var yuiDoc  = require("gulp-yuidoc");

// Other Modules
var karma   = require("karma");
var stream  = require("event-stream");
var stylish = require('jshint-stylish');

// Main files
var mainFiles = [
    "client/**/js/*.js",       // Core modules
    "client/games/**/js/*.js", // games
    "client/main.js"           // main/init
];

// File concatenation
gulp.task("concat", function () {
    // TODO duplication from above
    var js = [
        "client/resource/IIFEopen.js", // IIFE open
        "client/**/js/*.js",           // Core modules
        "client/games/**/js/*.js",     // games
        "client/main.js",              // Main/init
        "client/resource/IIFEclose.js" // IFFE close
    ];

    var css = [
        "client/**/css/*.css"
    ];

    return stream.merge(
        gulp.src(js)
            .pipe(concat("gridGames.js")),
        gulp.src(css)
            .pipe(concat("gridGames.css"))
    ).pipe(gulp.dest("./live/"));
});

// jshint
gulp.task('jshint', function () {
    return gulp.src(mainFiles)
        .pipe(hint("./.jshintrc"))
        .pipe(hint.reporter(stylish))
        .pipe(hint.reporter("fail"));
});

// jscs
gulp.task("jscs", function () {
    return gulp.src(mainFiles)
        .pipe(jscs("./.jscsrc"));
});

// yuiDoc
gulp.task("yuidoc", function () {
    return gulp.src(mainFiles)
        .pipe(yuiDoc())
        .pipe(gulp.dest("./docs/"));
});

// Testing
gulp.task("test", function (done) {
    karma.server.start({
        configFile: __dirname + "/karma.conf.js",
        singleRun: true
    }, done);
})

// Watch for file changes - concatenate if so
gulp.task("watch", ["concat"], function () {
    gulp.watch(["client/*.js", "client/**/js/*.js", "client/games/**/js/*.js", "client/**/css/*.css"], ["concat"]);
});

// Kick off both linting tests
gulp.task("lint", ["test", "jscs", "jshint"]);
