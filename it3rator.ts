// iterator é um design utilizado em se movimentar dentro de uma colecao de objetos//


// iterator - simples

const praia = ['cerveja','mar','sol'];

for (const item of praia){
    console.log(item);
}

// iterator

 function range ( start: number, end: number, step=1){
    return{
        [Symbol.iterator]() { // declara o iterator
            return this;
        },
        next(){
            start = start+step; // diz ao JS: comecar 
            return {value: start, done: false };
        }
        return { done: true, value: end  }; // diz ao JS: parar a iteracao
    }
 }
 
 for (const n of range(0, 20, 5)) { // usa o iterator
    console.log(n);
 }


 
//__________________ƬΗΣ ΣПD!__________________\\