angular.module('ui')
  .run( function($templateCache) {
    $templateCache.put('view/uiAccordion.html',
      '<div class="bg-secondary bg-gradient text-white ui-accordion-title" ng-click="open()">'+
        '{{ title }}'+
      '</div>'+
      '<div class="ui-accordion-content" ng-show="isOpened" ng-transclude></div>'
    );
});

angular.module('ui')
  .directive('uiAccordions', function() {
    return {
      controller: function($scope, $element, $attrs) {
        var accordions = [];

        this.registerAccordion = function(accordion) {
          accordions.push(accordion);
        }

        this.closeAll = function() {
          accordions.map((accordion) => {
            accordion.isOpened = false;
          })
        }
      }
    }
  })
  .directive('uiAccordion', function() {
    return {
      templateUrl: 'view/uiAccordion.html',
      transclude: true,
      scope: {
        title: '@'
      },
      require: '^uiAccordions',
      link(scope, elements, attrs, ctrl) {
        ctrl.registerAccordion(scope);
        scope.open =  function() {
          ctrl.closeAll();
          scope.isOpened = true;
        }
      }
    }
  });