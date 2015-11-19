process.constants = {
    dest: 'release',

    templateSrc: 'public/templates/**/*.html',
    coffeeSrc: 'public/coffee/**/*.coffee',
    vendorSrc: [
    	"lib/sugar.min.js",

    	"bower_components/jquery/dist/jquery.js",
    	"bower_components/Flowtype.js/flowtype.js",

        "bower_components/angular/angular.js",
        "bower_components/angular-route/angular-route.js",
        "bower_components/angular-flowtype/angular-flowtype.js",

        "bower_components/bootstrap/assets/javascripts/bootstrap-sprockets.js",
        "bower_components/bootstrap/assets/javascripts/bootstrap.js",

        "bower_components/humanize-plus/public/src/humanize.js"
    ],
    sassSrc: "public/css/style.scss",
    imgSrc: "public/img/**/*.*",
    indexSrc: "public/index.html",

    sassWatchSrc: "public/css/**/*.scss",
    templateWatchSrc: "public/templates/**/*.html",

    ngApp: 'app.lab'
}