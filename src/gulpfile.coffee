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
imageOp = require 'gulp-image-optimization'

connect = require 'gulp-connect'
open = require 'gulp-open'
livereload = require 'gulp-livereload'

ignore = require 'gulp-ignore'
shell = require 'gulp-shell'

############### Constants ##################

dest = 'release'

templateSrc = 'app/templates/**/*.html'
coffeeSrc = 'app/coffee/**/*.coffee'
vendorSrc = [
	"../lib/sugar.min.js",

	"bower_components/jquery/dist/jquery.js",
	"bower_components/Flowtype.js/flowtype.js",

    "bower_components/angular/angular.js",
    "bower_components/angular-route/angular-route.js",
    "bower_components/angular-linq/angular-linq.js",
    "bower_components/angular-flowtype/angular-flowtype.js",

    "bower_components/bootstrap/assets/javascripts/bootstrap-sprockets.js",
    "bower_components/bootstrap/assets/javascripts/bootstrap.js",

    "bower_components/humanize-plus/public/src/humanize.js"
]
sassSrc = "app/css/style.scss"
imgSrc = "app/img/**/*.*"
indexSrc = "app/index.html"
sitemapSrc = "app/sitemap.xml"

sassWatchSrc = "app/css/**/*.scss"
templateWatchSrc = "app/templates/**/*.html"

releaseDir = "../../GretzLabPub/"

############### Default / Root Level ##################

gulp.task 'default', ->
	runSequence 'clean', 'build', 'display'

gulp.task 'build', [ 'scripts', 'sass', 'copy' ], ->

gulp.task 'display', [ 'connect', 'watch' ], ->

gulp.task 'deploy', ->
	runSequence 'deploy-clean', 'deploy-copy', 'deploy-git'

############### Clean ##################

gulp.task 'clean', ->
	gulp.src dest
		.pipe clean({force: true})

############### Copy ##################		

gulp.task 'copy', ->
	gulp.src imgSrc
		.pipe imageOp
			optimizationLevel: 5
			progressive: true
			interlaced: true
		.pipe gulp.dest("#{dest}/img")
		.pipe livereload()

	gulp.src indexSrc
		.pipe gulp.dest(dest)
		.pipe livereload()

	gulp.src sitemapSrc
		.pipe gulp.dest(dest)
		.pipe livereload()

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
		.pipe gulp.dest("#{dest}/js")
		.pipe livereload()

############### Sass ##################

gulp.task 'sass', ->
	gulp.src sassSrc
		.pipe sass({outputStyle: 'compressed'})
		.pipe gulp.dest("#{dest}/css")
		.pipe livereload()

############### Connect ##################
gulp.task 'connect', ->
	connect.server
		port: 8000
		root: dest
		middleware: (connect, options) -> 
			optBase = if typeof options.root == 'string' then [ options.root ] else options.root
			[ require('connect-modrewrite')([ '!(\\..+)$ / [L]' ]) ].concat optBase.map((path) -> connect.static path)
	
	gulp.src('')
		.pipe open
			uri: 'http://localhost:8000'

############### Watch ##################
gulp.task 'watch', ->
	livereload.listen()
	
	gulp.watch coffeeSrc, ['scripts']
	gulp.watch templateWatchSrc, ['scripts']
	gulp.watch sassWatchSrc, ['sass']
	gulp.watch imgSrc, ['copy']
	gulp.watch indexSrc, ['copy']

############### Deploy ##################
gulp.task 'deploy-clean', ->
	process.chdir(releaseDir);

	gulp.src('./**/*.*')
		.pipe ignore.exclude('*.md')
		.pipe ignore.exclude('.git')
		.pipe ignore.exclude('web.config')
		.pipe clean({ force: true })

gulp.task 'deploy-copy', ->
	gulp.src('../GretzLab/src/release/**/*.*')
		.pipe gulp.dest('./')

gulp.task 'deploy-git', ->
	gulp.src('./')
		.pipe shell [
			'git add -A'
			'git commit --allow-empty -m "update"'
			'git push'
		]

