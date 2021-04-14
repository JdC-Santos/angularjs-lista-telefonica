angular.module('listaTelefonica')
.factory('timestampInterceptor', function() {
  return {
    request: function (config) {
      
      // se for o carregamento de uma view, retorna da forma como está
      if (config.url.indexOf('view') > -1) return config;

      config.url += '?timestamp='+ (new Date).getTime();
      
      return config;
    }
  }
});