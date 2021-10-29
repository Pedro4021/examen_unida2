//Arreglos Que Se Usan Pa' Funcionar, Obvio Jajaja :v
var nombres = [];
var precios = [];
var cantidades = [];
var newarracompra = [];

//Hace La Agregacion :v De Los Alumnos
function Agregar() {
    
    var lool1 = prompt("Nombre");
    nombres.push(lool1);
    var lool2 = prompt("Precio");
    precios.push(lool2);
    var lool3 = prompt("Cantidad");
    cantidades.push(lool3);
    

    //Implementacion De Una Parte Del Codigo Profe Para Que Funcione El Punto 5 y 6 Jaja :'v
    var compra = {
        nombre: lool1,
        precio: lool2,
        cantidad:lool3 
        
    }
    newarracompra.push(compra);

    

    //Imprime La Lista De Alumnos
    document.getElementById('nombre').innerHTML += compra.nombre + "<br>";
    document.getElementById('precio').innerHTML += compra.precio + "<br>";
    document.getElementById('cantidad').innerHTML += compra.cantidad+ "<br>";
    
}
function total(){
var total = 0;
    for (var i = 0; i < precios.length; i++) {
        Promedio += precios[i];
    }
    var doscifras = Promedio;
    document.getElementById('Pt4').innerHTML = doscifras;
//Buscar Alumnos Por Matricula
}
//Recarga La Pagina
function Again() {
    location.reload();
}



