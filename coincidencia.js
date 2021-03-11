function solucao(jogadas) {
    let zeros = 0;
    let uns = 0;
    for (let item of jogadas) {
        if (item === 0) {zeros += 1}
        else if (item === 1) {uns +=1}
    }
    
    if (zeros === uns) {console.log(true)}
    else {console.log(false)}
}