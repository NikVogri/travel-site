const gulp = require("gulp"),
    postcss = require("gulp-postcss"),
    cssvars = require("postcss-simple-vars"),
    nested = require("postcss-nested"),
    autoprefixer = require("autoprefixer"),
    importCss = require("postcss-import"),
    mixins = require("postcss-mixins");

gulp.task("style", function () {
    return gulp.src("./app/assets/styles/style.css")
        .pipe(postcss([
            importCss, mixins, cssvars, nested, autoprefixer
        ]))
        .on("error", function (err) {
            console.log(err.toString());
            this.emit("end");
        })
        .pipe(gulp.dest("./app/temp/styles"));
});