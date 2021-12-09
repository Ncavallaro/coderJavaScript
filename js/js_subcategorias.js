const serviceElectric = [
    { id : 0, mnemonic : "INSTALACIÓN O CAMBIO DE LLAVE DE ENCENDIDO", precio: 2500, shortDesc: "Instalación o cambio de llave de encendido" },
    { id : 1, mnemonic : "INSTALACIÓN O CAMBIO DE TOMACORRIENTE", precio: 2800, shortDesc: "Instalación o cambio de tomacorriente" },
    { id : 2, mnemonic : "INSTALACIÓN O CAMBIO DE LLAVE CON 1 MODULO DE TOMACORRIENTE MAS 1 MODULO DE LLAVE DE ENCENDIDO", precio: 3500, shortDesc: "Instalación o cambio de llave con 1 modulo de tomacorriente mas 1 modulo de llave de encendido"},
    { id : 3, mnemonic : "INSTALACIÓN O CAMBIO DE LLAVE TÉRMICA", precio: 35000, shortDesc: "Instalación o cambio de llave térmica"},
    { id : 4, mnemonic : "INSTALACIÓN O CAMBIO DE DISYUNTOR", precio: 4000, shortDesc: "Instalación o cambio de disyuntor"},
    { id : 5, mnemonic : "INSTALACIÓN ELÉCTRICA PARA AIRE ACONDICIONADO SPLIT", precio: 2900, shortDesc: "Instalación eléctrica para aire acondicionado split"},
    { id : 6, mnemonic : "INSTALACIÓN O CAMBIO DE MODULO USB", precio: 3250,shortDesc: "Instalación o cambio de modulo usb"},    
];

const serviceLocksmith  = [
    { id : 0, mnemonic : "CAMBIAR CERRADURA", precio: 2500, shortDesc: "Cambiar cerradura" },
    { id : 1, mnemonic : "CAMBIAR COMBINACIÓN DE LLAVE", precio: 2800, shortDesc: "Cambiar combinación de llave" },
    { id : 2, mnemonic : "DESBLOQUEAR PUERTA", precio: 3500, shortDesc: "Desbloquear puerta"},
    { id : 3, mnemonic : "COPIA DE LLAVE", precio: 35000, shortDesc: "Copia de llave"},    
];

const serviceFumigation  = [
    { id : 0, mnemonic : "FUMIGAR CASA", precio: 2500, shortDesc: "Fumigar casa" },
    { id : 1, mnemonic : "FUMIGAR DEPARTAMENTO", precio: 2800, shortDesc: "Fumigar departamento" },
    { id : 2, mnemonic : "FUMIGAR PATIO", precio: 3500, shortDesc: "Fumigar patio"},    
];

const serviceGardening  = [
    { id : 0, mnemonic : "MANTENIMIENTO DE JARDÍN", precio: 2500, shortDesc: "Mantenimiento de jardín" },
    { id : 1, mnemonic : "PODA Y EXTRACCIÓN", precio: 2800, shortDesc: "Poda y extracción" },
    { id : 2, mnemonic : "DISEÑO DE JARDÍN", precio: 3500, shortDesc: "Diseño de jardín"},
    { id : 2, mnemonic : "CORTE DE GRANDES EXTENSIONES", precio: 3500, shortDesc: "Corte de grandes extensiones"},     
];

const serviceMoving  = [
    { id : 0, mnemonic : "MUDANZA CON UN CAMIÓN GRANDE", precio: 2500, shortDesc: "Mudanza con un camión grande" },
    { id : 1, mnemonic : "MUDANZA CON UN CAMIÓN PEQUEÑO", precio: 2800, shortDesc: "Mudanza con un camión pequeño" },
    { id : 2, mnemonic : "MUDANZA CON ELEVAMIENTO", precio: 3500, shortDesc: "Mudanza con elevamiento"},  
];

const servicePool  = [
    { id : 0, mnemonic : "MANTENIMIENTO DE PILETA", precio: 2500, shortDesc: "Mantenimiento de pileta" },
    { id : 1, mnemonic : "LIMPIEZA DE PILETA", precio: 2800, shortDesc: "Limpieza de pileta" },
    { id : 2, mnemonic : "REPARACIÓN DE BOMBA", precio: 3500, shortDesc: "Reparación de bomba"},
    { id : 2, mnemonic : "LLENADO DE PILETA", precio: 2200, shortDesc: "Llenado de pileta"},   
];

const servicePainter  = [
    { id : 0, mnemonic : "IMPERMEABILIZACION DE TECHOS - MEMBRANA LÍQUIDA", precio: 2500, shortDesc: "Impermeabilización de techos - membrana líquida" },
    { id : 1, mnemonic : "PINTURA INTERIOR DE PAREDES Y CIELORRASO", precio: 2800, shortDesc: "Pintura interior de paredes y cielorraso" },
    { id : 2, mnemonic : "PINTURA DE REJAS", precio: 3500, shortDesc: "Pintura de rejas"},  
];

const servicePlumber  = [
    { id : 0, mnemonic : "LIMPIEZA DE TANQUE DE AGUA", precio: 4600, shortDesc: "Limpieza de tanque de agua" },
    { id : 1, mnemonic : "INSTALACIÓN O CAMBIO DE FLOTANTE DE TANQUE DE AGUA", precio: 3000, shortDesc: "Instalación o cambio de flotante de tanque de agua" },
    { id : 2, mnemonic : "INSTALACIÓN O CAMBIO DE CANILLA", precio: 2400, shortDesc: "Instalación o cambio de canilla"},  
];

const serviceCleaning  = [
    { id : 0, mnemonic : "LIMPIEZA DE CASA GRANDE", precio: 4600, shortDesc: "Limpieza de casa grande" },
    { id : 1, mnemonic : "LIMPIEZA DE CASA CHICA O DEPARTAMENTO", precio: 2800, shortDesc: "Limpieza de casa chica o departamento" },
];

const serviceRoofer  = [
    { id : 0, mnemonic : "REPARACIÓN DE TECHO", precio: 4600, shortDesc: "Reparación de techo" },
    { id : 1, mnemonic : "CAMBIO COMPLETO DE TECHO", precio: 2800, shortDesc: "Cambio completo de techo" },
];

function agregarSubCategorias(services, items){
    services.forEach(service => {
        $("#" + items).append(`
            <article>
                <h3> ${service.shortDesc}</h3>
                <p> $ ${service.precio}</p>
                <div class="center">
                    <button class="btn btn-outline-dark">Contratar</button>
                </div>
            </article>`);
        
    });
}

agregarSubCategorias(serviceElectric, "itemsElectro" );
agregarSubCategorias(serviceLocksmith, "itemsCerrajeria" );
agregarSubCategorias(serviceFumigation, "itemsFumigacion" );
agregarSubCategorias(serviceGardening, "itemsJardineria" );
agregarSubCategorias(serviceMoving, "itemsMudanzas" );
agregarSubCategorias(servicePool, "itemsPiletero" );
agregarSubCategorias(servicePainter, "itemsPintor" );
agregarSubCategorias(servicePlumber, "itemsPlomeria" );
agregarSubCategorias(serviceCleaning, "itemsLimpiezaCasa" );
agregarSubCategorias(serviceRoofer, "itemsTechista" );