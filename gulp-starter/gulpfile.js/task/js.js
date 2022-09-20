const {src, dest} = require('gulp');

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const size = require("gulp-size");


// Обработка JavaScript
const js = () => {
    return src(path.js.src, {sourcemaps: app.isDev})
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "JavaScript",
                message: error.message
            }))
        }))
        .pipe(babel())

        .pipe(size({title: "js.js"}))
        .pipe(dest(path.js.dest, {sourcemaps: app.isDev}))
        .pipe(rename({suffix: ".min"}))
        .pipe(uglify())
        .pipe(size({title: "js.js"}))
        .pipe(dest(path.js.dest, {sourcemaps: app.isDev}))
}

module.exports = js;