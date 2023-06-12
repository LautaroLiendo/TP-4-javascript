// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

// Output:



// objeto.encender();
// objeto.apadar()
// auto encendido
// El auto se apagó


// const auto = {
//     color: "rojo",
//     marca: "fiat",
//     modelo: "kronos",
//     encender: function () {
//         return "auto encendido"
//     },
//     apagar: function () {
//         return "el auto se apago"
//     }
// }

//---------------------------------------------------------------------------------------------------------------
// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

// const cuenta = {
//     titular: "Alex",
//     saldo: 0,
//     ingresar: function ingresar (dinero) {
//         return cuenta.saldo = cuenta.saldo + dinero
//     },
//     extraer: function extraer (dinero) {
//         return cuenta.saldo = cuenta.saldo - dinero
//     },
//     informar: function() {
//         return "Titular: " + this.titular + ", Saldo: " + this.saldo;
//       }
//  }
 
//  console.log(cuenta.saldo);

//--------------------------------------------------------------------------------------------------------------
// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

// class Rectangulo {
//     constructor(alto, ancho) {
//       this.alto = alto;
//       this.ancho = ancho;
//     }
  
//     modificarAlto(nuevoAlto) {
//       this.alto = nuevoAlto;
//     }
  
//     modificarAncho(nuevoAncho) {
//       this.ancho = nuevoAncho;
//     }
  
//     mostrarPropiedades() {
//       console.log("Alto: " + this.alto + ", Ancho: " + this.ancho);
//     }
  
//     calcularPerimetro() {
//       return 2 * (this.alto + this.ancho);
//     }
  
//     calcularArea() {
//       return this.alto * this.ancho;
//     }
//   }
  
//   // Crear un objeto Rectángulo
//   let miRectangulo = new Rectangulo(5, 10);
  
//------------------------------------------------------------------------------------------------------------
// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

// class Producto {
//     constructor(codigo, nombre, precio) {
//       this.codigo = codigo;
//       this.nombre = nombre;
//       this.precio = precio;
//     }
  
//     imprimirDatos() {
//       console.log("Código: " + this.codigo);
//       console.log("Nombre: " + this.nombre);
//       console.log("Precio: $" + this.precio);
//     }
//   }
  
//   // Crear tres instancias de la clase Producto
//   var producto1 = new Producto(1, "Producto 1", 500);
//   var producto2 = new Producto(2, "Producto 2", 600);
//   var producto3 = new Producto(3, "Producto 3", 350);
  
//   // Guardar las instancias en un array
//   var arrayProductos = [producto1, producto2, producto3];
  
//   // Utilizar el método imprimirDatos() para mostrar los valores de los objetos
//   for (var i = 0; i < arrayProductos.length; i++) {
//     arrayProductos[i].imprimirDatos();
//     console.log("-----------");
//   }
  
//5--------------------------------------------------------------------------------------------------------
// class Persona {
//     constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
//       this.nombre = nombre;
//       this.edad = edad;
//       this.dni = dni;
//       this.sexo = sexo;
//       this.peso = peso;
//       this.altura = altura;
//       this.anioNacimiento = anioNacimiento;
//     }
  
//     mostrarGeneracion() {
//       if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
//         console.log("Pertenece a la generación Silent Generation");
//         console.log("Rasgo característico: austeridad");
//       } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
//         console.log("Pertenece a la Baby Boom");
//         console.log("Rasgo característico: ambicion");
//       } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
//         console.log("Pertenece a la generación X");
//         console.log("rasgo caracteristico obsesion por el exito");
//       } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
//         console.log("Pertenece a la generación Y");
//         console.log("Rasgo característico: frustracion");
//       } else if (this.anioNacimiento >= 1994) {
//         console.log("Pertenece a la generacion Z");
//         console.log("Rasgo característico: irreverencia");
//       } else {
//         console.log("Año de nacimiento inválido.");
//       }
//     }
  
//     esMayorDeEdad() {
//       if (this.edad >= 18) {
//         return true;
//       } else {
//         return false;
//       }
//     }
  
//     mostrarDatos() {
//       console.log("Nombre: " + this.nombre);
//       console.log("Edad: " + this.edad);
//       console.log("DNI: " + this.dni);
//       console.log("Sexo: " + this.sexo);
//       console.log("Peso: " + this.peso);
//       console.log("Altura: " + this.altura);
//       console.log("Año de Nacimiento: " + this.anioNacimiento);
//     }
  
//     generaDNI() {
//       this.dni = Math.floor(Math.random() * 100000000);
//     }
//   }
  
//   // Crear una instancia de la clase Persona
//   var persona = new Persona("Juan", 25, "", "H", 70, 1.75, 1995);
  
//   // Generar el DNI aleatoriamente
//   persona.generaDNI();
  
//   // Mostrar la generación y rasgo característico
//   persona.mostrarGeneracion();
  
//   // Verificar si es mayor de edad
//   if (persona.esMayorDeEdad()) {
//     console.log("Es mayor de edad");
//   } else {
//     console.log("No es mayor de edad");
//   }
  
//   // Mostrar los datos de la persona
//   persona.mostrarDatos();

//6---------------------------------------------------------------------------------------------------
// class Libro{  
//     constructor(ISBN, titulo, autor, paginas) {
//         this.ISBN = ISBN;
//         this.titulo = titulo;
//         this.autor = autor;
//         this.paginas = paginas;
//       }
    
// MostrarLibro(){
//     document.write(`<p> El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.paginas} páginas.</p>`)
// }

