// Variável para guardar a string inicial
let string = "ola, tenha um bom dia";

// Variável para guardar a String sem espaços e fora da ordem
let stringZerada = string.split(' ').sort().join('');

// Variável para guardar o tamanho da String sem espaços
let NString = stringZerada.length;

// Variável para guardar o númro de linhas e colunas
let NLinhaXColuna = Math.ceil(Math.sqrt(NString));

//Loop para iterar a String, utilizando fatiamento a cada loop
//c é um contador para somar a cada loop
// A variável NLinhaXColuna é utilizada porque representa o número variável da string recebida
c = 0;
for(let i = 0; i < NLinhaXColuna; i++){
    console.log(stringZerada.slice(c, c + NLinhaXColuna));
    c += NLinhaXColuna;
}