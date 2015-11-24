var gulp = require('gulp');
var markdown = require('gulp-markdown');
var marked = markdown.marked;
var renderer = new marked.Renderer();

renderer.heading = function (text, level) {
  return 'わかる';
};

gulp.task('md', function () {
  return gulp.src('sample.md')
    .pipe(markdown({
      renderer: renderer
    }))
    .pipe(gulp.dest('dist'));
});

