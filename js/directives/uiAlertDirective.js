angular.module('listaTelefonica')
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