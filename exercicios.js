let f = 8;
let calc = (f - 32) / 1.8;
console.log(`${calc.toFixed(2)}°C`)

console.log("------")

let nome = "Lucas";
let sobrenome = "Damasceno";
let nomeCompleto = nome + sobrenome;
console.log(nomeCompleto)

console.log("------")

let nota1 = 3;
let nota2 = 2;
let nota3 = 1;
let nota4 = 4;
let nota5 = 5;

let calc2 = nota1 + nota2 + nota3 + nota4 + nota5;
let resultadoMedia = calc2 / 5;
console.log(`O resultado da média das notas são: ${resultadoMedia}`)

console.log("------")

let comprimentoM = 20;
let larguraM = 40;
let calcArea = comprimentoM * larguraM;
let area = calcArea
console.log(`A área do terreno é de ${area}KM²`)
console.log(`Que ficam aproximadamente ${area * 100} hectares.`)

console.log("------")

let kelvin = 23;
let convert = kelvin - 273;
console.log(`${kelvin}K. transformado para Celsius fica ${convert}℃.`)

console.log("------")

let a = 6;
let b = 5;
let c = 4;

if (a > b) {
    console.log(a)
} else if (c > b) {
    console.log(c)
} else {
    console.log(b)
}

console.log("------")

let triangulo = 5;
let triangulo2 = 2;
let triangulo3 = 9;

let somaLados = triangulo + triangulo2;

if (somaLados > triangulo3) {
    console.log("O triangulo é possivel.")
} else {
    console.log("Não é possivel fazer um triangulo")
}

console.log("------")

let idade = -23;

if (idade >= 130 || idade <= 0) {
    console.log(`Aviso a idade ${idade} é invalida.`)
} else {
    console.log(`Aviso, a idade ${idade} é valida!`)
}

console.log("------")

let salario = 1500;
let qntdeDependentes = 6;

if (qntdeDependentes <= 0) {
    console.log("O reajuste não vai ser realizado.")
} else if (qntdeDependentes <= 5) {
    salario = salario * 1.3;
    console.log(`O salario subiu em 30% e ficou em ${salario} Reais`)
} else if (qntdeDependentes > 5) {
    salario = salario * 1.4;
    console.log(`O salario subiu em 40% e ficou em ${salario} Reais`)
}

console.log("------")

let diaSemana = 6;

switch (diaSemana) {
    case 7:
        console.log("Domingo")
        break;
    case 1:
        console.log("Segunda-Feira")
        break;
    case 2:
        console.log("Terça-Feira")
        break;
    case 3:
        console.log("Quarta-Feira")
        break;
    case 4:
        console.log("Quinta-Feira")
        break;
    case 5:
        console.log("Sexta-Feira")
        break;
    case 6:
        console.log("Sabado")
        break;
    default:
        console.log("O numero informado é invalido.")
        break;
}

console.log("------")

let ano = 2024;
if (
    (ano % 4 == 0 && ano % 100 != 0) ||
    (ano % 4 == 0 && ano % 100 == 0 && ano % 400 == 0)
) {
    console.log(`${ano} é um ano bissexto`);
} else {
    console.log(`${ano} não é um ano bissexto`);
}

console.log("------")

let caractere = "c";

switch (caractere) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("É uma vogal")
        break;

    default:
        console.log("É uma consoante")
        break;
}

console.log("------")

let mesAno = 08;

switch (mesAno) {
    case 01:
        console.log("O mês é Janeiro")
        break;
    case 02:
        console.log("O mês é Fevereiro")
        break;
    case 03:
        console.log("O mês é Março")
        break;
    case 04:
        console.log("O mês é Abril")
        break;
    case 05:
        console.log("O mês é Maio")
        break;
    case 06:
        console.log("O mês é Junho")
        break;
    case 07:
        console.log("O mês é Julho")
        break;
    case 08:
        console.log("O mês é Agosto")
        break;
    case 09:
        console.log("O mês é Setembro")
        break;
    case 10:
        console.log("O mês é Outubro")
        break;
    case 11:
        console.log("O mês é Novembro")
        break;
    case 12:
        console.log("O mês é Dezembro")
        break;

    default:
        console.log("O mês inserido não corresponde a nenhum mês do ano.")
        break;
}

console.log("------")

const mes = 2;
switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log('31 dias');
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log('30 dias');
        break;
    case 2:
        console.log('28 dias em anos não bissextos');
        break;
    default:
        console.log('Mês inválido');
}

console.log("------")

let estacaoAno = 1;

switch (estacaoAno) {
    case 1:
        console.log("Primavera")
        break;
    case 2:
        console.log("verão")
        break;
    case 3:
        console.log("outono")
        break;
    case 4:
        console.log("inverno")
        break;

    default:
        console.log("Numero invalido.")
        break;
}

console.log("------")

let notaa = 0;

switch (notaa) {
    case 0:
    case 1:
    case 3:
    case 4:
        console.log("Insuficiente.")
        break;
    case 5:
    case 6:
        console.log("Regular.")
        break;
    case 7:
    case 8:
        console.log("Bom.")
        break;
    case 9:
    case 10:
        console.log("Excelente.")
        break;
    default:
        console.log("Nota invalida")
        break;
}

console.log("------")

let numberR = 0;

while (numberR <= 10) {
    if (numberR % 2 == 0) {
        console.log(numberR)
    }
    numberR++
}

console.log("------")

for (let i = 1; i <= 10; i++) {

    let i2 = i * 7;
    console.log(i2)

}

console.log("------")

let primeiroNumero = 0;
let segundoNumero = 1;
for (let i = 1; i <= 10; i++) {
    const proximoTermo = primeiroNumero + segundoNumero;
    primeiroNumero = segundoNumero;
    segundoNumero = proximoTermo;
    console.log(primeiroNumero);
}

console.log("------")


let asterisco = ""
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        asterisco += "*";
    }
    asterisco += "\n"
}
console.log(asterisco);

console.log("------")

for (let m = 10; m > 0; m--) {
  console.log(m)
   
}

console.log("------")

for (let d = 0; d < 1000; d++) {
   if (d %3 == 0 ) {
    console.log(d)
   }
    
}