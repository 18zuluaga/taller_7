// ejercicio 2

function Persona(nombre, email, clave){
    this.nombre = nombre;
    this.email = email;
    this.clave = clave;
}

Persona.prototype.autemtificacion = function (){
    console.log("autentificado usuario")
}
function Cliente(nombre, email, clave, direccion, telefono){
    Persona.call(this, nombre, email, clave)
    this.direccion = direccion;
    this.telefono = telefono;
}

Cliente.prototype = Object.create(Persona.prototype);
Cliente.prototype.constructor = Cliente;

Cliente.prototype.verHistorialDeCompras = function () {
    return console.log("mostrando historial")
}

Cliente.prototype.realizarPedido = function () {
    return console.log("realizando pedido")
}

function Repartidor(nombre, email, clave,  vehiculo, disponibilidad){
    Persona.call(this, nombre, email, clave)
    this.vehiculo = vehiculo;
    this.disponibilidad = disponibilidad;
}

Repartidor.prototype = Object.create(Persona.prototype);
Repartidor.prototype.constructor = Repartidor;

Repartidor.prototype.aceptarEnvio = function () {
    return console.log("aceptando envio")
}

Repartidor.prototype.actualizarUbicacion = function () {
    return console.log("Actualizando ubicacion")
}

Repartidor.prototype.completarEntrega = function () {
    return console.log("Completando entrega")
}

Repartidor.prototype.actualizarEstado= function () {
    return console.log("actualizando el estado")
}

function Restaurante(nombre){
    this.nombre = nombre;
}

Restaurante.prototype.actualizarPlato= function (){
    console.log("actualizando plato")
}

Restaurante.prototype.agregarPlato= function (){
    console.log("agregando plato")
}

function RestauranteDigital(nombre, menuQr){
    Restaurante.call(this, nombre)
    this.menuQr = menuQr;
}

RestauranteDigital.prototype = Object.create(Restaurante.prototype);
RestauranteDigital.prototype.constructor = RestauranteDigital;

function RestauranteFisico(nombre, menuFisico){
    Restaurante.call(this, nombre)
    this.menuFisico = menuFisico;
}

RestauranteFisico.prototype = Object.create(Restaurante.prototype);
RestauranteFisico.prototype.constructor = RestauranteFisico;

RestauranteFisico.prototype.eliminarPlato= function (){
    console.log("eliminado plato")
}


function Menu(plato){
    this.plato = plato;
}

function MenuQR(plato, url){
    Menu.call(this, plato)
    this.url = url;
}

menuQr.prototype.generarQR = function(){
    console.log("generando")
}

MenuQR.prototype = Object.create(Menu.prototype);
MenuQR.prototype.constructor = MenuQR;

function MenuFisico(plato, platoTipo){
    Menu.call(this, plato)
    this.platoTipo = platoTipo;
}

MenuFisico.prototype = Object.create(Menu.prototype);
MenuFisico.prototype.constructor = MenuFisico;

MenuFisico.prototype.impresion= function (){
    console.log("imprimiendo menu")
}

MenuFisico.prototype.visualizacion= function (){
    console.log("visualizar menu")
}