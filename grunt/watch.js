// This task watches files and runs the appropriate 
// tasks when files are changed.
module.exports = {

    grunt: {
        files: ['Gruntfile.js', 'config/*.js'],
        tasks: ['jshint:grunt']
    },

    js: {
        files: ['config/*.js', 'progressive.js'],
        tasks: ['jshint', 'uglify:dist']
    }

};
