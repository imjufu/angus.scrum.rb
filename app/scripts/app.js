'use strict';

angular.module('angus.scrum.rbApp', ['ngResource'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/product/:productId/stories.html', {
        templateUrl: '/views/stories.html',
        controller: 'StoryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  })
  .factory('Products', function($resource) {
    return $resource('http://api-scrum-rb.herokuapp.com/products/:id', {
      id: '@id'
    }, {
      query :   { method : 'GET', isArray : true },
      save :    { method : 'PUT' },
      create :  { method : 'POST' },
      destroy : { method : 'DELETE' }
    });
  })
  .factory('Stories', function($resource, $routeParams) {
    return $resource('http://api-scrum-rb.herokuapp.com/products/' + $routeParams.productId + '/stories/:id', {
      id: '@id'
    }, {
      query :   { method : 'GET', isArray : true },
      save :    { method : 'PUT' },
      create :  { method : 'POST' },
      destroy : { method : 'DELETE' }
    });
  });
