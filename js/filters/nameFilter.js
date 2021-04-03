angular.module('listaTelefonica')
.filter('name', function() {
  return function(input) {
    var listaDeNomes = input.split(' ');

    var listaNomesFormatada = listaDeNomes.map(function(nome) {
      
      // deixa todas as letras em minusculo
      nome = nome.toLowerCase();
      
      // se for "da" ou "de" retorna sem alterar
      if ( /^(da|de)$/.test(nome) ) return nome;
      
      // nos demais casos, retorna com a primeira letra em maiusculo
      return nome.charAt(0).toUpperCase() + nome.substring(1);
    });

    // retorna o nome formatado
    return listaNomesFormatada.join(' ');
  }
});