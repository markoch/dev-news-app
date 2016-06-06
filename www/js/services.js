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
}]);
