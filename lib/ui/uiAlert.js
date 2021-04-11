angular.module('ui')
  .run(function($templateCache) {
    $templateCache.put('view/alert.html',
      '<divclass="alert alert-danger" role="alert" >'+
        '<b ui-alert-title>{{ title }}</b><span ng-transclude></span>'+
      '</div>'
    );
  });

angular.module('ui')
.directive('uiAlert', function() {
  return {
    replace: true,
    restrict: 'AE',
    transclude: true,
    scope: {
      title: '@'
    },
    templateUrl: 'view/alert.html'
  };
});