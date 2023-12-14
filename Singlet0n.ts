class configura{
    static instance: configura;
    public readonly mode = 'dark';
   
    //previne new com um construtor privado//
    private constructor(){

    }
    static getInstance(): configura{
        if (!configura.instance){
            configura.instance = new configura();
        }
        return configura.instance;
    }
}
//const Configurar = new configura()
const Configurar = configura.getInstance();


// Em JS temos "objects literal", que influencia no conceito de "global data" onde objetos
// sao passados por meio de referencias. //

//const configura = {
//    dark: 'true'  }

 // Teremos a mesma caracteristica de outros patterns simplemente por criar um objeto global//
 




 //__________________ƬΗΣ ΣПD!__________________\\
