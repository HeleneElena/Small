const {watch, series, parallel} = require('gulp');
const browserSync = require("browser-sync").create();

// Конфигурация
const path = require("./config/path.js");
const app = require("./config/app.js");

// Задачи
const clear = require('./task/clear.js');
const pug = require('./task/pug');
const scss = require('./task/scss.js');
const js = require('./task/js.js');
const img = require('./task/img.js');
const svg = require('./task/svg.js');
const fonts = require('./task/fonts.js');

// Сервер
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    });
}

// Наблюдение
const watcher = () => {
    watch(path.pug.watch, pug).on("all", browserSync.reload);
    watch(path.scss.watch, scss).on("all", browserSync.reload);
    watch(path.js.watch, js).on("all", browserSync.reload);
    watch(path.img.watch, img).on("all", browserSync.reload);
    watch(path.svg.watch, svg).on("all", browserSync.reload);
    watch(path.fonts.watch, fonts).on("all", browserSync.reload);
}

const build = series(
    clear,
    parallel(pug, scss, js, img, svg, fonts)
);

const dev = series(
    clear,
    build,
    parallel(watcher, server)
);

// Задача
exports.pug = pug;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.svg = svg;
exports.fonts = fonts;

// Сборка
exports.default = app.isProd
    ? build
    : dev;
