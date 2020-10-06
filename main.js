// variaveis const não podem ter seu valor reatribuidos, mas sim mutados

//operações com constantes

//percorre uma array e realiza operações sequenciais dentro dela;
const arr = [1,3,4,5,8,9,10];
const cont = arr.map(function(item,index){
    return item + index;
});
// console.log(cont);

//percorre uma array e utiliza o resultado de cada operação na operação futura;   
const sum = arr.reduce(function(total,next){
    return total + next;
});
// console.log(sum);

//percorre uma array e filtra cada valor que não se encaixa na regra. obs: O retorno precisa ser do tipo boolean 
const filter = arr.filter(function(item){
    return item % 2 === 0;
});
// console.log(filter);

//buscar dados percorrendo uma aray
const find = arr.find(function(item){
    return item === 10;
});
// console.log(find);

//-------------------------------------------------------------------------

//funções anôninas "Arrow Functions"

//forma utilizada normalmente

// const newArr = arr.map((item) => {
//     return item * 2;
// });

//quando só passa um parâmetro

// const newArr = arr.map(item => {
//     return item * 2;
// });

//quando retorna simplesmente uma informação

// const newArr = arr.map(item => item * 2);

// console.log(newArr);

const soma = (a = 3,b = 6) => a +b;

console.log(soma(1));
console.log(soma());