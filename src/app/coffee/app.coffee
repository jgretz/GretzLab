window.app = angular.module("app", ["config", "ngRoute"])

window.app.registerElementDirective = (name, controller, templatePath, scope) ->
	angular.module('app').directive name, ->
	    restrict: 'E'
	    replace: true
	    controller: controller
	    templateUrl: 'app/templates/' + templatePath
	    scope: scope

	    link: (scope, element, attr, ctrl) ->	    	
	    	ctrl.link(scope, element, attr, ctrl) if ctrl.link