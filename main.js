//Clase usuario con su constructor y metodos
/*class Usuario{
    constructor(nombre, usuario, contraseña){
        this.nombre = nombre;
        this.usuario = usuario;
        this.contraseña = contraseña;
    }

    saludar (){
        alert ("Bienvenido " + this.nombre + " ( usuario: " + this.usuario + " ) ");
    }
}*/
//Clase de servicio con su constructor y metodos
/*class Servicio{
    constructor (id,tipo, importe){
        this.id = id;
        this.tipo = tipo;
        this.importe = importe;
    }

    agregarServicio(id, tipo, importe){
        this.id = id;
        this.tipo= tipo;
        this.importe = importe
    }
}*/

//Clase carrito con su constructor y sus metodos
class Carrito{
    constructor(importeTotal, importeServicio){
        this.importeTotal = importeTotal;
        this.importeServicio = importeServicio;
    }
    sumar (a , b) {
        this.importeTotal = a + b;
        //importeCarrito.value = this.importeTotal;
    }
}

//Funciones
/*function solicitarDatosUsuario (){
    let nomUser = prompt("Ingresar nombre: ");
    let user = prompt ("Ingresar Usuario: ");
    let passUser = prompt ("Ingresar Contraseña: ");
    const usuario1 = new Usuario (nomUser, user, passUser);
    //usuario1.saludar(); #Sacamos el saludo ya que se va a mostrar en pantalla
    
    //Guardar el usuario en la session
    sessionStorage.setItem("nombreUsuario", nomUser);
    sessionStorage.setItem("usuario", user);  
    //alert(sessionStorage.getItem(nombreUsuario));
    //alert(sessionStorage.getItem(usuario));
}*/

function traerServicio(id){
    for (const servicio of servicios) {
        if (servicio.id == id ) {
            const servicio = servicios[id];
            return servicio;            
        }
    }
}

/*function agregarServicioAlDOM (listServicios) {
    let listaDOM = document.getElementById("listaServicios");
    for (const servicio of listServicios) {
        let elemento = document.createElement("li");
        elemento.innerHTML = servicio.servicio;
        listaDOM.appendChild(elemento)
    }
}*/

/*function agregarAlDom(dato, element, padre){
    let padre1 = document.getElementById(padre);
    let element1 = document.createElement(element);
    element1.innerHTML= dato
    padre1.appendChild(element1);
}*/


//variables de sesion

const servicios = [
    { id : 0, servicio : "ELECTRICIDAD", precio: 2500, },
    { id : 1, servicio : "PLOMERIA", precio: 2800, },
    { id : 2, servicio : "CERRAJERIA", precio: 3500, },
    { id : 3, servicio : "MUDANZA", precio: 35000, },
    { id : 4, servicio : "SERVICIO DE LIMPIEZA", precio: 4000, },
    { id : 5, servicio : "FUMIGACION", precio: 2900, },
    { id : 6, servicio : "JARDINERIA", precio: 3250, },
    { id : 7, servicio : "PILETERO", precio: 4500, },
    { id : 8, servicio : "PINTOR", precio: 6500, },
    { id : 9, servicio : "TECHISTA", precio: 15000, },
    
]
const listServicios= [];
const carrito = new Carrito (0,0,0); //inicializamos un carrito de cero


//MAIN

//Creamos el usuario con sus datos y mostramos mensaje de bienvenida
//solicitarDatosUsuario();
//agregarAlDom("Bienvenido " + sessionStorage.getItem("usuario"), "spam","user")
//el usuario solicita un servicio

let boton = document.getElementById("btonElectricidad");
boton.addEventListener("click",sumarAlCarrito);

function sumarAlCarrito(){
    servicio = boton.value;
    servicio= servicio.toUpperCase();
    switch (servicio) {
        case "ELECTRICIDAD" :
            servicioContratado = traerServicio(0);
            listServicios.push(servicioContratado);
            carrito.sumar(carrito.importeTotal, servicioContratado.precio);
            alert("Se agrego al carrito el servicio de " + servicio + " Importe total del carrito: $ " + carrito.importeTotal )
            break;
        case "PLOMERIA" :
            servicioContratado = traerServicio(1);
            listServicios.push(servicioContratado); 
            carrito.sumar(carrito.importeTotal, servicioContratado.precio);
            break;
        case "CERRAJERIA" :
            servicioContratado = traerServicio(2);
            listServicios.push(servicioContratado);
            carrito.sumar(carrito.importeTotal, servicioContratado.precio);
            break;
        case "MUDANZA" :
            servicioContratado = traerServicio(3);
            listServicios.push(servicioContratado);
            carrito.sumar(carrito.importeTotal, servicioContratado.precio);
            break;
        case "SERVICIO DE LIMPIEZA" :
            servicioContratado = traerServicio(4);
            listServicios.push(servicioContratado);
            carrito.sumar(carrito.importeTotal, servicioContratado.precio);
            break;
        case "FUMIGACION" :
            servicioContratado = traerServicio(5);
            listServicios.push(servicioContratado);
            carrito.sumar(carrito.importeTotal, servicioContratado.precio);
            break;
        case "JARDINERIA" :
            servicioContratado = traerServicio(6);
            listServicios.push(servicioContratado);
            carrito.sumar(carrito.importeTotal, servicioContratado.precio);
            break;
        case "PILETERO" :
            servicioContratado = traerServicio(7);
            listServicios.push(servicioContratado);
            carrito.sumar(carrito.importeTotal, servicioContratado.precio);
            break;
        case "PINTOR" :
            servicioContratado = traerServicio(8);
            listServicios.push(servicioContratado);
            carrito.sumar(carrito.importeTotal, servicioContratado.precio);
            break;
        case "TECHISTA" :
            servicioContratado = traerServicio(9);
            listServicios.push(servicioContratado);
            carrito.sumar(carrito.importeTotal, servicioContratado.precio);
            break;
        default:
            alert("El servicio ingresado no esta disponible en estos momentos");
    } 
}

console.log("Carrito final: Importe: $ " + carrito.importeTotal + " Servicios contratados: " + listServicios.length );
//agregarServicioAlDOM(listServicios);


//Comentamos esta parte ya que son de otras entregas
//function comparar ( a, b ){ return a - b; }

//Funcion para ordenar el carrito, va del producto mas barato al mas caro
//var serviciosImportes =[];
//for (const servicio of listServicios) {
//    serviciosImportes.push(servicio.precio);
//    console.log(servicio.precio);
//}

//console.log(serviciosImportes);
//console.log("carrito ordenado");
//console.log(serviciosImportes.sort(comparar));

