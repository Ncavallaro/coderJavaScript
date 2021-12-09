//Clase usuario con su constructor y metodos
class Usuario{
    constructor(nombre, usuario, contraseña){
        this.nombre = nombre;
        this.usuario = usuario;
        this.contraseña = contraseña;
    }

    saludar (){
        alert ("Bienvenido " + this.nombre + " ( usuario: " + this.usuario + " ) ");
    }
}
//Clase de servicio con su constructor y metodos
class Servicio{
    constructor (id, tipo, importe , shortDesc, image, href){
        this.id = id;
        this.tipo = tipo;
        this.importe = importe;
        this.shortDesc = shortDesc;
        this.image = image;
        this.href = href;
    }

    agregarServicio(id, tipo, importe, shortDesc, image, href){
        this.id = id;
        this.tipo= tipo;
        this.importe = importe
        this.shortDesc = shortDesc;
        this.image = image;
        this.href = href;
    }
}

//Clase carrito con su constructor y sus metodos
class Carrito{
    constructor(importeTotal, importeServicio){
        this.importeTotal = importeTotal;
        this.importeServicio = importeServicio;
    }
    sumar (a , b) {
        this.importeTotal = a + b;
    }
}

//variables de sesion

const servicios = [
    { id : 0, mnemonic : "ELECTRICIDAD", precio: 2500, shortDesc: "Electricidad", image: "images/electrico.png", href:"servicios/electricidad.html"},
    { id : 1, mnemonic : "PLOMERIA", precio: 2800, shortDesc: "Plomeria", image: "images/plomeria.png", href:"servicios/plomeria.html"},
    { id : 2, mnemonic : "CERRAJERIA", precio: 3500, shortDesc: "Cerrajeria", image: "images/llaves.png", href:"servicios/cerrajeria.html"},
    { id : 3, mnemonic : "MUDANZA", precio: 35000, shortDesc: "Mudanza", image: "images/mudarseCasa.png", href:"servicios/mudanzas.html"},
    { id : 4, mnemonic : "SERVICIO DE LIMPIEZA", precio: 4000, shortDesc: "Servicio de limpieza", image: "images/limpiezaCasa.png", href:"servicios/ServicioLimpieza.html"},
    { id : 5, mnemonic : "FUMIGACION", precio: 2900, shortDesc: "Fumigacion", image: "images/exterminador.png", href:"servicios/fumigacion.html"},
    { id : 6, mnemonic : "JARDINERIA", precio: 3250,shortDesc: "Jardineria", image: "images/jardineria.png", href:"servicios/jardineria.html" },
    { id : 7, mnemonic : "PILETERO", precio: 4500, shortDesc: "Piletero", image: "images/piscina.png", href:"servicios/piletero.html"},
    { id : 8, mnemonic : "PINTOR", precio: 6500, shortDesc: "Pintor", image: "images/pintorCasco.png", href:"servicios/pintor.html"},
    { id : 9, mnemonic : "TECHISTA", precio: 15000, shortDesc: "Techista", image: "images/casaRota.png", href:"servicios/techista.html"},
    
]




const listServicios= [];
const carrito = new Carrito (0,0); //inicializamos un carrito de cero
//Las siguientes 3 const son para la funcion pintarServicio()
const items = document.getElementById("items");
const templateServicio = document.getElementById("template-servicio").content;
const fragment = document.createDocumentFragment();


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

function agregarAlDom(dato, element, padre){
    let padre1 = document.getElementById(padre);
    let element1 = document.createElement(element);
    element1.innerHTML= dato
    padre1.appendChild(element1);
}

const pintarServicio = data => {
    data.forEach(element => {
        templateServicio.querySelector('h2').textContent = element.shortDesc;
        templateServicio.querySelector('a').setAttribute('href',element.href);
        templateServicio.querySelector('a img').setAttribute('src',element.image);

        const clone = templateServicio.cloneNode(true);
        fragment.appendChild(clone)
    });
    items.appendChild(fragment);
}

