
# **Repositório do Desafio da Academia Técnica Capgemini 2022**

<ul>
<li>Liguagem utilizada: JavaScript.</li>
<li>Execução do código deve ser feita através do node.</li>
<li> O link para o código fonte está no título de cada questão.</li>
</ul>
<hr>

## [**Questão 1**](https://github.com/thiago-muniz/repositorio/blob/main/questao1.js)

<p>A mediana de uma lista de números é basicamente o elemento que se encontra no meio da lista após a ordenação. Dada uma lista de números com um número ímpar de elementos, desenvolva um algoritmo que encontre a mediana. Exemplo:</p>
<p>Entrada: arr = [9, 2, 1, 4, 6]</p>
<p>Saída: 4</p>
<br>

### **Solução:**

```javascript
let array = [9, 2, 1, 4, 6,];
// Ordenação da Array
array = array.sort();
// Iteração da array
for(let i = 0; i < array.length; i++){
    let mediana = Math.floor(array.length/2);
    // Array dividida por 2, arredondada para baixo pois o resultado é float
    
    // Avaliação se o indice atual é igual ao valor encontrado anteriormente na variável mediana
    if(i == mediana){
        console.log(array[i]);
    }
}
```
### **Saída:**

```
4
```
<hr>

## [**Questão 2**](https://github.com/thiago-muniz/repositorio/blob/main/questao2.js)

<p>Dado um vetor de inteiros n e um inteiro qualquer x. Construa um algoritmo que determine o número de elementos pares do vetor que tem uma diferença igual ao valor de x.
Exemplo:</br>
Entrada:
n = [1, 5, 3, 4, 2]</br>
Saída:
3
</p>

### **Solução:**

```javascript
let inteiroX = 2; // Número Qualquer
let n = [1, 5, 3, 4, 2]; // Array inicial

const paresGeral = []; // Array para armazenar os pares possíveis

let c = 0; // Variável contador
//Iteração da array inicial e alimentação da array de pares
for(let j = 0; j < n.length; j++){ 
    for(let i = 0; i < n.length; i++){
        if(n[c]!= n[i]){
            paresGeral.push([n[c],n[i]])
        }    
    }
    c += 1;
}

const paresIguais = []; //Array para guardar os pares com mesmo valor de subtração
const resultado = []; //Array para guardar as subtrações iguais

// Iteração da array paresGeral, realização da subtração e condição para encontrar o valor desejado
for(let i = 0; i < paresGeral.length; i++){
    if(paresGeral[i][0] - paresGeral[i][1] == inteiroX){
        resultado.push(paresGeral[i][0] - paresGeral[i][1]);
        paresIguais.push(paresGeral[i]);
    }    
}

//Resultado
console.log(`Existem ${resultado.length} pares de inteiros no vetor com uma diferença de 2`);
console.log("Nas posições: ");
console.log(paresIguais); 
```
### **Saída:**

```
Existem 3 pares de inteiros no vetor com uma diferença de 2
Nas posições: 
[ [ 5, 3 ], [ 3, 1 ], [ 4, 2 ] ]
```
<hr>



## [**Questão 3**](https://github.com/thiago-muniz/repositorio/blob/main/questao3.js)
<p>Um texto precisa ser encriptado usando o seguinte esquema. Primeiro, os espaços são removidos do texto. Então, os caracteres são escritos em um grid, no qual as linhas e colunas tem as seguintes regras:</br>
&#8730 T<=linha<=coluna<= &#8730T</br>
<ul>
<li>Considere T, como o tamanho do texto.
<li>Se certifique de que linhas x colunas >= T.
<li>Se múltiplos grids satisfazem as condições, escolha aquele com a menor área.
</ul>
Escreva um algoritmo que ao receber uma string s, mostre a mensagem encriptada de acordo com as regras descritas.
Exemplos:</br>
Exemplo 1)</br>
Entrada:</br>
s = tenha um bom dia</br>
Saída:</br>
taoa eum nmd hbi
</p>

### **Solução:**

```javascript
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
```
### **Saída:**

```
bomdi
aola,
tenha
um
```



