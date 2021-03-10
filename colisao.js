function solucao(velocidade, aceleracao, distanciaObjeto) {
    let distanciaderrapagem = -(velocidade * velocidade) / (2 * aceleracao);
    
    if (distanciaObjeto < distanciaderrapagem) {
        console.log('COLISAO A FRENTE')
    } else if (distanciaObjeto === distanciaderrapagem) {
        console.log('NAO ACELERE')
    } else {console.log('CAMINHO SEGURO')}
}