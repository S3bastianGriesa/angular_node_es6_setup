'use strict';

angular.module('app', ['ngResource', 'ngRoute', 'ui.bootstrap', 'ngAnimate'])
  .config([
    '$routeProvider', ($routeProvider) => {
      $routeProvider.when('/', {
        templateUrl: './js/directives/startsite/template.html',
        controller: 'startsiteCtrl',
      });
    },
  ]);
