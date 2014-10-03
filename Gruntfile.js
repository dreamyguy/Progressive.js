module.exports = function(grunt) {

    // Import task configurations
    var jshint = require('./grunt/jshint'),
        uglify = require('./grunt/uglify'),
        watch = require('./grunt/watch');

    // Main project configuration.
    grunt.initConfig({
        // Read NPM package information
        pkg: grunt.file.readJSON('package.json'),
        // Static code analysis of Javascript
        jshint: jshint,
        // Concatenate, minify and beautify/uglify Javascript
        uglify: uglify.config,
        // Watcher
        watch: watch
    });

    // Load the grunt tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Compile production files
    grunt.registerTask('dist', [
        'jshint',
        'uglify:dist'
    ]);

    // Compile developer friendly environment
    grunt.registerTask('dev', [
        'jshint',
        'uglify:dev'
    ]);

    // Default task(s).
    grunt.registerTask('default', 'dist');

};
