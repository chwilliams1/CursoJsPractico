function calcularMediana(lista){
    lista.sort(compareNumbers);
  
    if (lista.length % 2 == 0){
        var mitadLista = lista.length/2;
        var mediana = (lista[mitadLista]+lista[mitadLista-1])/2;
        console.log(mediana);
    }
    else{
        var mitadLista = lista.length/2;
        var posicionMediana = mitadLista - 0.5;
        var mediana = lista[posicionMediana];
        console.log(mediana);
    }
    /*  let sumaLista = 0;
    
        for (let i = 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
        }
    */
   console.log(lista);
    }
    
function compareNumbers(a, b) {
    return a - b;
    }
    