function solucao(ganhos, serasaScore, mesesParaPagar) {
    let juros = 0;
                  
     if (serasaScore < 300) {juros += 3}
    else if (serasaScore >= 700) {juros += 15}
    else {juros += 9};
    
     const parcela = ((ganhos*3) + (ganhos*(juros/100))) / mesesParaPagar;
                        
    console.log(parcela);
}