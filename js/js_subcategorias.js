const serviceSale  = [
    { id : 0, mnemonic : "CAMBIAR CERRADURA", precio: 2500, shortDesc: "Cambiar cerradura" , categoria:"cerrajeria"},
    { id : 1, mnemonic : "CAMBIAR COMBINACIÓN DE LLAVE", precio: 2800, shortDesc: "Cambiar combinación de llave", categoria:"cerrajeria" },
    { id : 2, mnemonic : "DESBLOQUEAR PUERTA", precio: 3500, shortDesc: "Desbloquear puerta", categoria:"cerrajeria"},
    { id : 3, mnemonic : "COPIA DE LLAVE", precio: 35000, shortDesc: "Copia de llave", categoria:"cerrajeria"},   

    { id : 4, mnemonic : "INSTALACIÓN O CAMBIO DE LLAVE DE ENCENDIDO", precio: 2500, shortDesc: "Instalación o cambio de llave de encendido", categoria:"electricidad"},
    { id : 5, mnemonic : "INSTALACIÓN O CAMBIO DE TOMACORRIENTE", precio: 2800, shortDesc: "Instalación o cambio de tomacorriente", categoria:"electricidad" },
    { id : 6, mnemonic : "INSTALACIÓN O CAMBIO DE LLAVE CON 1 MODULO DE TOMACORRIENTE MAS 1 MODULO DE LLAVE DE ENCENDIDO", precio: 3500, shortDesc: "Instalación o cambio de llave con 1 modulo de tomacorriente mas 1 modulo de llave de encendido", categoria:"electricidad"},
    { id : 7, mnemonic : "INSTALACIÓN O CAMBIO DE LLAVE TÉRMICA", precio: 35000, shortDesc: "Instalación o cambio de llave térmica", categoria:"electricidad"},
    { id : 8, mnemonic : "INSTALACIÓN O CAMBIO DE DISYUNTOR", precio: 4000, shortDesc: "Instalación o cambio de disyuntor", categoria:"electricidad"},
    { id : 9, mnemonic : "INSTALACIÓN ELÉCTRICA PARA AIRE ACONDICIONADO SPLIT", precio: 2900, shortDesc: "Instalación eléctrica para aire acondicionado split", categoria:"electricidad"},
    { id : 10, mnemonic : "INSTALACIÓN O CAMBIO DE MODULO USB", precio: 3250,shortDesc: "Instalación o cambio de modulo usb", categoria:"electricidad"},    

    { id : 11, mnemonic : "FUMIGAR CASA", precio: 2500, shortDesc: "Fumigar casa", categoria:"fumigacion"},
    { id : 12, mnemonic : "FUMIGAR DEPARTAMENTO", precio: 2800, shortDesc: "Fumigar departamento", categoria:"fumigacion" },
    { id : 13, mnemonic : "FUMIGAR PATIO", precio: 3500, shortDesc: "Fumigar patio", categoria:"fumigacion"},   

    { id : 14, mnemonic : "MANTENIMIENTO DE JARDÍN", precio: 2500, shortDesc: "Mantenimiento de jardín", categoria:"jardineria" },
    { id : 14, mnemonic : "PODA Y EXTRACCIÓN", precio: 2800, shortDesc: "Poda y extracción" , categoria:"jardineria"},
    { id : 15, mnemonic : "DISEÑO DE JARDÍN", precio: 3500, shortDesc: "Diseño de jardín", categoria:"jardineria"},
    { id : 16, mnemonic : "CORTE DE GRANDES EXTENSIONES", precio: 3500, shortDesc: "Corte de grandes extensiones", categoria:"jardineria"},   

    { id : 17, mnemonic : "MUDANZA CON UN CAMIÓN GRANDE", precio: 2500, shortDesc: "Mudanza con un camión grande", categoria:"mudanzas" },
    { id : 18, mnemonic : "MUDANZA CON UN CAMIÓN PEQUEÑO", precio: 2800, shortDesc: "Mudanza con un camión pequeño", categoria:"mudanzas" },
    { id : 19, mnemonic : "MUDANZA CON ELEVAMIENTO", precio: 3500, shortDesc: "Mudanza con elevamiento", categoria:"mudanzas"},  

    { id : 20, mnemonic : "MANTENIMIENTO DE PILETA", precio: 2500, shortDesc: "Mantenimiento de pileta", categoria:"piletero" },
    { id : 21, mnemonic : "LIMPIEZA DE PILETA", precio: 2800, shortDesc: "Limpieza de pileta" , categoria:"piletero"},
    { id : 22, mnemonic : "REPARACIÓN DE BOMBA", precio: 3500, shortDesc: "Reparación de bomba", categoria:"piletero"},
    { id : 23, mnemonic : "LLENADO DE PILETA", precio: 2200, shortDesc: "Llenado de pileta", categoria:"piletero"},   

    { id : 24, mnemonic : "IMPERMEABILIZACION DE TECHOS - MEMBRANA LÍQUIDA", precio: 2500, shortDesc: "Impermeabilización de techos - membrana líquida", categoria:"pintor" },
    { id : 25, mnemonic : "PINTURA INTERIOR DE PAREDES Y CIELORRASO", precio: 2800, shortDesc: "Pintura interior de paredes y cielorraso" , categoria:"pintor"},
    { id : 26, mnemonic : "PINTURA DE REJAS", precio: 3500, shortDesc: "Pintura de rejas", categoria:"pintor"},  

    { id : 27, mnemonic : "LIMPIEZA DE TANQUE DE AGUA", precio: 4600, shortDesc: "Limpieza de tanque de agua", categoria:"plomeria" },
    { id : 28, mnemonic : "INSTALACIÓN O CAMBIO DE FLOTANTE DE TANQUE DE AGUA", precio: 3000, shortDesc: "Instalación o cambio de flotante de tanque de agua", categoria:"plomeria" },
    { id : 29, mnemonic : "INSTALACIÓN O CAMBIO DE CANILLA", precio: 2400, shortDesc: "Instalación o cambio de canilla", categoria:"plomeria"},  

    { id : 30, mnemonic : "LIMPIEZA DE CASA GRANDE", precio: 4600, shortDesc: "Limpieza de casa grande" , categoria:"servicioLimpieza"},
    { id : 31, mnemonic : "LIMPIEZA DE CASA CHICA O DEPARTAMENTO", precio: 2800, shortDesc: "Limpieza de casa chica o departamento", categoria:"servicioLimpieza" },

    { id : 32, mnemonic : "REPARACIÓN DE TECHO", precio: 4600, shortDesc: "Reparación de techo", categoria:"techista"},
    { id : 33, mnemonic : "CAMBIO COMPLETO DE TECHO", precio: 2800, shortDesc: "Cambio completo de techo",categoria:"techista" },
];

function agregarSubCategorias(categoria, items){
    serviceSale.forEach(service => {
        if(service.categoria === categoria){
            $("#" + items).append(`
                <article>
                    <h3> ${service.shortDesc}</h3>
                    <p> ${service.precio}</p>
                    <div class="center">
                        <button class="btn btn-outline-dark" onclick="agregarAlCarrito(${service.id})">Contratar</button>
                    </div>
                </article>`);
        }
    });
}

agregarSubCategorias("electricidad", "itemsElectro" );
agregarSubCategorias("cerrajeria", "itemsCerrajeria" );
agregarSubCategorias("fumigacion", "itemsFumigacion" );
agregarSubCategorias("jardineria", "itemsJardineria" );
agregarSubCategorias("mudanzas", "itemsMudanzas" );
agregarSubCategorias("piletero", "itemsPiletero" );
agregarSubCategorias("pintor", "itemsPintor" );
agregarSubCategorias("plomeria", "itemsPlomeria" );
agregarSubCategorias("servicioLimpieza", "itemsLimpiezaCasa" );
agregarSubCategorias("techista", "itemsTechista" );