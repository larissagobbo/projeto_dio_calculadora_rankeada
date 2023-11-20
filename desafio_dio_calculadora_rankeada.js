// Função que calcula o nível com base na quantidade de vitórias e derrotas
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de Rankeadas
    const saldoVitorias = vitorias - derrotas;

    // Determina o nível com base nas condições especificadas
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorna uma mensagem formatada com o saldo e nível
    return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}

// Exemplo de uso da função
const resultado = calcularNivel(82,1); // Substitua esses valores pelos valores desejados

// Exibe o resultado no console
console.log(resultado);