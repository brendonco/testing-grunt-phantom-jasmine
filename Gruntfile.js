module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        phantom_jasmine: {
            command: 'vendor/phantomjs-2.1.1-macosx/bin/phantomjs runjasmine2.js http://localhost:8081/vendor/jasmine-standalone-2.5.2/SpecRunner.html'
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-phantom-jasmine');

    // Default task(s).
    grunt.registerTask('default', ['phantom_jasmine']);


}
