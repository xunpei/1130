var gulp = require("gulp");
var sass = require("gulp-sass");
gulp.task("readFile", function() {
    return gulp.src("./scss/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css/css"))
});
gulp.task("dev", function() {
    return gulp.watch("./scss/style.scss", gulp.parallel("readFile"))
})