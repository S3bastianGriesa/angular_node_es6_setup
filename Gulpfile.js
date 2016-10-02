'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const watch = require('gulp-watch');
const install = require('gulp-install');

const jsPaths = [
  './public/js/*.js',
  './public/js/directives/**/*.js',
  './public/js/lib/*.js',
  '!./public/js/all.js',
  '!./public/env.js',
];

const installPaths = [
  './bower.json',
];

gulp.task('install',
    () => {
      gulp.src(installPaths)
        .pipe(install());
    });

gulp.task('build',
    () => {
      gulp.src(jsPaths)
          .pipe(babel({presets: ['es2015']}))
          .pipe(concat('all.js'))
          .pipe(gulp.dest('./public/js/'));
    });

gulp.task('watch',
    () => {
      gulp.watch()(jsPaths, ['js']);
    });