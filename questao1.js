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