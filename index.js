//Interpolação da variável com o texto.
const nomeCompleto = 'Maria Clara da Silva Rodrigues';
console.log(`Nome completo: ${nomeCompleto}`);

console.log(' ');

//Soma de 2 números e o resultado.
let num1 = 10;
let num2 = 20;
let res = num1 + num2;
console.log(`Soma de 2 números: ${num1} + ${num2} = ${res}`);

console.log(' ');

//Saudação com a frase de uma campeã do League of Legends(Um jogo de moba).
function saudacao() {
    console.log(`Hello, I'm Jinx!`)
}
saudacao();

console.log(' ');

//Multiplicação de 2 números e seu resultado.
function multiplica(a,b) {
    let res = a * b;
    console.log(`A multiplicação de ${a} x ${b} = ${res}`);
    return res;
}
multiplica(5,10);

console.log(' ');

//Função que diz se você é maior de idade e se pode ou não dirigir.
function maiorDeIdade(idade) {
    if(idade >= 18) {
        console.log('Congratulations! Você é maior de idade e pode dirigir.');
    } else {
        console.log(`It's bad! Você é menor de idade, nâo pode dirigir ainda.`);
    }
}
maiorDeIdade(18);

console.log(' ');

//Contador.
console.log('Contador de 0 á 20: ')
for (let i = 0; i <= 20; i++) {
    console.log(i);
}

console.log(' ');

//Contador de números pares.
console.log('Números pares:')
for (let i = 0; i <= 20; i+=2) {
    console.log(i);
}

console.log(' ');

//Tabuada
function tabuada(n) {
    console.log(`Tabuada é do: ${n}`)
    for(let i = 0; i <= 10; i++) {
        let res = n * i;
        console.log(`${n} x ${i} = ${res}`);
    }
}
tabuada(5);

console.log(' ');

//Convertor de horas, ele converte minutos em horas.
function converterHoras(min) {
    let conversor = min/60;
    console.log(`${min} minuto(s) são: ${conversor.toFixed(2)} hora(s)`);
}
converterHoras(100);