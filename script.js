// --------------- RASCUNHO - AULA 01/04 ---------------

// função expressa
const somar = function(a,b) {
    return a + b
}

// arrow function
const somar = (a,b) => a + b // função de uma linha só

//arrow function sem parametro precisa colocar o parentese vazio
const visualizarPet = ()=>{

}

//arrow function com 1 paramentro pode omitir os parenteses
const visualizarPet = valorA =>{

}

//arrow function com 2 ou mais parametros, precisa de parenteses e separar parametros com virgula
const visualizarPet = (valorA, valorB) =>{

}

//funcao de uma linha só pode omitir as chaves e o return
const somar = (a,b) => a+b

//------------------------------------------------------
// função callback
// exemplo 1
function a(){
    console.log("sou a funçao a")
}

function b(callback){
    console.log("estou na funçao b")
    callback
}

b(a)

// exemplo 2
function somar(a,b){
    return a + b
}
function subtrair(a,b){
    return a - b
}
function multiplicar(a,b){
    return a * b
}

function calculadora(a,b, acao){
    return acao(a,b)
}

console.log(calculadora(10,20,somar))

/*

forEach
map
filter
reduce

*/
// imprimindo todos os valores do array no console
let listaDeFrutas = [ "maçã", "banana", "uva" ]

listaDeFrutas.forEach(function(fruta, index){
    console.log("O valor da posição " + index + " é " + fruta)
})

// o filter retorna um array
listaDeFrutas.filter((fruta, index)=>{
    return fruta != "banana"
})

// o map retorna um array modificado
listaDeFrutas.map((fruta,index)=>{
    return "Fruta " + fruta
})

// arredondando os numeros
let numeros = [0.5, 1.8, 10.6]
numeros.map((valor,index)=>{
    return Math.round(valor)
})

// retornando a soma dos valores do array
let listaSaldo = [10, 0, 30, 100]
listaSaldo.reduce((resultado, valor, index)=>{
    return resultado + valor
})