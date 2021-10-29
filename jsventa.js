
var nombres = [];
var precios = [];
var cantidades = [];
var newarracompra = [];


function Agregar() {
    
    var lool1 = prompt("Nombre");
    nombres.push(lool1);
    var lool2 = prompt("Precio");
    precios.push(lool2);
    var lool3 = prompt("Cantidad");
    cantidades.push(lool3);
    

   
    var compra = {
        nombre: lool1,
        precio: lool2,
        cantidad:lool3 
        
    }
    newarracompra.push(compra);

    

    
    document.getElementById('nombre').innerHTML += compra.nombre + "<br>";
    document.getElementById('precio').innerHTML += compra.precio + "<br>";
    document.getElementById('cantidad').innerHTML += compra.cantidad+ "<br>";
    
}
function total(){
var total = 0;
    for (var i = 0; i < precios.length; i++) {
        total += precios[i];
    }
    var doscifras = total;
    document.getElementById('Pt4').innerHTML = doscifras;

}

function Again() {
    location.reload();
}



