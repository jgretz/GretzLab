gulp = require 'gulp'
streamqueue = require 'streamqueue'
coffee = require 'gulp-coffee'
order = require 'gulp-order'
concat = require 'gulp-concat'
uglify = require 'gulp-uglify'
ngTemplates = require 'gulp-ng-templates'
htmlmin = require 'gulp-htmlmin'
livereload = require 'gulp-livereload'

gulp.task 'scripts', ->
	coffeeJs = gulp.src(process.constants.coffeeSrc)
		.pipe coffee()

	templateJs = gulp.src(process.constants.templateSrc)
		.pipe htmlmin
			collapseWhitespace: true
			collapseBooleanAttributes: true
			collapseWhitespace: true
			removeAttributeQuotes: true
			removeComments: true
			removeEmptyAttributes: true
			removeRedundantAttributes: true
			removeScriptTypeAttributes: true
			removeStyleLinkTypeAttributes: true
		.pipe ngTemplates
			module: process.constants.ngApp
			standalone: false
			path: (path, base) ->
                "app/templates/" + path.replace(base, '')

	vendorJs = gulp.src(process.constants.vendorSrc)

	streamqueue {objectMode: true}, vendorJs, coffeeJs, templateJs
		.pipe order [
			'**/sugar.min.js',
			'**/jquery.js',
			'**/flowtype.js',
			'**/angular.js',
			'**/angular*.js',
			'**/bootstrap*.js',
			'**/humanize.js'

			'**/app.js',
			'**/router.js',

			'**/base/**/*.js',
			'**/config/**/*.js',

			'**/*.js'
		]
		.pipe concat('app.js')
		.pipe gulp.dest("#{process.constants.dest}/js")
		.pipe livereload()