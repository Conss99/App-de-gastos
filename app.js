let cont = 0;
let suma = 0;
let cut = 0;

function agregar() {
    let nombre = $('#nombre').val();
    let dinero = $('#dinero').val();
    cont += 1;


    distribuir(nombre, dinero, cont);

    let nombreAMostrar = `<h3> ${nombre} </h3>`
    let dineroAMostrar = `<h3> $ ${dinero} </h3>`

    $('#historialNombre').append(nombreAMostrar);
    $('#historialDinero').append(dineroAMostrar);

}

function distribuir(persona, gastado, c) {
    suma += parseInt(gastado);
    $('#resultado').text('$' + suma);

    cut = suma / c;

    $('#cut').text('$' + (parseFloat(cut)));
}