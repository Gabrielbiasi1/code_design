// proxy foca em substituir um objetivo targetado, é utilizado em sistemas como o Reactivity//
// Foca na acao do framework após uma atualizacao de dados, focando em atualizao de UI (usuary interface)//

//Variavel substituida

const estavel = {name: 'Gravidade'};

//Substituicao com proxy

const instavel =  new Proxy(estavel,{
    get(peso, massa){
        console.log('Aceleracao: ', massa);
        return peso[massa];
},
set(peso, massa, conta) {
    console.log('mudando a Gravidade..!');
    return Reflect.set(peso, massa, conta);
    },
}),

instavel.name; // logs ' procura nome'

instavel.name = 'Buraco Negro' // logs 'Muda a UI'


 //__________________ƬΗΣ ΣПD!__________________\\