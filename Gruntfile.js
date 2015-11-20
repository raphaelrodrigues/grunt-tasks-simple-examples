/*jslint node: true */
'use strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.config.init({
        yeoman: {
            // configurable paths
            dist: 'dist'
        },

        useminPrepare: {
            html: '**/*.html',
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },

        usemin: {
            html: ['<%= yeoman.dist %>/*.html'],
        },

        copy: {
            html: {
                src: ['index.html', 'index2.html'], // copy all files and subfolders **with ending .html**
                dest: '<%= yeoman.dist %>/', // destination folder
            }
        },

        wiredep: {
            task: {
                src: '**/*.html',
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            dev: ['assets/js/**/*.js'],
            all: 'Grunfile.js'
        },

        app: {
            // Application variables
            scripts: [
                // JS files to be included by includeSource task into index.html
                'assets/js/*.js'
            ]
        },

        includeSource: {
            // Task to include files into index.html
            options: {
                basePath: '',
                baseUrl: '',
                ordering: 'top-down'
            },
            app: {
                files: {
                    'index.html': 'index.html'
                }
            }
        },

        htmllint: {
            all: '*.html'
        },

    });

    grunt.registerTask('default', [

        'copy:html',
        'useminPrepare',
        'concat',
        'uglify',
        'cssmin',
        'usemin'
    ]);

    grunt.registerTask('cenas', [
        'includeSource',
        'wiredep'
    ]);

    grunt.registerTask('check-code', ['htmllint', 'jshint:dev']);

}
