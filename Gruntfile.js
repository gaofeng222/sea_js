module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat:{
      webapp : {
        files : {
           'dist/main.js' : ['module5.js','module6.js','module7.js','range.js']
        }
      }
    },
    uglify:{
      webapp : {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        files : {
          'dist/main.min.js' : ['dist/main.js']
        }
      }
    }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['concat','uglify']);

};