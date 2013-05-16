"use strict";angular.module("angus.scrum.rbApp",["ngResource"]).config(["$routeProvider","$locationProvider",function(r,t){r.when("/",{templateUrl:"/views/main.html",controller:"MainCtrl"}).when("/product/:productId/stories.html",{templateUrl:"/views/stories.html",controller:"StoryCtrl"}).otherwise({redirectTo:"/"}),t.html5Mode(!0)}]).factory("Products",["$resource",function(r){return r("http://api-scrum-rb.herokuapp.com/products/:id",{id:"@id"},{query:{method:"GET",isArray:!0},save:{method:"PUT"},create:{method:"POST"},destroy:{method:"DELETE"}})}]).factory("Stories",["$resource","$routeParams",function(r,t){return r("http://api-scrum-rb.herokuapp.com/products/"+t.productId+"/stories/:id",{id:"@id"},{query:{method:"GET",isArray:!0},save:{method:"PUT"},create:{method:"POST"},destroy:{method:"DELETE"}})}]),angular.module("angus.scrum.rbApp").controller("MainCtrl",["$scope","Products",function(r,t){r.products=t.query(),r.edit=function(t){r.product=t},r.save=function(){r.product.$save?r.product.$save():r.products.push(t.create(r.product))},r.delete=function(t,o,e){e.stopPropagation(),r.products.splice(o,1),t.$destroy()}}]),angular.module("angus.scrum.rbApp").controller("StoryCtrl",["$scope","Stories",function(r,t){r.stories=t.query()}]);