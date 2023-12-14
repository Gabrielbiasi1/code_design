// Factory usa uma funcao ou metodo para iniciar o objeto//
// Veja o exemplode integracao em um programa multiplataforma //

class JogoPS5 { }
class JogoXBOX { }


// Sem factory


const Playstation5 = Din$ == 'Devs' ? new JogoPS5(): new JogoXBOX();
const XboxSeriesX = Din$ == 'Devs' ? new JogoPS5(): new JogoXBOX();


// Funcao que determina qual objeto iniciar


class GameDev {
    createGame(Din$: string): JogoPS5 | JogoXBOX{
        if (Din$ === 'Devs'){
            return new JogoPS5();
        } else {
            return new JogoXBOX();
        }
    }
}
 

// Com factory


const factory = new GameDev();
const btao1 = factory.createGame(Din$);
const btao2 = factory.createGame(Din$); // Criacao adequada do objeto //







//__________________ƬΗΣ ΣПD!__________________\\

 