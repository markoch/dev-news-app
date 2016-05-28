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
    $state.go('tab.chats');
  };

  $scope.podcastsSwipeLeft = function () {
    $state.go('tab.account');
  };

  $scope.podcastsSwipeRight = function () {
    $state.go('tab.dash');
  };

  $scope.videosSwipeRight = function () {
    $state.go('tab.chats');
  };

})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
