gulp = require 'gulp'
clean = require 'gulp-clean'

gulp.task 'clean', ->
    gulp.src process.constants.dest
        .pipe clean({force: true})