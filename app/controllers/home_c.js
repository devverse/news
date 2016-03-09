function homeController($scope, $rootScope, $routeParams, $location, news_service) {
  
  $scope.news = [];
  $scope.show_loading = true;

  $scope.getNews = function() {
    $scope.showLoading = true;
    news_service.getFeeds().then(
      function(data) {
        $scope.formatData(data);
      }, function(err) {
        alert(err);
      });
  };

  $scope.formatData = function(data) {
    $scope.show_loading = false;

    for (var x = 0; x < data.length; x++) {
      var html, image;

      html = $.parseHTML(data[x].description);

      image = $(html).find('img:first');

      var src = image.attr('src');
      
      if (typeof src != "undefined") {
        data[x].thumbnail = src;
      } else {
        data[x].thumbnail = 'http://soleinsider.com/images/default.jpg';
      }

      $scope.news.push(data[x]);
    }
  };
  
  $scope.getFeedsByCategory = function(category) {
    $scope.news = [];
    $scope.showLoading = true;

    var post = "category=" + category;
    news_service.getFeedsByCategory(post).then(
      function(data) {
        $scope.formatData(data);
      }, function(err) {
        alert(err);
      });
  };

  $scope.view = function(event, article) {
    event.preventDefault();
    localStorage.setItem("article", JSON.stringify(article));
    $location.path('view');
  };

  $scope.init = (function() {
    
    var category = $routeParams.category;

    if (typeof category == 'undefined') {
      $scope.getNews();
    } else {
      $scope.getFeedsByCategory(category);
    }

    $rootScope.$emit("featured", false);
    $rootScope.$emit("showback_button", false);
    window.showBannerAd();
  })();
}

homeController.$inject = ['$scope', '$rootScope', '$routeParams', '$location', 'news_service'];