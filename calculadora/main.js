var input = require("readline-sync");
var suma = require("./suma");

var opcion;

function ejecutarOpcion(opcion) 
{
    var ejecutado = false;

    console.log("----- ejecucion -----");

    if (opcion == "1")
    {
        var sumando1 = parseInt(input.question("Primer operador: "));
        var sumando2 = parseInt(input.question("Segundo operador: "));
        var resultado = suma(sumando1, sumando2);
        console.log("Resultado: " + resultado);
        ejecutado = true;
    }
    
    if (!ejecutado) 
    {
        console.log("No conozco esa opción")
    }
}

function menu() 
{
    console.log("Ingrese su opción:")
    console.log("1) suma");
    console.log("0) salir")

    return input.question("Ingrese opcion: ");    
}

do {
    opcion = menu();
    ejecutarOpcion(opcion);    
}
while (opcion != "0");

console.log("Adios amigos!");