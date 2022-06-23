//Codigo cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
//console.log("los lados del cuadrado son " + ladoCuadrado+"cm");

function perimetroCuadrado(lado){
    return lado * 4;
}

//console.log("El perimetro del cuadrado es de " + perimetroCuadrado +"cm");

function areaCuadrado(lado){
    return lado**2;
}
//console.log("El area del cuadrado es de "+areaCuadrado+ "cm2");

console.groupEnd();

//Codigo triangulo

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.group("Triangulos");

/*console.log(
    "Los lados del triangulo miden "
    + ladoTriangulo1 
    + " cm "
    + ladoTriangulo2 
    + " cm "+baseTriangulo 
    + " cm ");*/

//console.log("La altura del triangulo es de " + alturaTriangulo +" cm");

function perimetroTriangulo(base, lado1, lado2){

    return base + lado1 + lado2;
}
//console.log("El perimetro del triangulo es de " + perimetroTriangulo +" cm");

function areaTriangulo(base,altura ){
    return (base*altura) /2;
}
//console.log("El area del triangulo es de " + areaTriangulo + " cm2");

console.groupEnd();

//Codigo del Circulo

console.group("Circulos");

//const radioCirculo = 4;
//console.log("El radio del circulo es de " + radioCirculo +"cm");


const pi = Math.PI;
console.log("PI es  " + pi);

function perimetroCirculo(radio){
    return Math.round(2 * pi * radio);
}
//console.log("El perimetro del circulo es " + perimetroCirculo +"cm");

function areaCirculo(radio){
    return Math.round(pi * radio**2);
}
//console.log("El area del circulo es " + areaCirculo +"cm2");


console.groupEnd();


function calcularPerimetroCuadrado(){
    const value = (document.getElementById("InputCuadrado")).value;
    perimetro = perimetroCuadrado(value);
    alert("El perimetro de tu cuadrado es "+ perimetro+ " cm");
}

function calcularAreaCuadrado(){
    const value = (document.getElementById("InputCuadrado")).value;
    area = areaCuadrado(value);
    alert("El area de tu cuadrado es " + area + " cm2");
}

function calcularPerimetroTriangulo(){
    const value1 = parseInt((document.getElementById("InputBaseTriangulo")).value);
    const value2 = parseInt((document.getElementById("InputLado1Triangulo")).value);
    const value3 = parseInt((document.getElementById("InputLado2Triangulo")).value);
    perimetro = perimetroTriangulo(value1,value2,value3);
    alert("El perimetro del triangulo es de "+perimetro+ " cm");
}
function calcularAreaTriangulo(){
    const value1 = (document.getElementById("InputBaseTriangulo")).value;
    const value2 = (document.getElementById("InputLado1Triangulo")).value;
    const value3 = (document.getElementById("InputLado2Triangulo")).value;
    const value4 = (document.getElementById("InputAlturaTriangulo")).value;
    area = areaTriangulo(value1,value4);
    alert("El area del triangulo es de " + area + " cm2");
}

function calcularPerimetroCircunferencia(){
    const circunferencia = (document.getElementById("InputCircunferencia")).value;
    perimetro = perimetroCirculo(circunferencia);
    alert("El perimetro de tu circulo es "+ perimetro + " cm");
}

function calcularAreaCircunferencia(){
    const circunferencia = (document.getElementById("InputCircunferencia")).value;
    area = areaCirculo(circunferencia);
    alert("El area de tu circulo es " + area + " cm2");
}

function calcularAltura(){
    const value1 = parseInt((document.getElementById("InputLado1")).value);
    const value2 = parseInt((document.getElementById("InputLado2")).value);
    const value0 = parseInt((document.getElementById("InputBase")).value);

    if (value1 == value2 && value1 != value0 && value1+value2 > value0){
        var altura = Math.sqrt((value1**2)-((value0**2)/4));
        alert("La altura de este triangulo isoceles es "+ altura + " cm");
    }
    else {
        alert("No es un triangulo isoceles");
    }

}