//MAIN

//Creamos el usuario con sus datos y mostramos mensaje de bienvenida
//solicitarDatosUsuario();
//agregarAlDom("Bienvenido " + sessionStorage.getItem("usuario"), "spam","user")

function sumarAlCarrito(selection){
    servicio = selection;
    servicio= servicio.toUpperCase();
    switch (servicio) {
        case "ELECTRICIDAD" :
            servicioContratado = traerServicio(0);
            listServicios.push(servicioContratado);
            carrito.sumar(carrito.importeTotal, servicioContratado.precio);
            alert("Se agrego al carrito el servicio de " + servicioContratado.shortDesc + " Importe total del carrito: $ " + carrito.importeTotal );
            sessionStorage.setItem("carrito", JSON.stringify(carrito));
            console.log(sessionStorage.getItem("carrito"));
            break;
        case "PLOMERIA" :
            servicioContratado = traerServicio(1);
            listServicios.push(servicioContratado); 
            carrito.sumar(carrito.importeTotal, servicioContratado.precio);
            alert("Se agrego al carrito el servicio de " + servicio + " Importe total del carrito: $ " + carrito.importeTotal );
            break;
        case "CERRAJERIA" :
            servicioContratado = traerServicio(2);
            listServicios.push(servicioContratado);
            carrito.sumar(carrito.importeTotal, servicioContratado.precio);
            alert("Se agrego al carrito el servicio de " + servicio + " Importe total del carrito: $ " + carrito.importeTotal );
            break;
        case "MUDANZA" :
            servicioContratado = traerServicio(3);
            listServicios.push(servicioContratado);
            carrito.sumar(carrito.importeTotal, servicioContratado.precio);
            alert("Se agrego al carrito el servicio de " + servicio + " Importe total del carrito: $ " + carrito.importeTotal );
            break;
        case "SERVICIO DE LIMPIEZA" :
            servicioContratado = traerServicio(4);
            listServicios.push(servicioContratado);
            carrito.sumar(carrito.importeTotal, servicioContratado.precio);
            alert("Se agrego al carrito el servicio de " + servicio + " Importe total del carrito: $ " + carrito.importeTotal );
            break;
        case "FUMIGACION" :
            servicioContratado = traerServicio(5);
            listServicios.push(servicioContratado);
            carrito.sumar(carrito.importeTotal, servicioContratado.precio);
            alert("Se agrego al carrito el servicio de " + servicio + " Importe total del carrito: $ " + carrito.importeTotal );
            break;
        case "JARDINERIA" :
            servicioContratado = traerServicio(6);
            listServicios.push(servicioContratado);
            carrito.sumar(carrito.importeTotal, servicioContratado.precio);
            alert("Se agrego al carrito el servicio de " + servicio + " Importe total del carrito: $ " + carrito.importeTotal );
            break;
        case "PILETERO" :
            servicioContratado = traerServicio(7);
            listServicios.push(servicioContratado);
            carrito.sumar(carrito.importeTotal, servicioContratado.precio);
            alert("Se agrego al carrito el servicio de " + servicio + " Importe total del carrito: $ " + carrito.importeTotal );
            break;
        case "PINTOR" :
            servicioContratado = traerServicio(8);
            listServicios.push(servicioContratado);
            carrito.sumar(carrito.importeTotal, servicioContratado.precio);
            alert("Se agrego al carrito el servicio de " + servicio + " Importe total del carrito: $ " + carrito.importeTotal );
            break;
        case "TECHISTA" :
            servicioContratado = traerServicio(9);
            listServicios.push(servicioContratado);
            carrito.sumar(carrito.importeTotal, servicioContratado.precio);
            alert("Se agrego al carrito el servicio de " + servicio + " Importe total del carrito: $ " + carrito.importeTotal );
            break;
    } 
}

console.log("Carrito final: Importe: $ " + carrito.importeTotal + " Servicios contratados: " + listServicios.length );


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

pintarServicio(servicios);
