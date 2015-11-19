gulp = require 'gulp'
imageOp = require 'gulp-image-optimization'
livereload = require 'gulp-livereload'

gulp.task 'copy', ->
	gulp.src process.constants.imgSrc
		.pipe imageOp
			optimizationLevel: 5
			progressive: true
			interlaced: true
		.pipe gulp.dest("#{process.constants.dest}/img")
		.pipe livereload()

	gulp.src process.constants.indexSrc
		.pipe gulp.dest(process.constants.dest)
		.pipe livereload()