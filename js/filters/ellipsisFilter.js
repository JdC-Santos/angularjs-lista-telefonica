angular.module('listaTelefonica')
.filter('ellipsis', function() {
  return function(input, size) {
    
    // se o nome for menor ou igual ao tamanho máximo, retorna ele sem alterações
    if (input.length <= size) return input;
    
    // se for maior, faz a alteração no nome
    var output = input.substring(0, (size || 2)) + '...';

    // retorna o nome alterado
    return output;
  }
});