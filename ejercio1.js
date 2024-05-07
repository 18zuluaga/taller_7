function Usurios(nombre, email, clave){
    this.nombre = nombre;
    this.email = email;
    this.clave = clave;
}

function Cliente(nombre, email, clave, puntoAcumulados){
    Usurios.call(this, nombre, email, clave)
    this.puntoAcumulados = puntoAcumulados;
}

Cliente.prototype = Object.create(Usurios.prototype);
Cliente.prototype.constructor = Cliente;

Cliente.prototype.acumularPuntos = function () {
    return console.log("acula los puntos del usuairo")
}

Cliente.prototype.canjearPuntos = function () {
    return console.log("canjear los puntos del usuario")
}

function Administrador(nombre, email, clave,  id){
    Usurios.call(this, nombre, email, clave)
    this.id = id;
}

Administrador.prototype = Object.create(Usurios.prototype);
Administrador.prototype.constructor = Administrador;

Administrador.prototype.agregarProductos = function () {
    return console.log("agregar un producto")
}

Administrador.prototype.modificarProductos = function () {
    return console.log("modificar un producto")
}

Administrador.prototype.eliminarUsuario = function () {
    return console.log("eliminar un usuario")
}

function Productos(nombre, puntosNecesarios, cantidadDisponibles, precio, stock){
    this.nombre = nombre;
    this.puntosNecesarios = puntosNecesarios;
    this.cantidadDisponibles = cantidadDisponibles;
    this.precio = precio;
    this.stock = stock;
}

Productos.prototype.obtenerInfo = function(){
    console.log("optiene la informacion del producto")
}

function ProductosDigitales(nombre, puntosNecesarios, cantidadDisponibles, precio, stock, url){
    Productos.call(this, nombre, puntosNecesarios, cantidadDisponibles, precio, stock)
    this.url = url;
}


ProductosDigitales.prototype = Object.create(Productos.prototype);
ProductosDigitales.prototype.constructor = ProductosDigitales;

ProductosDigitales.prototype.descargar = function(){
    console.log("se descarga el producto digital")
}

Productos.prototype.obtenerProductoEmail = function(){
    console.log("obtienes el producto por el email")
}

function ProductosFisico(nombre, puntosNecesarios, cantidadDisponibles, precio, stock,  color){
    Productos.call(this, nombre, puntosNecesarios, cantidadDisponibles, precio, stock)
    this.color = color;
}

ProductosFisico.prototype = Object.create(Productos.prototype);
ProductosFisico.prototype.constructor = ProductosFisico;

ProductosFisico.prototype.actualizarStock = function(){
    console.log("se actualiza el stock")
} 

ProductosFisico.prototype.enviarProducto = function(){
    console.log("se enviaria el producto")
}

function CategoriaProductos (nombre,descripcion){
    this.nombre = nombre;
    this.descripcion = descripcion;
}

CategoriaProductos.prototype.listarProductos = function(){
    console.log("muestra todos los productos")
}

function Actividad(tipo,puntoAcumulados){
    this.tipo = tipo;
    this.puntoAcumulados = puntoAcumulados;
}

Actividad.prototype.completarActividad = function(){
    console.log("se completara una actividad")
}

function OrdenCanje(usuario,producto,fecha){
    this.usuario = usuario
    this.producto = producto
    this.fecha = fecha
}

OrdenCanje.prototype.confirmarOrden = function(){
    console.log("se confirma el pedido")
}

OrdenCanje.prototype.cancelarOrden = function(){
    console.log("se cancela el pedido")
}