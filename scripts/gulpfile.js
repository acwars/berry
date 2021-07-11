const path = require("path");
const gulp = require("gulp");
const concat = require("gulp-concat");
const stylus = require('gulp-stylus');
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const size = require("gulp-filesize");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const { name } = require("../package.json");

const browserList = [
  "last 2 versions",
  "Android >= 4.0",
  "Firefox ESR",
  "not ie < 9"
];

const DIR = {
  stylus: path.resolve(__dirname, "../src/components/**/*.styl"),
  buildSrc: path.resolve(__dirname, "../src/components/**/index.styl"),
  lib: path.resolve(__dirname, "../lib"),
  es: path.resolve(__dirname, "../es"),
  dist: path.resolve(__dirname, "../dist")
};

gulp.task("copyStylus", () => {
  return gulp.src(DIR.stylus)
    .pipe(gulp.dest(DIR.lib))
    .pipe(gulp.dest(DIR.es));
});

gulp.task("copyCss", () => {
  return gulp.src(DIR.buildSrc)
    .pipe(sourcemaps.init())
    .pipe(
      stylus({
          compress: true
      })
    )
    .pipe(autoprefixer({ overrideBrowserslist: browserList }))
    .pipe(size())
    .pipe(cssnano())
    .pipe(gulp.dest(DIR.lib))
    .pipe(gulp.dest(DIR.es));
});

gulp.task("dist", () => {
  return gulp
    .src(DIR.buildSrc)
    .pipe(sourcemaps.init())
    .pipe(
      stylus({
          compress: true
      })
    )
    .pipe(autoprefixer({ overrideBrowserslist: browserList }))
    .pipe(concat(`${name}.css`))
    .pipe(size())
    .pipe(gulp.dest(DIR.dist))
    .pipe(sourcemaps.write())
    .pipe(rename(`${name}.css.map`))
    .pipe(size())
    .pipe(gulp.dest(DIR.dist))

    .pipe(cssnano())
    .pipe(concat(`${name}.min.css`))
    .pipe(size())
    .pipe(gulp.dest(DIR.dist))
    .pipe(sourcemaps.write())
    .pipe(rename(`${name}.min.css.map`))
    .pipe(size())
    .pipe(gulp.dest(DIR.dist));
});

gulp.task("default", gulp.series('copyStylus', 'copyCss', 'dist'));
