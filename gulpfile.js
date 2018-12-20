const gulp = require('gulp');
const minify = require('gulp-minify');
const watch = require('gulp-watch');

gulp.task('default', () => {
    console.log('hi')
})

gulp.task('compress', () => {
    return gulp.src(['*.css', '*.mcss'])
    .pipe(minify())
    .pipe(gulp.dest('dest'))
});

gulp.task('watch', function(){
    gulp.watch('*.css', ['compress']); 
})