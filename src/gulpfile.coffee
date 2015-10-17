gulp = require 'gulp'
runSequence = require 'run-sequence'
streamqueue = require 'streamqueue'
clean = require 'gulp-clean'
coffee = require 'gulp-coffee'
order = require 'gulp-order'
concat = require 'gulp-concat'
uglify = require 'gulp-uglify'
sass = require 'gulp-sass'
htmlmin = require 'gulp-htmlmin'
ngTemplates = require 'gulp-ng-templates'
ngAnnotate = require 'gulp-ng-annotate'
connect = require 'gulp-connect'
open = require 'gulp-open'

############### Constants ##################

dest = 'release'

templateSrc = 'app/templates/**/*.html'
coffeeSrc = 'app/coffee/**/*.coffee'
vendorSrc = [
	"bower_components/jquery/dist/jquery.js",
    "bower_components/angular/angular.js",
    "bower_components/angular-route/angular-route.js",

    "bower_components/bootstrap/assets/javascripts/bootstrap-sprockets.js",
    "bower_components/bootstrap/assets/javascripts/bootstrap.js",

    "bower_components/humanize-plus/public/src/humanize.js"
]
sassSrc = "app/css/style.scss"
imgSrc = "app/img/**/*.*"
indexSrc = "app/index.html"

############### Default / Root Level ##################

gulp.task 'default', ->
	runSequence 'clean', 'build', 'display'

gulp.task 'build', [ 'scripts', 'sass', 'copy' ], ->

gulp.task 'display', ['connect', 'watch'], ->

############### Clean ##################

gulp.task 'clean', ->
	gulp.src dest
		.pipe clean({force: true})

############### Copy ##################		

gulp.task 'copy', ->
	gulp.src imgSrc
		.pipe gulp.dest("#{dest}/img")
		.pipe connect.reload()

	gulp.src indexSrc
		.pipe gulp.dest(dest)
		.pipe connect.reload()

############### Scripts ##################

gulp.task 'scripts', ->
	coffeeJs = gulp.src(coffeeSrc)
		.pipe coffee()

	templateJs = gulp.src(templateSrc)
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
			module: "app.lab"
			standalone: false
			path: (path, base) ->
                "app/templates/" + path.replace(base, '')

	vendorJs = gulp.src(vendorSrc)

	streamqueue {objectMode: true}, vendorJs, coffeeJs, templateJs
		.pipe order [
			'**/jquery.js',
			'**/angular.js',
			'**/angular-route.js',
			'**/bootstrap*.js',
			'**/humanize.js'

			'**/app.js',
			'**/router.js',

			'**/base/**/*.js',
			'**/config/**/*.js',

			'**/*.js'
		]
		.pipe concat('app.js')
		.pipe ngAnnotate()
		# .pipe uglify()
		.pipe gulp.dest("#{dest}/js")
		.pipe connect.reload()

############### Sass ##################

gulp.task 'sass', ->
	gulp.src sassSrc
		.pipe sass({outputStyle: 'compressed'})
		.pipe gulp.dest("#{dest}/css")
		.pipe connect.reload()

############### Connect ##################
gulp.task 'connect', ->
	connect.server
		port: 8000
		root: dest
		livereload: true
	
	gulp.src('')
		.pipe open
			uri: 'http://localhost:8000'

############### Watch ##################

gulp.task 'watch', ->
	gulp.watch [coffeeSrc], ['scripts']
	gulp.watch [sassSrc], ['sass']
	gulp.watch [imgSrc,indexSrc], ['copy']