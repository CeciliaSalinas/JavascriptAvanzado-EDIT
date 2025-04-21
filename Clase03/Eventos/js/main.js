console.log(document.querySelector('title').innerText)

/* --------------------------------------------------- */
console.log('\n/* CALLBACKS */')
/* --------------------------------------------------- */
//CallBack: es una funcion que se llama dentro de otra funcion por referencia
 
var uno = () => {console.log('Soy la función 1')}

var dos = () => {console.log('Soy la función 2')}

uno()
dos()

console.log('---------------------------------------')

function prueba(item, callback){
    console.log(item, callback)

   /*  if(callback) callback()
        else console.log(`Prueba: el callback ${callback} no está defenido`) */

   if(typeof callback == 'function') callback()
    else console.error(`Prueba: el callback "${callback}" no es una función`)

}

prueba(1, uno)
prueba(2, dos)
prueba(3, 'pepe')

function prueba2(item, cb1, cb2){
    console.log(item)


   if(typeof cb1 == 'function') cb1()
    else console.error(`Prueba: el callback 1 "${cb1}" no es una función`)

   
   if(typeof cb2  == 'function') cb2()
    else console.error(`Prueba: el callback 2 "${cb2}" no es una función`)

}
prueba2(4,uno,dos)


console.log('---------------------------------------')

function operaciones(a, b ,cb){
    if(typeof cb !== 'function') return '**OPERACIÓN NO DEFINIDA**'
    return cb(a,b)
}

const suma = (a,b) => a + b
const resta = (a, b) => a - b
const mult = (a, b) => a * b
const div = (a, b) => a / b

var num1 = 15, num2 = 6

console.log(`La suma entre ${num1} y ${num2} es ${operaciones(num1, num2, suma)}`)
console.log(`La resta entre ${num1} y ${num2} es ${operaciones(num1, num2, resta)}`)
console.log(`La multiplicacón entre ${num1} y ${num2} es ${operaciones(num1, num2, mult)}`)
console.log(`La división entre ${num1} y ${num2} es ${operaciones(num1, num2, div)}`)
console.log(`La ??? entre ${num1} y ${num2} es ${operaciones(num1, num2)}`)
                                                                        
console.log(`El módulo entre ${num1} y ${num2} es ${operaciones(num1, num2, (x,y) => x % y)}`) //generamos un cb en la misma expresión
console.log(`El módulo entre ${num1} y ${num2} es ${operaciones(num1, num2, function(x,y) {return x % y} )}`)

/* --------------------------------------------------- */
console.log('\n/* EVENTOS */')
/* --------------------------------------------------- */
var btn = document.getElementById('btn')

    //btn.onclick = console.log('Click') //NO FUNCIONA: porque la propiedad onclick necesita estar inicializada con un callback

    /* function click(){
        console.log('Click!')
    } 
    */


    /* const click = function (){
        console.log('Click!')
        } 
    */
        
    const click =  () => console.log('Click!')

//btn.onclick = click
//btn.onclick = () => console.log('Click!')
btn.onclick = function() {console.log('Click!')} 

/* --------------------------------------------------- */
console.log('\n/* EVENTOS con callbacks múltiples */')
/* --------------------------------------------------- */

/* btn.onclick = uno
btn.onclick = dos */

/* --Forma 1-- */
/* btn.onclick = () =>{
    uno()
    dos()
} */

/* --Forma 2 -- con el método addEvertListener */
btn.addEventListener('click', uno)
btn.addEventListener('click', dos)
btn.addEventListener('click', function(){ console.log('Soy otra función')})
btn.addEventListener('click', ()=> { console.log ('Soy otra función 2')})


/* --------------------------------------------------- */
console.log('\n/* Objeto Event (e) */') //este (e) en consola nos describe el detalle/información del evento
/* --------------------------------------------------- */
btn.addEventListener('click', function(e){
    console.log(e)
})

btn.addEventListener('click', (e) =>{console.log(e)})

function procesarEventoClick(e){
    console.log('procesarEventoClick',e)
}

btn.addEventListener('click', procesarEventoClick)

