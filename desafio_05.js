// 05 Escreva um programa que inverta os caracteres de um string.

let string = 'financiamento';

function inverterTexto(texto){
    let tamanhoTexto = texto.length;
    let textoInvertido = ''
    for(let i = 0; tamanhoTexto > i; tamanhoTexto--){
        let arrayTexto = Array.from(texto);
        let inversao = arrayTexto[tamanhoTexto-1]
        textoInvertido += inversao;
    }
    console.log(textoInvertido.trim());
    
}
inverterTexto(string)