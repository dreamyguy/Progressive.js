var gruntfiles = ['Gruntfile.js', 'config/*.js'];
var jsfiles = [
    'Gruntfile.js',
    'config/*.js',
    'progressive.js'
];

module.exports = {
    options: {
        evil: true
    },
    grunt: gruntfiles,
    all: jsfiles
};
