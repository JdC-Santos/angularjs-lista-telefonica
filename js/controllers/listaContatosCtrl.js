angular.module('listaTelefonica')
  .controller('listaContatosCtrl', function($scope, contatos) {
    
    $scope.app = 'Lista Telefonica';
    
    // inicia com array vazio os contato e operadoras, para evitar erros
    $scope.contatos = contatos.data;

    var init = function() {
      calcularImpostos($scope.contatos);
    }

    var calcularImpostos = function(contatos) {
      contatos.forEach(contato => {
        contato.operadora.precoComImposto = calcularImposto(contato.operadora.preco);
      });
    }

    $scope.apagarContatos = function(contatos) {
      $scope.contatos = contatos.filter(function(e) {
        return !e.selecionado;
      });

      $scope.verificarContatoSelecionado($scope.contatos);
    }

    $scope.verificarContatoSelecionado = function(contatos) {
      $scope.hasContatoSelecionado = contatos.some(function(contato){ 
        return contato.selecionado;
      });
    }

    $scope.ordenarPor = function(campo) {
      $scope.criterioDeOrdenacao = campo;
      $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
    }

    var calcularImposto = function(valor) {
      var imposto = 1.2;
      return valor * imposto;
    }

    $scope.reset = function() {
      $scope.contatos = angular.copy($scope.contatos);
    }

    init();
  });