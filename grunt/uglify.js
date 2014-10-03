var files = {
    'progressive.min.js': [
        'progressive.js'
    ]
};

// Grunt configuration settings
module.exports.config = {
    options: {
        mangle:   false,
        report:   'min' // 'false', 'min' or 'gzip' Default: false
    },
    dist: {
        files: files
    },
    dev: {
        options: {
            compress: false,
            beautify: true
        },
        files: files
    }
};
