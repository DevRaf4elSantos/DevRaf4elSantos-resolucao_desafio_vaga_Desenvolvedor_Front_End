// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

const SP = 67836.43;
const RJ = 36678.66;
const MG = 29229.88;
const ES = 27165.48;
const OUTROS = 19849.53;
const TOTALFATURADO = SP + RJ + MG + ES + OUTROS;

const CalcularPorcentagem = (mes) => {
    let porcentagem = (mes / TOTALFATURADO) * 100;
    return porcentagem.toFixed(2);
}

console.log(CalcularPorcentagem(OUTROS));
