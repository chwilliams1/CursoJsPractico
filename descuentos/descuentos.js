
function calcularPrecioConDescuento(precio,descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    var precioFinal = (precio * porcentajePrecioConDescuento)/100;

    return precioFinal;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const inputCoupon = document.getElementById("InputCoupon");
    console.log(inputCoupon);
    const priceValue = inputPrice.value;
    const couponsValue = inputCoupon.value;
    
    console.log(couponsValue);
    const resultP = document.getElementById("ResultP");
  

    if (couponsValue === "10SALE"){
        var descuento = 10
        const precioFinal = calcularPrecioConDescuento(priceValue,descuento);
        
        resultP.innerText = "Tu precio con descuento es: $"+ precioFinal;
    }
    else  if (couponsValue === "15SALE"){
        var descuento = 15
        const precioFinal = calcularPrecioConDescuento(priceValue,descuento);

        resultP.innerText = "Tu precio con descuento es: $"+ precioFinal;
    }
    else  if (couponsValue === "50SALE"){
        var descuento = 50
        const precioFinal = calcularPrecioConDescuento(priceValue,descuento);
        resultP.innerText = "Tu precio con descuento es: $"+ precioFinal;
    }
    else{
        const precioFinal = calcularPrecioConDescuento(priceValue,descuento);
        resultP.innerText = "No posees descuento, tu precio final es: " + priceValue;
    }



}

const coupons = [
    "10SALE",
    "15SALE",
    "50SALE",
]
