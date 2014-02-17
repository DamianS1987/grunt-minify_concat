'use strict';

module.exports = function (grunt) {

  /* The main configuration for your dev env. Put all your magic here */
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ";"
      },
      dist: {
        src: ['public/js/*.js'],
        dest: 'public/js_dest/app.js'
      }
    },
    uglify: {
      options: {
        banner: "/* here you can put some comments about your app */"
      },
      dist: {
        files: {
          "public/js_dest/app.js": ['<%= concat.dist.dest %>']
        }
      }
    }
  });

  /* tell Grunt what deps you want to load */
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  /* register our "grunt build" task */
  grunt.registerTask('build', ["concat", "uglify"]);
};
