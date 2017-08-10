const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("sass", function() {
    gulp.src("./assets/_sass/**/*.scss")
      .pipe(sourcemaps.init())
      .pipe(sass().on("error", sass.logError))
      .pipe(sass({outputStyle: "compressed"}))
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest("./assets/css"));
});


gulp.task("watch", function() {
    gulp.watch("./assets/_sass/**/*.scss", ["sass"]);
});
