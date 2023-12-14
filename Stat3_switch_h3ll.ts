// State utiliza de switchs, mas muitas vezes pode se tornar caotico//

class Flash {
    Correr(velocidade){
        case "+100":
            return "vruuuuuuuum";
        case "+1000":
            return "vruuuuuuuuuuuuuum";
        case "+100000":
            return "vruuuuuuuuuuuuuuuuuuuuuuuuuuuuuum";
        default:
            return "Nenhum crime pra combater...";    
    }
}



// Tambem pode ser aplicado da seguinte maneira:

interface velocidade{
    correr(): string;
}

class +100 implementes velocidade{
    correr(){
        return "vruuuuuuuum";
    }
}

class +1000 implementes velocidade{
    correr(){
        return "vruuuuuuuuuuuuuum";
    }
}

class +100000 implementes velocidade{
    correr(){
        return "vruuuuuuuuuuuuuuuuuuuuuuuuuuuuuum";
    }
}


//__________________ƬΗΣ ΣПD!__________________\\

