// Require
const gulp          = require('gulp');
const merge         = require('lodash.merge');
const del           = require('del');
const plumber       = require('gulp-plumber');
const include       = require('gulp-include');
const data          = require('gulp-data');
const fs            = require('fs');
const path          = require('path');
const through       = require('through');
const nunjucks      = require('gulp-nunjucks');
const gulpif        = require('gulp-if');
const sourcemaps    = require('gulp-sourcemaps');
const concat        = require('gulp-concat');
const beautify      = require('gulp-beautify');
const uglify        = require('gulp-uglify');
const sass          = require('gulp-sass');
const rename        = require('gulp-rename');
const cleanCss      = require('gulp-clean-css');
const imagemin      = require('gulp-imagemin');
const favicons      = require('gulp-favicons');

// Export
module.exports = function(config){
    
    const _builds = {
        clean: () => {
            return del([config.paths.dest.root], { force: true });
        },

        favicon: (() => {
            function _getData(file){
                let FW = JSON.parse(fs.readFileSync(config.paths.src.data + '/base.json')),
                    aPath = config.paths.dest.favicon.split('/');
                    aPath.shift();

                return Object.assign({}, FW.favicon, config.plugins.favicons, {
                    appName: FW.meta.title,
                    appDescription: FW.meta.description,
                    url: FW.url.host,
                    path: aPath.join('/'),
                    html: config.files.dest.favicon
                } );
            };

            return gulp.series(
                function favicon__generate() {
                    return gulp.src(config.paths.src.favicon + '/' + config.files.src.favicon)
                        .pipe(favicons(_getData()))
                        .pipe(gulp.dest(config.paths.dest.favicon));
                },
                function favicon__move_html() {
                    return gulp.src(config.paths.dest.favicon + '/' + config.files.dest.favicon)
                        .pipe(gulp.dest(config.paths.src.templates));
                }
            );
        })(),
        
        njk: () => {
            return gulp.src(config.paths.src.njk + '/' + config.files.src.njk)
                .pipe(plumber(config.plugins.plumber))
                .pipe(include(config.plugins.include.njk))
                .pipe(rename(config.files.dest.njk))
                .pipe(plumber.stop())
                .pipe(gulp.dest(config.paths.dest.njk));
        },
        
        html: (() => {
            function _getData(file){
                let FW = JSON.parse(fs.readFileSync(config.paths.src.data + '/base.json')),
                    f_path = path.dirname(file.path) + '/' + path.basename(file.path, '.html') + '.json';

                fs.existsSync(f_path) && merge(FW, JSON.parse(fs.readFileSync(f_path)));
                return { FW };
            };

            return function html() {
                return gulp.src(config.paths.src.html + '/' + config.files.src.html)
                    .pipe(plumber(config.plugins.plumber))
                    .pipe(data(_getData))
                    .pipe(nunjucks.compile())
                    .pipe(gulpif(config.env.isDevelopment, beautify.html(config.plugins.beautify.html)))
                    .pipe(rename(config.files.dest.njk))
                    .pipe(plumber.stop())
                    .pipe(gulp.dest(config.paths.dest.html));
            };
        })(),

        js: () => {
            return gulp.src(config.paths.src.js + '/' + config.files.src.js)
                .pipe(plumber(config.plugins.plumber))
                .pipe(gulpif(config.env.isDevelopment, sourcemaps.init(config.plugins.sourcemaps.js.init)))
                .pipe(include(config.plugins.include.js))
                .pipe(gulpif(config.env.isDevelopment, beautify.js(config.plugins.beautify.js), uglify(config.plugins.uglify)))
                .pipe(gulpif(config.env.isDevelopment, sourcemaps.write(config.plugins.sourcemaps.js.write)))
                .pipe(rename(config.files.dest.js))
                .pipe(plumber.stop())
                .pipe(gulp.dest(config.paths.dest.js));
        },
        
        scss: () => {
            return gulp.src(config.paths.src.scss + '/' + config.files.src.scss)
                .pipe(plumber(config.plugins.plumber))
                .pipe(gulpif(config.env.isDevelopment, sourcemaps.init(config.plugins.sourcemaps.css.init)))
                .pipe(sass())
                .pipe(rename(config.files.dest.scss))
                .pipe(gulpif(config.env.isDevelopment, beautify.css(config.plugins.beautify.css), cleanCss(config.plugins.cleanCss)))
                .pipe(gulpif(config.env.isDevelopment, sourcemaps.write(config.plugins.sourcemaps.css.write)))
                .pipe(plumber.stop())
                .pipe(gulp.dest(config.paths.dest.scss));
        },
        
        images: () => {
            return gulp.src(config.paths.src.images + '/' + config.files.src.images)
                .pipe(imagemin(config.plugins.imagemin))
                .pipe(gulp.dest(config.paths.dest.images));
        },
        
        fonts: () => {
            return gulp.src(config.paths.src.fonts + '/' + config.files.src.fonts)
                .pipe(gulp.dest(config.paths.dest.fonts));
        }
    };

    Object.assign(_builds, {
        templates: gulp.series(_builds.njk, _builds.html),
        scripts: gulp.parallel(_builds.js),
        styles: gulp.parallel(_builds.scss, _builds.images, _builds.fonts)
    });
    _builds.global = gulp.series(_builds.clean, _builds.favicon, _builds.templates, gulp.parallel(_builds.scripts, _builds.styles));

    return _builds;
};