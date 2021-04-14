angular.module('listaTelefonica')
  .controller('listaContatosCtrl', function($scope, contatos) {
    
    $scope.app = 'Lista Telefonica';
    
    // inicia com array vazio os contato e operadoras, para evitar erros
    $scope.contatos = contatos.data;

    $scope.apagarContatos = function(contatos) {
      $scope.contatos = contatos.filter(function(e) {
        return !e.selecionado;
      });
    }

    $scope.isContatoSelecionado = function(contatos) {
      return contatos.some(function(contato){
        return contato.selecionado;
      });
    }

    $scope.ordenarPor = function(campo) {
      $scope.criterioDeOrdenacao = campo;
      $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
    }
  });