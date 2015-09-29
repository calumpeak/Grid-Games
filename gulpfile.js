var gulp    = require("gulp");
var concat  = require("gulp-concat");
var stream  = require("event-stream");

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

// x-ray. Watch for file changes. Continuing the metroid naming
gulp.task("x-ray", ["concat"], function () {
    gulp.watch(["src/*.js", "src/**/js/*.js", "src/**/css/*.css"], ["concat"]);
});
