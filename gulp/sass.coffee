gulp = require 'gulp'
sass = require 'gulp-sass'
livereload = require 'gulp-livereload'

gulp.task 'sass', ->
	gulp.src process.constants.sassSrc
		.pipe sass({outputStyle: 'compressed'})
		.pipe gulp.dest("#{process.constants.dest}/css")
		.pipe livereload()