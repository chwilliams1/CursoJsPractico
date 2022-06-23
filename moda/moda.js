const lista1 = [ 
    10,
    2,
    3,
    10,
    10,
    2,
    3,
    10,
    4,
]

const lista1Count = {};

lista1.map(
    function (elemento){
        if (lista1Count[elemento]){
            lista1Count[elemento] += 1;

        }else{
            lista1Count[elemento] = 1 ;
        }
            }
    
)
console.log(lista1Count);

const lista1Array = Object.entries(lista1Count).sort(
    function compareNumbers(a, b) {
        return a[1] - b[1];
    }
    
);

const moda = lista1Array[lista1Array.length-1];

console.log("La moda de esta lista es: "+ moda[0] + " apareció "+ moda[1]+ " veces");