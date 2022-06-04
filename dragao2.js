// EXERCÍCIO 1
//a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let input = gets();

let qtdEntradas = parseInt(input);
let nivelEnergia;

for(let i = 0; i < qtdEntradas; i++){
    input = gets();
    nivelEnergia = parseInt(input);
    
    if(nivelEnergia >8000) {
     
        print   ("Mais de 8000!");
    }
    else {
        print("Inseto!");
    }
}

//Resolva o desafios nos espaços em branco

//if ( tempo <= melhor ) {melhor = tempo;}
// EXERCÍCIO 2

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

const A = parseInt(gets());
const B = parseInt(gets());
const total = (A+B)*(B-A+1)/2
print(total);

//Escreva o seu código no espaço em branco

//EXERCÍCIO 3 

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let input = gets()

let qtdEntradas = parseInt(input)
let melhor = 999

for(let i = 0; i < qtdEntradas; i++){
    
    input = gets()
    let tempo = parseFloat(input)
    if (tempo <=melhor) {melhor =tempo;}
        	
}
print(melhor)

//EXERCICIO 4 
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar



let array = [2,3,5,7,11,13,18,34]

for(let i = 0; i < array.length; i++){
    if( array[i] % 2 == 0 ){
        console.log( array[i] )
    }
}

// EXERCICIO 5 
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar


let lines = gets().split("\n");
 
var numberOfMatches = parseInt(lines.shift);
 
let n = parseInt(lines.shift());
let totalMatches = 0;
    while(n>1){
        if(n % 2 == 0 ){
             totalMatches += n/2;
             n = n/2;
              }
        else{
          totalMatches += ((n-1)/2);
          n = (((n-1) /2 ) + 1);
        }
    }
print(totalMatches)
//Escreva o seu código nos espaços em branco