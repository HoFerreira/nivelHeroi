let nome = "Hosana";
let nivel = 10.000;

const niveis = [
    {nome: "Ferro", minNivel: 0, maxNivel: 1.000},
    {nome: "Bronze", minNivel: 1.001, maxNivel: 2.000},
    {nome: "Prata", minNivel: 2.001, maxNivel: 5.000},
    {nome: "Ouro", minNivel: 5.001, maxNivel: 7.000},
    {nome: "Platina", minNivel: 7.001, maxNivel: 8.000},
    {nome: "Ascendente", minNivel: 8.001, maxNivel: 9.000},
    {nome: "Imortal", minNivel: 9.001, maxNivel: 10.000},
    {nome: "Radiante", minNivel: 10.001, maxNivel: Infinity}
];

for (let i = 0; i < niveis.length; i++) {
    if(nivel >= niveis[i].minNivel && nivel <= niveis[i].maxNivel) {
        nivel = niveis[i].nome;
        break;
    }
}

console.log(`O herói de nome ${nome} está no nível de ${nivel}`);