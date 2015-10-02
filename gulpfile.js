// Gulp
var gulp    = require("gulp");
var concat  = require("gulp-concat");
var jscs    = require("gulp-jscs");
var hint    = require("gulp-jshint");

// Other Modules
var stream  = require("event-stream");
var stylish = require('jshint-stylish');

// File concatenation
gulp.task("concat", function () {
    var js = [
        "src/IIFEopen.js",
        "src/**/js/*.js",
        "src/main.js",
        "src/IIFEclose.js"
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
    return gulp.src(["src/**/js/*.js"])
        .pipe(hint("./.jshintrc"))
        .pipe(hint.reporter(stylish))
        .pipe(hint.reporter("fail"));
});

// jscs
gulp.task("jscs", function () {
    return gulp.src(["src/**/js/*.js"])
        .pipe(jscs("./.jscsrc"));
});


// x-ray. Watch for file changes. Continuing the metroid naming
gulp.task("watch", ["concat"], function () {
    gulp.watch(["src/*.js", "src/**/js/*.js", "src/**/css/*.css"], ["concat"]);
});

// Kick of both linting tests
gulp.task("lint", ["jscs", "jshint"]);
