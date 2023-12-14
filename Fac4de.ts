// Facade é basicamente uma API simplificada que esconde detalhes pequenos de um codigo//
// Conhecido pelo uso em jQuery e JS

// Facade

class LimpaBanheiro {
    //acesso reduzido a limpeza do banheiro
    setPrivada(v: number){}
    turnLimpo(){}
    turnSujo(){}
}

class LimpaSala {
    //acesso reduzido a limpeza da Sala
    setSofa(v: number) {}
    turnLimpo(){}
    turnSujo(){}
}

//Parte bruta da limpeza, com acesso total a todos dados das classes anteriores
class Limpeza{
    private banheiro = new LimpaBanheiro();
    private sala = new LimpaSala();

    public turnLimpoComodos(){
        this.banheiro.setPrivada(200);
        this.banheiro.turnLimpo();
        this.sala.setSofa(400);
        this.sala.turnLimpo();
    }
    //Deixa os comodos sujos de novo
    public fimdesemana (){
        this.banheiro.turnSujo();
        this.sala.turnSujo();
    }
    //finaliza
    const cliente = new Limpeza();
    cliente.turnLimpoComodos();
    cliente.fimdesemana();
}