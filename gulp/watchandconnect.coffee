gulp = require 'gulp'
connect = require 'gulp-connect'
open = require 'gulp-open'
livereload = require 'gulp-livereload'

gulp.task 'connect', ->
	connect.server
		port: 3001
		root: process.constants.dest
		middleware: (connect, options) -> 
			optBase = if typeof options.root == 'string' then [ options.root ] else options.root
			[ require('connect-modrewrite')([ '!(\\..+)$ / [L]' ]) ].concat optBase.map((path) -> connect.static path)
	
	gulp.src('')
		.pipe open
			uri: 'http://localhost:3001'

gulp.task 'watch', ->
	livereload.listen()
	
	gulp.watch process.constants.coffeeSrc, ['scripts']
	gulp.watch process.constants.templateWatchSrc, ['scripts']
	gulp.watch process.constants.sassWatchSrc, ['sass']
	gulp.watch process.constants.imgSrc, ['copy']
	gulp.watch process.constants.indexSrc, ['copy']