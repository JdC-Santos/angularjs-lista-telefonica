angular.module('listaTelefonica')
  .controller('novoContatoCtrl', function($scope, contatosAPI, serialGenerator, $location, operadoras) {
    
    $scope.app = 'Lista Telefonica';
    
    // inicia com array vazio os contato e operadoras, para evitar erros
    $scope.operadoras = operadoras.data;

    $scope.adicionarContato = function(contato) {

      contato.serial = serialGenerator.generate();

      contatosAPI.saveContato(contato).then(function(res) {
        
        // reseta os inputs do form
        $scope.contatoForm.$setPristine();
        
        // deleta o objeto que foi criado para salvar o novo contato
        delete $scope.contato;

        $location.path('/contatos');

      }).catch(function(error) {

        // mostra uma mensagem para o usuário
        $scope.message = error.data;

        // mostra o erro no console
        console.log(error);
      });

    }
  });