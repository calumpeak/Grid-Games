// Gulp
var gulp    = require("gulp");
var concat  = require("gulp-concat");
var jscs    = require("gulp-jscs");
var hint    = require("gulp-jshint");
var yuiDoc  = require("gulp-yuidoc");

// Other Modules
var stream  = require("event-stream");
var stylish = require('jshint-stylish');

// Main files
var mainFiles = [
    "src/**/js/*.js",       // Core modules
    "src/games/**/js/*.js", // games
    "src/main.js"           // main/init
];

// File concatenation
gulp.task("concat", function () {
    // TODO duplication from above
    var js = [
        "src/IIFEopen.js",      // IIFE open
        "src/**/js/*.js",       // Core modules
        "src/games/**/js/*.js", // games
        "src/main.js",          // Main/init
        "src/IIFEclose.js"      // IFFE close
    ];

    var css = [
        "src/**/css/*.css"
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

// Watch for file changes - concatenate if so
gulp.task("watch", ["concat"], function () {
    gulp.watch(["src/*.js", "src/**/js/*.js", "src/games/**/js/*.js", "src/**/css/*.css"], ["concat"]);
});

// Kick off both linting tests
gulp.task("lint", ["jscs", "jshint"]);
