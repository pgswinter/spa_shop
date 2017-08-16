var gulp = require('gulp'),
	sass = require('gulp-sass'),
	jsmin = require('gulp-jsmin'),
	cssminbundle = require('gulp-cssmin'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	pump = require('pump'),
	concat = require('gulp-concat'),
	pug = require('gulp-pug'),
	browersync = require('browser-sync').create(),
	reload = browersync.reload;

// minify javascript
gulp.task('compress', function (cb) {
	pump([
		gulp.src(['./dist/js/*.js','!./dist/js/**/*.min.js']),
		uglify(),
		rename({suffix:'.min'}),
		gulp.dest('./dist/js')
	],
    cb
  );
});
// merge javascript
gulp.task('scripts', function() {
  return gulp.src(['./src/js/amc_ui_kit/**/*.js','./src/js/*.js'])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./dist/js'));
});
// minify css
gulp.task('cssminbundle',function(){
	gulp.src(['./dist/css/bundle.css','!./dist/css/**/*.min.css'])
		.pipe(cssminbundle())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('./dist/css'));
});
// process sass too css
gulp.task('sass',function(){
	return gulp.src('./src/sass/**/*.sass')
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest('./dist/css'))
		.pipe(browersync.stream());

});
// tracking process sass too css
gulp.task('sass:watch',function(){
	gulp.watch('./src/sass/**/*.sass',['sass']);
});

gulp.task('pug',function(){
	return gulp.src('./pug/*.pug')
		.pipe(pug({pretty: true}))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('pugserve',function(){
	return gulp.src('./pug/*.pug')
		.pipe(pug({pretty: true}))
		.pipe(gulp.dest('./'));
});

// server
gulp.task('serve',['sass','pug','cssminbundle','scripts','compress'],function(){
	browersync.init({
		server:{
			baseDir:"./"
		}
	});
	gulp.watch("./src/sass/*.sass",['sass']);
	gulp.watch("./pug/**/*.pug",['pug']);
	gulp.watch("./dist/css/bundle.min.css",['cssminbundle']);
	gulp.watch("./dist/js/bundle.js",['scripts']);
	gulp.watch("./dist/js/bundle.min.js",['compress']);
});

gulp.task('dev',['sass','sass:watch','scripts']);
gulp.task('product',['cssminbundle','compress']);
