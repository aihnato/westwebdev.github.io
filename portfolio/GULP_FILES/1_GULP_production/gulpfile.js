'use strict';

/*Dependencies*/

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var rigger      = require('gulp-rigger');
var connect     = require('gulp-connect');
var livereload  = require('gulp-livereload');
var open        = require('gulp-open');
var imagemin    = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');


/*Building*/

var path = {
    build: { 
        html: 'production/',
        js: 'production/js/',
    },
    src: { 
        html: 'src/*.html',
        js: 'src/js/**/*.js',
    },
    watch: { 
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
    },
    clean: './production'
};

gulp.task('html:build', function () {
    gulp.src(path.src.html) 
    .pipe(rigger())
    .pipe(gulp.dest(path.build.html)) 
});

gulp.task('build', [
    'html:build',  
    ]);

gulp.task('js:build', function () {
    gulp.src(path.src.js)
    .pipe(rigger()) 
    .pipe(sourcemaps.init()) 
    .pipe(sourcemaps.write()) 
    .pipe(gulp.dest(path.build.js)) 
});

/*Configuration/settings*/

var input = 'src/sass/**/*.sass';
var output = 'production/css';
var input_html = './production/*.html';

var options = {
    sass: {
        outputStyle: 'extended'
    }
};

/*Server connect*/

gulp.task('connect', function() {
    connect.server({
        root: './production/',
        port: 8080,
    });
    
});

/*Sass compilation*/

gulp.task('sass', function () {
    return gulp.src(input)

    .pipe(sourcemaps.init())
    .pipe(sass(options.sass).on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(sourcemaps.write('.'))

    .pipe(gulp.dest(output)); 
});

gulp.task('html', function () {
    return gulp.src(input) 
    .pipe(livereload());
});

/*Fonts*/

gulp.task('fonts', function() {
  return gulp.src('node_modules/components-font-awesome/fonts/*')
  .pipe(gulp.dest('production/fonts'))
})

/*IMG Compressing*/

gulp.task('image', function () {
    return gulp.src('src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('production/img'))
});


/*Watchers*/

gulp.task('watch', function() {

    gulp.watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    gulp.watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });

    livereload.listen();
    gulp.watch(input, ['sass']).on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
    gulp.watch('src/img/**/*', function(event) {
        gulp.run('image');
    }); 
    gulp.watch(input_html, ['sass']);
    gulp.watch(input_html).on('change', function(event) {
     livereload();
 });
    gulp.src('')
    .pipe(open({app: 'chrome', uri: 'http://localhost:8080'}));
});

gulp.task('default', ['html:build', 'js:build', 'image', 'fonts', 'connect', 'sass', 'watch']);


