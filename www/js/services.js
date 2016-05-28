angular.module('jsnews.services', ['ngResource'])

.service('indexFactory', ['$resource', 'ApiEndpoint', function($resource, ApiEndpoint) {
    this.getHeadlines = function() {
        return $resource(ApiEndpoint.url + '/headlines', null);
    };

    this.getBestArticles = function() {
        return $resource(ApiEndpoint.url + '/headlines', null);
    };

    this.getArticles = function() {
        return $resource(ApiEndpoint.url + '/articles', null);
    };

    this.getPodcasts = function() {
        return $resource(ApiEndpoint.url + '/podcasts', null);
    };

    this.getVideos = function() {
        return $resource(ApiEndpoint.url + '/videos', null);
    };
}])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
