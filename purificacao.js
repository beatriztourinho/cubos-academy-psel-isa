function solucao(stringCorrompida) {
    stringCorrompida = stringCorrompida.replace('!', '');
    stringCorrompida = stringCorrompida.replace('@', '');
    stringCorrompida = stringCorrompida.replace('#', '');
    stringCorrompida = stringCorrompida.replace('$', '');
    stringCorrompida = stringCorrompida.replace('%', '');
    stringCorrompida = stringCorrompida.replace('&', '');
    stringCorrompida = stringCorrompida.replace('*', '');
    stringCorrompida = stringCorrompida.replace('(', '');
    stringCorrompida = stringCorrompida.replace(')', '');
    
    console.log(stringCorrompida)
}