var solenews = angular.module('solenewsApp', [
  'ngRoute',
  'ngSanitize',
]).config(['$routeProvider',
  function($routeProvider) {
    "use strict";

    $routeProvider.when('/', {
      templateUrl: admin_url + 'partials/home.html',
      controller: homeController
    }).
    when('/news/:category', {
      templateUrl: admin_url + 'partials/home.html',
      controller: homeController
    }).
    when('/view', {
      templateUrl: admin_url + 'partials/view.html',
      controller: viewController
    });
  }
]);

solenews.config(['$httpProvider',
  function($httpProvider) {
    "use strict";
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  }
]);

var ngrepeat_counter = 1;
solenews.directive('featuredDirective', function() {
  return function(scope, element, attrs) {
    var link = '<a href="#" data-slide="' + ngrepeat_counter + '">' + ngrepeat_counter + '</a>';
    $(".featured-carousel-pagination").append(link);
    ngrepeat_counter++;
    if (scope.$last) {
      $('.featured-carousel').carousel();
      ngrepeat_counter = 1;
    }
  };
});

solenews.directive('lazyLoadDirective', function() {
  return function(scope, element, attrs) {
    if (scope.$last){
      $('img.lazy').lazyload();
    }
  };
});