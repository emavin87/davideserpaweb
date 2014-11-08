'use strict'

var dsApp=angular.module("dsApp",['ngRoute']);


dsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'template/index.html',
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

dsApp.config(['$provide',function($provide) {
    $provide.decorator('ngViewDirective', function($delegate) {
        var directive = $delegate[0];
        directive.replace = true;
        return $delegate;
    });
  }
]);
