angular.module('jsnews.controllers', [])

.controller('IndexController', function($scope, $state, indexFactory) {
  $scope.articles = indexFactory.getArticles().query(
    function(response){
        $scope.articles = response;
        $scope.showArticles = true;
    },
    function(response) {
        $scope.articleMessage = 'Error: ' + response.status + ' ' + response.statusText;
    }
  );

  $scope.podcasts = indexFactory.getPodcasts().query(
      function(response){
          $scope.podcasts = response;
          $scope.showPodcasts = true;
      },
      function(response) {
          $scope.podcastMessage = 'Error: ' + response.status + ' ' + response.statusText;
      }
  );

  $scope.videos = indexFactory.getVideos().query(
    function(response){
        $scope.videos = response;
        $scope.showVideos = true;
    },
    function(response) {
        $scope.videoMessage = 'Error: ' + response.status + ' ' + response.statusText;
    }
  );

  $scope.articlesSwipeLeft = function () {
    $state.go('tab.podcasts');
  };

  $scope.podcastsSwipeLeft = function () {
    $state.go('tab.videos');
  };

  $scope.podcastsSwipeRight = function () {
    $state.go('tab.articles');
  };

  $scope.videosSwipeRight = function () {
    $state.go('tab.podcasts');
  };

});
