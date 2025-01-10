const URL = "https://github.com/DevRaf4elSantos/DevRaf4elSantos-resolucao_desafio_vaga_Desenvolvedor_Front_End/raw/main/dados.json";

fetch(URL)
    .then(response => response.json())
    .then(dados => {
        let menorValor = 100000;
        let diaMenorValor = -1;
        let maiorValor = 0;
        let diaMaiorValor= -1;
        dados.map(dado => {
            if(dado.valor > 0 && dado.valor < menorValor){
                menorValor = dado.valor;
                diaMenorValor = dado.dia;
            }
            if(dado.valor > maiorValor){
                maiorValor = dado.valor;
                diaMaiorValor = dado.dia;
            }
        })

        console.log(`o menor dia de vendas foi ${diaMenorValor} com o valor de R$ ${menorValor.toFixed(2)}`)
        console.log(`o maior dia de vendas foi ${diaMaiorValor} com o valor de R$ ${maiorValor.toFixed(2)}`)
        
    })
    .catch(error => {
        console.error('Erro ao buscar os dados:', error);
    });