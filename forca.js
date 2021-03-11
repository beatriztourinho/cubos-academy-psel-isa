function solucao(palpite, palavra) {
    let resposta = 0
    for (let item of palavra) {
        if (item === palpite) {
            resposta +=1
        }
    }
    
    console.log(resposta)
}