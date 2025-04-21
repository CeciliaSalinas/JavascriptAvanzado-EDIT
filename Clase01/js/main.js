console.log('Javascript Avanzado - Clase 1')

/* -------------------------------------------------- */
/*     Nuevos constructores de variables en ES6       */
/* -------------------------------------------------- */
console.log ('\nJS5 - var')

/* var numero = 5
var numero = 6
console.log(numero, typeof numero)

var PI = 3.1415927
PI = 2.71
console.log(PI)

for( var i=0; i<5; i++){
    console.log(i)
}
console.log(i) */

/* -------------------------------------------------- */
console.log('\nES6 -let /const')

let numero = 5
 numero = 6
console.log(numero, typeof numero)

const PI = 3.1415927
//PI = 2.71
console.log(PI)

for( let i=0; i<5; i++){
    console.log(i)
}
//console.log(i)
 
console.log('\nComparación de funcionalidad de var / let y const en distintos bloques de código')

//Bloque de código anónimo
{
    //var a = 5
    //let a = 5
    const a = 5
    //a = 55
    console.log(a)
}
//console.log(a)

//Bloque de código condicional (siempre tiene una condición)
if(true){
    //var b = 6
    let b = 6
    console.log(b)
}
//console.log(b)

//Bloque de código funcional (tiene una función y se activa cuando se llama a la funcion)
function foo(){
    //var c = 7
    let c = 7
    console.log(c)
}
foo()
//console.log(c)

/* -------------------------------------------------- */
/*     Nuevos constructores de funciones en ES6       */
/* -------------------------------------------------- */
console.log('\n/* JS5 -Funciones */')

/* function sumar (a,b){
    return a + b
} */

var sumar = function (a,b){
        return a + b
    }

var op1 = 6, op2 = 5

//concatenación de strings
console.log('La suma de ' + op1 + ' y ' + op2 + ' es ' + sumar(op1,op2))

/* -------------------------------------------------- */
console.log('\n/* ES6 - arrow function / funciones flecha / expresiones lambda */')

const restar = (a,b) => a - b
const dobleDe = a => 2 *a
const saludo = () => console.log('Hola!!!')
const sumar2Mult = (a,b,m) => {
    let s = a + b
    return s * m
}
const getPersona = () => ({nombre: 'Juana', edad: 23})

//Template string `` ->backtic
console.log(`La resta de ${op1}  y ${op2}  es ${restar(op1,op2)}`)
console.log(`El doble de ${op1} es ${dobleDe(op1)}`)
saludo()
console.log(`La suma de ${op1}  y ${op2}  multiplicado por 8 es ${sumar2Mult(op1,op2,8)}`)
console.log(getPersona())

/* ------------------------------------------------------------------------------- */
/*     Tipos de varaiables en Js por su tipo de copia en variables y funciones    */
/* ------------------------------------------------------------------------------- */
//1) Tipo primitivo : number, boolean, string (copia x valor)
//análisis en variables  (se crea una nueva variable que es independiente de la anterior x eso es copia x valor)
var nombre = 'Juan'
console.log(nombre, typeof nombre)
var nombreBackup = nombre
nombre = 'Pedro'
console.log(nombre)
console.log(nombreBackup)

//análisis en funciones
var fecha = '26/03/2025'
var agregarHora = function(f){
    f = f + ' 14:34'
    return f
}
console.log(fecha)
console.log(agregarHora(fecha))
console.log(fecha)

//--------------------------------------------------------------
//2) Tipo objeto: arrray, object, function (copia x referencia)
//análisis en variables (cuando creo una variable de tipo objeto, hace referencia a una zona de memoria) (cuando a la variable le asigno una referencia, copia una referencia y las 2 referencias apuntan a la misma zona)
var nombre = ['Juan']
console.log(nombre, typeof nombre, Array.isArray(nombre)? ' es un Array': 'no es un Array')
var nombreBackup = nombre
nombre[0] = 'Pedro'
console.log(nombre)
console.log(nombreBackup)

//análisis en funciones
var fecha = ['26/03/2025']
var agregarHora = function(f){
    f[0] = f[0] + ' 14:34'
    return f
}
console.log(fecha)
console.log(agregarHora(fecha))
console.log(fecha)


/* ------------------------------------------------------------ */
/*          BOM : Browser Object Model -> window                */
/*          DOM : Document Object Model -> document             */
/* ------------------------------------------------------------ */
//Acceso al BOM
console.log(window.innerWidth)
console.log(window.innerHeight)
console.log(outerWidth)
console.log(outerHeight)

//Acceso al DOM
console.log(window.document.getElementById('titulo'))
//console.log(window.document.getElementsByTagName('h1'))
console.log(window.document.getElementsByTagName('h1')[0])
//console.log(window.document.getElementsByClassName('titulo'))
console.log(document.getElementsByClassName('titulo')[0])

//Acceso al DOM (utilizando métodos avanzados)
console.log(document.querySelector('#titulo'))

//console.log(document.querySelector('h1'))
//console.log(document.querySelectorAll('h1'))
console.log(document.querySelectorAll('h1')[0])

//console.log(document.querySelector('.titulo'))
//console.log(document.querySelectorAll('.titulo'))
console.log(document.querySelectorAll('.titulo')[0])

/* ------------------------------------------------------------ */
/*         Manipulación de elementos del DOM                    */
/* ------------------------------------------------------------ */
var titulo = document.getElementById('titulo')
titulo.innerText += '¿Cómo están?'
titulo.style.color = 'blue'

/* ------------------------------------------------------------ */
/*                  Acceso avanzado al DOM                      */
/* ------------------------------------------------------------ */
var p = document.createElement('p')
p.innerText = 'Lorem Ipsum...'

var body = document.getElementsByTagName('body')[0]
console.log(body)
body.appendChild(p)
