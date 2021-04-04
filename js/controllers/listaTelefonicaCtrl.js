angular.module('listaTelefonica')
  .controller('listaTelefonicaCtrl', function($scope, contatosAPI, operadorasAPI, serialGenerator) {
    
    $scope.app = 'Lista Telefonica';
    
    // inicia com array vazio os contato e operadoras, para evitar erros
    $scope.contatos = [];
    $scope.operadoras = [];

    // função para carregar os contatos da API
    carregarContatos = function() {
      
      contatosAPI.getContatos().then(function(res) {
        $scope.contatos = res.data;
      }).catch(function(error) {
        $scope.message =  'Não foi possivel carregar os dados!';
      });
    }

    // função para carregar as operadoras da API
    carregarOperadoras = function() {
      operadorasAPI.getOperadoras().then(function(res) {
        $scope.operadoras = res.data;
      })
    }

    $scope.adicionarContato = function(contato) {

      contato.serial = serialGenerator.generate();

      contato.data = new Date();

      contatosAPI.saveContato(contato).then(function(res) {
        
        // recarrega os dados em caso de sucesso
        carregarContatos();
        
        // reseta os inputs do form
        $scope.contatoForm.$setPristine();
        
        // deleta o objeto que foi criado para salvar o novo contato
        delete $scope.contato;

      }).catch(function(error) {

        // mostra uma mensagem para o usuário
        $scope.message = error.data;

        // mostra o erro no console
        console.log(error);
      });

    }

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

    // carrega os contatos e operadoras ao carregar a página
    carregarContatos();
    carregarOperadoras();
  });