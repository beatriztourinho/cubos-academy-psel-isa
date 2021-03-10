function solucao(produtos, valorMaximo, avaliacaoMinima) {

    function temrequisitos (produtos) {
          if (produtos.valor <= valorMaximo && produtos.avaliacao >= avaliacaoMinima) {
              return true
          } else {
             return false
          }
      }
         let resposta = produtos.filter(temrequisitos);
        
        console.log (resposta);
      
    }