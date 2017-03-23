module.exports = function(grunt) {
    grunt.initConfig({
        mochaTest: {
            src: 'test.js',
            options: {
                reporter: 'spec'
            }
        }
    });

    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask('test', 'mochaTest');
};