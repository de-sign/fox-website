const imagemin = require('gulp-imagemin');

// Data
let env = (process.env.NODE_ENV || 'development').trim(),
    out = {
        development: 'build',
        testing: 'test',
        production: 'dist'
    },
    src = {
        root: 'src',
        assets: 'src/assets',
        pages: 'src/pages',
        templates: 'src/pages/templates',
        data: 'src/data'
    },
    dest = {
        root: `${out[env]}`,
        assets: `${out[env]}/assets`
    };

// Export
Object.assign(exports, {
    
    env: {
        current: env,
        isDevelopment: env == 'development',
        isTesting: env == 'testing',
        isProduction: env == 'production'
    },

    paths: {
        src: Object.assign(src, {
            html: `${src.pages}`,
            njk: `${src.templates}`,
            scss: `${src.assets}/scss`,
            js: `${src.assets}/js`,
            images: `${src.assets}/images`,
            favicon: `${src.assets}/favicon`,
            fonts: `${src.assets}/fonts`
        }),
        dest: Object.assign(dest, {
            html: `${dest.root}`,
            njk: `${src.templates}`,
            scss: `${dest.assets}/css`,
            js: `${dest.assets}/js`,
            images: `${dest.assets}/images`,
            favicon: `${dest.assets}/favicons`,
            fonts: `${dest.assets}/fonts`
        })
    },

    files: {
        watch: {
            templates: [
                '_*.njk',
                '*/**/*.njk'
            ],
            html: [
                '../data/*.json',
                '*/*.json',
                '*/**/*.html'
            ],
            scss: '**/*.scss',
            js: '**/*.js',
            images: '**/*.*',
            favicon: '*.*',
            fonts: '**/*.*'
        },
        src: {
            njk: '**/core.njk',
            html: '*/*.html',
            scss: '*.scss',
            js: '**/core.*',
            images: '**/*.*',
            favicon: '*.*',
            fonts: '**/*.*'
        },
        dest: {
            favicon: `_favicons.njk`,
            njk: file => {
                file.basename = file.dirname.split('/').pop();
                file.dirname = '';
            },
            html: file => {
                file.dirname = '';
            },
            js: file => {
                let aFile = file.dirname.split('/');
                file.basename = aFile.pop();
                file.extname = '.js';
                file.dirname = aFile.join('/');
            },
            scss: file => {
                file.extname = '.css';
            }
        }
    },

    plugins: {
        browserSync: {
            server: dest.root,
            watch: true
        },
        plumber: undefined,
        include: {
            njk: undefined,
            js: undefined
        },
        sourcemaps: {
            js: {
                init: undefined,
                write: undefined
            },
            css: {
                init: undefined,
                write: undefined
            }
        },
        beautify: {
            js: undefined,
            html: undefined,
            css: undefined
        },
        uglify: undefined,
        sass: undefined,
        cleanCss: undefined,
        imagemin: [
            imagemin.gifsicle({ interlaced: true }),
            imagemin.jpegtran({ progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: false },
                    { removeComments: true },
                    { removeHiddenElems: true },
                    { removeDimensions: true },
                    { cleanupIDs: true }
                ]
            })
        ],
        favicons: {
            background: '#333333',
            theme_color: '#333333',
            display: 'standalone',
            orientation: 'portrait',
            version: 1.0,
            logging: false,
            start_url: '',
            pipeHTML: true
        }
    }
});