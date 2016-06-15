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

    this.incrementArticle = function(articleId) {
        return $resource(ApiEndpoint.url + '/articles/' + articleId + '/link', null,
        {
            'update': { method:'PUT' }
        });
    };

    this.getPodcasts = function() {
        return $resource(ApiEndpoint.url + '/podcasts', null);
    };

    this.incrementPodcast = function(podcastId) {
        return $resource(ApiEndpoint.url + '/podcasts/' + podcastId + '/link', null,
        {
            'update': { method:'PUT' }
        });
    };

    this.getVideos = function() {
        return $resource(ApiEndpoint.url + '/videos', null);
    };

    this.incrementVideo = function(videoId) {
        return $resource(ApiEndpoint.url + '/videos/' + videoId + '/link', null,
        {
            'update': { method:'PUT' }
        });
    };
}]);
