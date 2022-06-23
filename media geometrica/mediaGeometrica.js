

function calcularMediaGeometrica(lista){
    var multLista = 1;

    for (let i = 0; i < lista.length; i++){
    multLista = multLista * lista[i];
    }
    

    const promedioLista = Math.pow(multLista,1/lista.length);

    return promedioLista;
}





