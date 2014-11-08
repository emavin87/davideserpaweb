module.exports = function(grunt){

grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    less: {
         build: {
            files: {"public/css/dsweb.css": "public/less/dsweb.less"}
         }
     },
     uglify: {
      build: {
        src: 'public/js/dsweb.js',
        dest: 'public/js/dsweb.min.js'
      }
    },
	bowercopy:{
	  options: {
	    srcPrefix: 'bower_components'
	  },
	  scripts: {
	    options: {
	      destPrefix: 'public/js'
	    },
	    files: {
	      'jquery/jquery.js': 'jquery/jquery.js',
	      'angular/angular.js': 'angular/angular.js'
	    }
	  }
	}
});

	grunt.loadNpmTasks('grunt-bowercopy');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.registerTask('default',['uglify'],['less'],['bowercopy']);

};