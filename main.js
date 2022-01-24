const { constant } = require("lodash");

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
/*class Carrito{
    constructor(importeTotal, importeServicio){
        this.importeTotal = importeTotal;
        this.importeServicio = importeServicio;
    }
    sumar (a , b) {
        this.importeTotal = a + b;
    }
}*/

//variables de sesion
const categorias = [
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
];

const listServicios= [];
//Las siguientes 3 const son para la funcion pintarServicio()
const items = document.getElementById("items");
const templateServicio = document.getElementById("template-servicio").content;
const fragment = document.createDocumentFragment();


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

/*function agregarAlCarrito(id){
   let idmasUno = id +1;
   let service = serviceSale [idmasUno];
   if (servicios.length > 0){
       if(!(servicios.indexOf(service)>=0)){
        service.cantidad= service.cantidad + 1;
        servicios.push(service);
        sessionStorage.setItem("carritoCompras", pasarObjtaJSON(servicios));
        //pintarCarrito(servicios,"itemsCarrito");
       }else{
           alert("El servicio " +service.shortDesc + " ya esta en el carrito");
       }
    }else{
        service.cantidad = 1;
        servicios.push(service);
        sessionStorage.setItem("carritoCompras", pasarObjtaJSON(servicios));
        //pintarCarrito(servicios,"itemsCarrito");
    }
}*/

/*function pintarCarrito(){
    services= pasarJSONaObjt(sessionStorage.getItem("carritoCompras"));
    services.forEach(service => {
        $("#" + items).append(`
            <article>
                <h3> ${service.shortDesc}</h3>
                <p> ${service.precio}</p>
                <div class="center">
                    <button class="btn btn-outline-dark">Contratar</button>
                </div>
            </article>
        `);
    });
}*/

function agregarAlCarrito(id){
    const servicios = pasarJSONaObjt(sessionStorage.getItem("carritoCompras"));
    let idmasUno = id +1;
    let service = serviceSale [idmasUno];
    servicios.push(service);
    sessionStorage.setItem("carritoCompras", pasarObjtaJSON(servicios));
}

function pasarObjtaJSON(objeto){
    return objeto= JSON.stringify(objeto);
}

function pasarJSONaObjt(objeto){
    return objeto= JSON.parse(objeto);
}
//MAIN
pintarServicio(categorias);
//pintarCarrito(pasarJSONaObjt(sessionStorage.getItem("carritoCompras")),"itemsCarrito")

//Creamos el usuario con sus datos y mostramos mensaje de bienvenida
//solicitarDatosUsuario();
//agregarAlDom("Bienvenido " + sessionStorage.getItem("usuario"), "spam","user")


// Ejemplo para el carrito
const productCarrito  = [
    { id : 0, mnemonic : "CAMBIAR CERRADURA", precio: 2500, shortDesc: "Cambiar cerradura" , categoria:"cerrajeria"},
    { id : 1, mnemonic : "CAMBIAR COMBINACIÓN DE LLAVE", precio: 2800, shortDesc: "Cambiar combinación de llave", categoria:"cerrajeria" },
    { id : 2, mnemonic : "DESBLOQUEAR PUERTA", precio: 3500, shortDesc: "Desbloquear puerta", categoria:"cerrajeria"},
    { id : 3, mnemonic : "COPIA DE LLAVE", precio: 35000, shortDesc: "Copia de llave", categoria:"cerrajeria"},
];



function carritoNuevo(text1, text2, text3){
    let tablecarrito = document.getElementById("carritoTable");
    let newProducRow = tablecarrito.insertRow(-1);
    
    let newProducCell = newProducRow.insertCell(0);
    newProducCell.textContent = text1;

    newProducCell = newProducRow.insertCell(1);
    newProducCell.textContent = text2;

    newProducCell = newProducRow.insertCell(2);
    newProducCell.textContent = text3;
}

function buscarProductForCarrito(){
    //productCarrito.forEach(product => {
    //    description= product.shortDesc;
    //    amount= product.precio;
    //    cant= producto.cantidad=1;
    //   carritoNuevo(description,amount,cant )
   //})

   for (const product of productCarrito) {
        description= product.shortDesc;
        amount= product.precio;
        cant= producto.cantidad +1 ;
       carritoNuevo(description,amount,cant )
   }
}