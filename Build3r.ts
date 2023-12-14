// Builder consiste em basicamente destrinchar uma classe//

//original
class RAP {
    constructor(
        public racionais: string,
        public sabotage: boolean,
        public marcelod2: boolean,
        public xamuel: boolean
    ) {}
};

new RAP('luizasonza', false, true, true);

//builder// Destrinchando a classe//
class RAP{
    constructor(
        public racionais?: string,
        public sabotage?: boolean,
        public marcelod2?: boolean,
        public xamuel?: boolean
    ){}
    addRacionais(){
        this.racionais = true;
        return this;
    }
    addSabotage(){
        this.sabotage = true;
        return this;
    }
    addMarcelod2(){
        this.marcelod2 = true;
        return this;
    }
    addXamuel(){
        this.xamuel = true;
        return this;
    }
}

const TheTown = new RAP('Festival!')
// Inserir passo a passo da classe RAP, mas exibir apenas saida//
TheTown
    .addRacionais()
    .addSabotage()
    .addMarcelod2()
    .addXamuel()







    //__________________ƬΗΣ ΣПD!__________________\\