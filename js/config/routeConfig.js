angular.module('listaTelefonica').config(function($routeProvider) {
  
  $routeProvider.when('/contatos',{
    templateUrl: 'view/contatos.html',
    controller: 'listaContatosCtrl',
    resolve: {
      contatos : function(contatosAPI) {
        return contatosAPI.getContatos();
      }
    }
  });

  $routeProvider.when('/novo-contato', {
    templateUrl: 'view/novoContato.html',
    controller: 'novoContatoCtrl',
    resolve: {
      operadoras: function(operadorasAPI) {
        return operadorasAPI.getOperadoras();
      }      
    }
  });

  $routeProvider.when('/detalhes-contato/:id', {
    templateUrl: 'view/detalhesContato.html',
    controller: 'detalhesContatoCtrl',
    resolve: {
      contato: function(contatosAPI, $route) {
        return contatosAPI.getContato($route.current.params.id);
      }      
    }
  });

  $routeProvider.when('/error', {
    templateUrl: 'view/error.html',
  });

  $routeProvider.otherwise({redirectTo: '/contatos'});
});