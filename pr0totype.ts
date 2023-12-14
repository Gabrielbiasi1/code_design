class Animais {}

class Cachorro extends Animais {}
class Gato extends Animais {}

// O prototype é uma forma alternativa de aplicar hierarquia dentro do codigo//
// Foge da funcionalidade proporcionada por "class", e vem de um objeto que ja foi criado//
// O principal uso de Prototype é na organizaçao de compartilhamento entre objetos//
// Usado muito em linguagens dinamicas, como JS//

//Prototype

const luva ={
    recepaPai(){
        return 'Receba!';
    }
}
const pedreiro = Object.create(luva, {name: {value: 'pedreiro'}});


//Ao mostrar esse objeto, apenas tera alocado o valor "pedreiro"//


console.log(pedreiro)


//Ao chamar a funcao, o objeto produz a saida esperada "Receba!"

pedreiro.recebaPai();

//forma antiga//

pedreiro.__proto__;

//forma atual//

Object.getPrototypeOf(pedreiro);


///////////
//classes//
///////////

// quando se trata de classes em linguagens como JS, prototype referencia seu construtore pode atualizar uma classe com novas funcionalidades.//
// porem geralmente essa pratica é desencorajada, já que torna o projeto dependente de bibliotecas e ocasionar erros com jscompilers//


Array.prototype.amo = function(){
    console.log('eu te amo!')
}






//__________________ƬΗΣ ΣПD!__________________\\