// get mostrarISBN(){
//     return this.ISBN;
// }
// set modificarISBN(ISBN){
//     this.ISBN= ISBN;
// }
// get mostrarTitulo(){
//     return this.titulo;
// }
// set modificarTitulo(titulo){
//     this.titulo= titulo;
// }
// get mostrarAutor(){
//     return this.autor;
// }
// set modificarAutor(autor){
//     this.autor= autor;
// }
// get mostrarPaginas(){
//     return this.paginas;
// }
// set modificarPaginas(paginas){
//     this.paginas= paginas;
// }
    
// }

// let ISBN=prompt("Ingrese ISBN del libro");
// let titulo=prompt("Ingrese titulo del libro");
// let autor=prompt("Ingrese autor del libro");
// let paginas=parseInt(prompt("Ingrese número de páginas del libro"));
// let libro1 = new Libro(ISBN,titulo,autor,paginas);
// libro1.MostrarLibro();

// ISBN=prompt("Ingrese ISBN del libro")
// titulo=prompt("Ingrese titulo del libro")
// autor=prompt("Ingrese autor del libro")
// paginas=parseInt(prompt("Ingrese número de páginas del libro"))
// libro2 = new Libro(ISBN,titulo,autor,paginas);


// libro2.MostrarLibro();



// if (libro1.paginas>libro2.paginas){
//     document.write(`<p> El libro 1 tiene más páginas que el libro 2.</p>`)
// }
// else if (libro1.paginas===libro2.paginas){
//     document.write(`<p> El libro 1 tiene el mismo número de páginas que el libro 2.</p>`) 
// }
// else{
//     document.write(`<p> El libro 2 tiene más páginas que el libro 1.</p>`)
// }

//7-----------------------------------------------------------------------------------------------------
// class Contacto {
//     constructor(nombre, telefono) {
//       this.nombre = nombre;
//       this.telefono = telefono;
//     }
//   }
  
//   class Agenda {
//     constructor(tamanio = 10) {
//       this.contactos = [];
//       this.tamanio = tamanio;
//     }
  
//     aniadirContacto(contactoNuevo) {

//       if (this.existeContacto(contactoNuevo.nombre) === true) {
//         console.log("El contacto ya existe, no se agregó.");
//       } else {

//         if (this.agendaLlena() === false) {

//           this.contactos.push(contactoNuevo);
//         }else{
//           document.write('No se agregó el contacto, la agenda esta llena')
//         }
//       }
//       console.log(this.contactos);
//     }
  
//     existeContacto(nombre) {

//       const contactoExistente = this.contactos.find((itemContacto) => {
//         return nombre === itemContacto.nombre;
//       });
//       console.log(contactoExistente);
//       if (contactoExistente) {
//         console.log("El contacto existe");
//         return true;
//       } else {
//         console.log("El contacto no existe");
//         return false;
//       }
//     }
    
//     agendaLlena() {
//       if (this.contactos.length === this.tamanio) {
//         console.log("La agenda esta llena");
//         return true;
//       } else {
//         console.log("Hay espacio disponible");
//         return false;
//       }
//     }
//     eliminarContacto(nombre) {
//       let contactosFiltrados = this.contactos.filter((itemContacto) => {
//         return itemContacto.nombre != nombre;
//       });
//       this.contactos = contactosFiltrados;
//       console.log("Contacto eliminado: " + nombre);
//       document.write("Contacto eliminado: " + nombre);
//       console.log(this.contactos);
//     }
//     listarAgenda() {
//       for (let i = 0; i < this.contactos.length; i++) {
//         console.log(this.contactos[i]);
//       }
//     }
//     huecosLibres() {
//       console.log(
//         `La agenda tiene ${this.tamanio - this.contactos.length} huecos libres`
//       );
//     }
//     set modificarTamanio(nuevoTamanio) {
//       this.tamanio = nuevoTamanio;
//       console.log(agendaTelefonica);
//     }
//   }
  
//   let agendaTelefonica = new Agenda();
//   console.log(agendaTelefonica);
  
//   do {
//     let opcion = parseInt(
//       prompt(`Seleccione una opcion:
//         1- Agregar un contacto,
//         2- Consultar si el contacto existe,
//         3- Listar los contactos,
//         4- Buscar un contacto,
//         5- Eliminar un contacto,
//         6- Consultar si la agenda esta llena,
//         7- Consultar cuantos huecos libres tiene la agenda,
//         8- Cambiar el tamaño de la agenda
//         `)
//     );
  
//     switch (opcion) {
//       case 1:
//         let nombre = prompt("Ingrese un nombre").toLocaleLowerCase();
//         let telefono = prompt("Ingrese un telefono");
//         let nuevoContacto = new Contacto(nombre, telefono);
//         agendaTelefonica.aniadirContacto(nuevoContacto);
//         break;
//       case 2:
//         let nombreBuscado = prompt("Ingrese un nombre").toLocaleLowerCase();
//         agendaTelefonica.existeContacto(nombreBuscado);
//         break;
//       case 3:
//         agendaTelefonica.listarAgenda();
//         break;
//       case 4:
//         let nombreAEncontrar = prompt("Ingrese un nombre").toLocaleLowerCase();
//         agendaTelefonica.existeContacto(nombreAEncontrar);
//         break;
//       case 5:
//         let contactoBorrar = prompt("Ingrese un nombre").toLocaleLowerCase();
//         agendaTelefonica.eliminarContacto(contactoBorrar);
//         break;
//       case 6:
//         agendaTelefonica.agendaLlena();
//         break;
//       case 7:
//         agendaTelefonica.huecosLibres();
//         break;
//       case 8:
//         let cambiarTamanio = parseInt(prompt("Elija el tamaño de la agenda"));
//         agendaTelefonica.modificarTamanio = cambiarTamanio;
//         break;
//       default:
//         alert(`Ingreso una opcion incorrecta`);
//     }
//   } while (confirm(`¿Quiere realizar otra operacion?`));