/* --------------------------------------------------------------------------------------------------------------------------------------------- */
console.log('\n/* Propagación de eventos (BUBBLING (elemento mas cerca de nosotros hacia atrás) Y CAPTURING (desde el mas atras hacia adelante))*/')
/* ------------------------------------------------------------------------------------------------------------------------------------------------ */
var UNO = document.getElementById('uno')
var DOS = document.getElementById('dos')
var TRES = document.getElementById('tres')

TRES.addEventListener('click', function(e){
    //e.stopPropagation() //detiene la propagación del evento en la dirección indicada
    console.log('click en TRES')
},false)  //false o no definido BUBBLING, true : CAPTURING -> direccio de propagación del evento

DOS.addEventListener('click', function(e){
    //e.stopPropagation()
    console.log('click en DOS')
},false)

UNO.addEventListener('click', function(e){
    //e.stopPropagation()
    console.log('click en UNO')
},false)

/* --------------------------------------------------------------------- */
console.log('\n/* Aplicación avanzada de propagación de eventos */')
/* ------------------------------------------------------------------- - */
var estatico = document.getElementById('estatico')

var botonCreado = false
estatico.addEventListener('click', () => { console.log('Click en el botón estático')

    if(!botonCreado){
    var dinamico = document.createElement('button')
    dinamico.innerText = 'Dinámico'
    dinamico.id = 'dinamico'
    document.body.appendChild(dinamico)

    /* ---------------------------------- */
    /*  Una de las formas de solución     */
    /* ---------------------------------- */
    //let dinamico = document.getElementById('dinamico')
    //console.log(dinamico)
    //dinamico.addEventListener('click', () => {console.log('Click en botón dinámico')})

    botonCreado = true
    }
    })

    /* ----------------------------------------------------------- */
    /*   Otra forma de solución : usando propagación de eventos    */
    /* ----------------------------------------------------------- */
    document.addEventListener('click', function(e){
        //console.log('Click en document', e)

        let id = e.target.id // recupero el id del elemento donde me hicieron click
        //console.log('El id es: ' + id)

        if(id == 'dinamico'){
            console.log('Click en botón dinámico')
        }

    })


/* --------------------------------------------------------------------- */
console.log('\n/* Eventos con comportamiennto automático */')
/* ------------------------------------------------------------------- - */
var link = document.getElementById('link')
link.addEventListener('click', function(e){
    e.preventDefault() // Cancela el evento automático en este elemento de este enlace (ya que por default tiene un eveneto automatico por el html)
    console.log('Click en link')
})


/* --------------------------------------------------------------------- */
console.log('\n/* Manipulación del DOM con un evento del BOM */')
/* --------------------------------------------------------------------- */
window.addEventListener('resize', () => {
    console.log('Cambió el tamaño del navegador')
    infoSize()
})

function infoSize(){
    document.getElementById('info-resize').innerHTML = `
    <b>Cambió el tamaño del navegador</b><br>
    El navegador tiene <i>${innerWidth} por ${innerHeight}</i> pixeles de tamaño <span style="color:red;"> interno </span>.<br>
    El navegador tiene <i>${outerWidth} por ${outerHeight}</i> pixeles de tamaño <span style="color:green;"> externo </span>.<br>
    `
}
infoSize()


/* --------------------------------------------------------------------- */
console.log('\n/* EVENTOS CUSTOM (personalizados)*/')
/* --------------------------------------------------------------------- */
// 1) Creación del evento personalizado
var ev1 = new Event ('look1', { bubbles: true, cancelable: false })
var ev2 = new Event ('look2', { bubbles: true, cancelable: false })
var ev3 = new Event ('look3', { bubbles: true, cancelable: false })


// 2) Registro del evento con addEventListenner
document.addEventListener('look1', ()=>{
    console.log('Evento look1')

    document.dispatchEvent(ev2)
})

document.addEventListener('look2', ()=>{
    console.log('Evento look2')
})

document.addEventListener('look3', ()=>{
    console.log('Evento look3')
})

// 3) Dispatch del evento
 document.getElementById('btn-look').addEventListener('click', ()=>{
    //console.log('button look1')

    document.dispatchEvent(ev1)
 })

 //document.dispatchEvent(ev1)

 setTimeout(() =>{
    document.dispatchEvent(ev3)
},4000) 

/* setInterval(() =>{
    document.dispatchEvent(ev3)
},4000) */


