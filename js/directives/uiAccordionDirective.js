angular.module('listaTelefonica')
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
      templateUrl: 'view/accordion.html',
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