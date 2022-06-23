//Helpers

function espar(numerito){
    return (numerito % 2 == 0);
};

//Orden de lista
const salariosChile = chile.map(
    function (personita) {
        return personita.salary;
    }
);
const salariosChileSorted = salariosChile.sort(
    function(salaryA,salaryB){
        return salaryA - salaryB
    }
);


//Calculadora mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);
    if (espar(lista.length)){
        var mediana = (lista[mitad]+lista[mitad-1])/2;
    }

    else{
        var mediana = lista[mitad];
    }
    return mediana;
};

const medianaGeneralChile = medianaSalarios(salariosChileSorted);

//Mediana del top 10%

const spliceStart = (salariosChileSorted.length * 90)/100;
const spliceCount = salariosChileSorted.length - spliceStart;

const salariosChileTop10 = salariosChileSorted.splice(
    spliceStart,
    spliceCount,
    );
console.log(salariosChileTop10);

const medianaTop10Chile = medianaSalarios(salariosChileTop10)
console.log({
    medianaGeneralChile,
    medianaTop10Chile,
})