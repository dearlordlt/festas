module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		ngAnnotate: {
			options: {
				singleQuotes: true
			},
			app: {
				files: {
					'./app/min-safe/bower.js': [
														'./app/bower_components/angular/angular.js',
														'./app/bower_components/angular-loader/angular-loader.js',
														'./app/bower_components/angular-mocks/angular-mocks.js',
														'./app/bower_components/angular-ui-router/release/angular-ui-router.js',
														'./app/bower_components/jquery/dist/jquery.js',
														'./app/bower_components/bootstrap/dist/js/bootstrap.js',
														'./app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
														'./app/bower_components/angular-ui-grid/ui-grid.js',
														'./app/bower_components/angular-ui-grid/ui-grid.min.js'
					],
					'./app/min-safe/controllers.js': [
														'./app/akademonai/ad.okultas/okultas.js',
														'./app/akademonai/ad.sventove/sventove.js',
														'./app/akademonai/ad.paktas/paktas.js',
														'./app/akademonai/ad.paktas/paktas.srv.js',
														'./app/akademonai/ad.paktas/paktas.titulas.srv.js',
														'./app/akademonai/ad.apeigos/apeigos.js',
														'./app/akademonai/ad.pateptieji/pateptieji.js',
														'./app/akademonai/ad.blasphemer/blasphemer.js',
														'./app/akademonai/ad.lentele/lentele.js',
														'./app/akademonai/ad.directives/ad.blasphemer.mod.js',
														'./app/akademonai/ad.directives/ad.blasphemer.drv.js',
														'./app/akademonai/ad.directives/ad.blasphemer.drv.old.js',
														'./app/akademonai/ad.directives/ad.blasphemer.srv.js',
														'./app/akademonai/MenuController.js'
					]
				}
			}
		},
		html2js: {
			dist: {
				src: [ './app/akademonai/*/*.html' ],
				dest: './app/min-safe/templates.js'
			}
		},
		concat: {
			js: { //target
				src: ['./app/min-safe/bower.js','./app/min-safe/templates.js', './app/app.js', './app/min-safe/controllers.js'],
				dest: './app/min/app.js'
			}
		},
		uglify: {
			js: { //target
				src: ['./app/min/app.js'],
				dest: './app/min/app.min.js'
			}
		}
		
	});
	
	//load grunt tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-html2js');
	
	//register grunt default task
	grunt.registerTask('default', ['ngAnnotate','html2js', 'concat', 'uglify']);
}