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