// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('jsnews', ['ionic', 'ngCordova', 'jsnews.controllers', 'jsnews.services'])
.constant('ApiEndpoint', {url: 'http://devnews-markoch.rhcloud.com/api/v1'})
.filter('trustUrl', ['$sce', function ($sce) {
  return function(url) {
    return $sce.trustAsResourceUrl(url);
  };
}])
.run(function($ionicPlatform, $rootScope, $ionicLoading, $cordovaSplashscreen, $state, $timeout) {

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      // Check reference to avoid runtime error on windows phone
      if( window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar ) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      cordova.plugins.Keyboard.disableScroll(true);

    }

    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    $timeout(function(){
      $state.go('tab.articles');
      if (navigator.splashscreen) {
        $cordovaSplashscreen.hide();
      }
    }, 2000);
  });

  $rootScope.$on('loading:show', function () {
    $ionicLoading.show({
      template: '<ion-spinner></ion-spinner> Loading ...'
    });
  });

  $rootScope.$on('loading:hide', function () {
    $ionicLoading.hide();
  });

  $rootScope.$on('$stateChangeStart', function () {
    $rootScope.$broadcast('loading:show');
  });

  $rootScope.$on('$stateChangeSuccess', function () {
    $rootScope.$broadcast('loading:hide');
  });

})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.articles', {
    url: '/articles',
    views: {
      'tab-articles': {
        templateUrl: 'templates/tab-articles.html',
        controller: 'IndexController'
      }
    }
  })

  .state('tab.podcasts', {
      url: '/podcasts',
      views: {
        'tab-podcasts': {
          templateUrl: 'templates/tab-podcasts.html',
          controller: 'IndexController'
        }
      }
    })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/articles');

});
