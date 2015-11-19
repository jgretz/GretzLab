############### Load Tasks ##################
requireDir = require 'require-dir'
requireDir './gulp'

############### Default / Root Level ##################
gulp = require 'gulp'
runSequence = require 'run-sequence'

gulp.task 'default', ->
	runSequence 'clean', 'build', 'display'

gulp.task 'build', [ 'scripts', 'sass', 'copy' ], ->

gulp.task 'display', [ 'connect', 'watch' ], ->