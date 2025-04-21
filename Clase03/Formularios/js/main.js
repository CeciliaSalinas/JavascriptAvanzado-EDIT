console.log(document.querySelector('title').innerText)
/* ------------------------------- */
/*      Eventos en formularios     */
/* ------------------------------- */
/* let input = document.querySelector('input')

// 1) Evento de Click
let btn = document.getElementById('btn')
btn.addEventListener('click', e => {
    e.preventDefault()
    
    let valido = input.checkValidity()

    if(valido){
    let valor = input.value
    console.log('Click','['+valor+']')
    }
    else{
        console.error('Este campo no es valido')
    }
})
 */

// 2) Evento de Submit
/* let form = document.getElementById('formulario')
form.addEventListener('submit', e => {
    e.preventDefault()
    let valor = input.value
    console.log('Submit','['+valor+']')
}) */


/* -------------------------------------------------------------------------------- */
/*     Validaciones de formularios en Js (con carteles indicadores en HTML y JS)    */
/* -------------------------------------------------------------------------------- */
let input = document.querySelector('input')

input.setCustomValidityJS = function(mensaje){
    let div = document.querySelector('div')
    div.innerText = mensaje
    div.style.display = mensaje? 'block' : 'none' // operador ternario

}

/* -------------------------------------------------------------------------------- */
/*     Validacion de la entrada usando estructuras condicionales                    */
/* -------------------------------------------------------------------------------- */

function validarInput(valor){
    valor = valor.trim() //elimina espacios al comienzo y final del string

    let mensaje = ''

    let lg = valor.length
    //validación por Js de campo vacio
    if(lg == 0){
        mensaje = 'Este campo es obligatorio'
        //console.error(mensaje)
        //input.setCustomValidity(mensaje) //Cartel HTML
        input.setCustomValidityJS(mensaje) //Cartel JS
        return null
    }
    //validación por Js de campo mínimo
    else if(lg < 3){
        mensaje = 'Este campo debe tener al menos 3 caracteres'
        //console.error(mensaje)
        //input.setCustomValidity(mensaje) //Cartel HTML
        input.setCustomValidityJS(mensaje) //Cartel JS
        return null
    }
    //validación por Js de campo máximo
    else if (lg > 40){
        mensaje = 'Este campo debe tener como máximo 40 caracteres'
        //console.error(mensaje)
        //input.setCustomValidity(mensaje) //Cartel HTML
        input.setCustomValidityJS(mensaje) //Cartel JS
        return null
    }
    else if(valor.includes(' ')){
        mensaje = 'Este campo no incluye espacion intermedios'

        input.setCustomValidityJS(mensaje) //Cartel Js
        return null
    }
    else if(valor.includes('*')){
        mensaje = 'Este campo no incluye asteriscos'

        input.setCustomValidityJS(mensaje) //Cartel Js
        return null
    }
    else if(!(valor[0] >= 'A' && valor[0] <= 'Z')){
        mensaje = 'Este debe comenzar con mayúscula'

        input.setCustomValidityJS(mensaje) //Cartel Js
        return null
    }

    //input.setCustomValidity(mensaje)  //Cartel JS
    input.setCustomValidityJS(mensaje)

    valor = encodeURIComponent(valor) //pasa a hexadecimal lo que se ingresa como código ej : ( <script>alert(Hola!)</script>)

    return valor
}

/* ---------------------------------------------------------- */
/*     Validacion de la entrada usando expresiones regulares  */
/* ---------------------------------------------------------- */

function validarInputRegExp(valor){
    let mensaje = ''


    /* -------------------------------- */
    /*    Ejemplo validacion nombre     */
    /* -------------------------------- */
  /*   let validadorNombre = /^[A-Z][a-z]{2,9}$/
    if(!validadorNombre.test(valor)){
        mensaje = 'Este campo no es valido'

        let lg = valor.length
        if( lg == 0) mensaje = 'Este campo es obligatorio'
        if(lg < 3) mensaje = 'Este campo debe tener al menos 3 caracteres'

        input.setCustomValidityJS(mensaje)

        return null
    } */


    /* -------------------------------- */
    /*    Ejemplo validacion EMAIL      */
    /* -------------------------------- */
    let validadorEmail = /^\w+@\w+\.\w{2,3}$/
    if(!validadorEmail.test(valor)){
        mensaje = 'Escribir un email valido'

      

        input.setCustomValidityJS(mensaje)

        return null
    }


    input.setCustomValidityJS(mensaje)
    return valor
}


input.addEventListener('input', () =>{
    //console.log(input.value)
   // validarInput(input.value)
    validarInputRegExp(input.value)
})


let form = document.querySelector('form')
form.addEventListener('submit', e => {
    e.preventDefault()

    //let valor = validarInput(input.value)
    let valor = validarInputRegExp(input.value)
    if(valor){
        console.log('Valor ingresado','['+valor+']')
    }
    
}) 


/* -------------------------------------------------------------------------- */
/*    EXPRESIONES REGULARES  (validar campos, strings o para hacer bucles)  */
/*    https://regex101.com/                                                 */
/* -------------------------------------------------------------------------- */
// las expresiones regulares en js son objetos y se declaran de varias maneras

//let miRegExp = new RegExp('a bc', 'i')        //forma declarativa tipo objeto
let miRegExp = /a bc/i                          //forma declarativa tipo literal

let mensaje = 'Hola a Bc mundo'
let valido = miRegExp.test(mensaje)

console.log('Mensaje: ' + mensaje + ' -> validación:', valido)


//----- Sin RegExp -----
    /*  const validarA_Z581 = chr => {
        if((chr >= 'A' && chr <= 'Z') || chr == '5' || chr == '8' || chr == '1')  return true
        return false
     } */


//----- Con RegExp -----
const validarA_Z581 = chr => {
    if(/[A-Z581]/.test(chr)) return true
    return false
 }
 console.log(validarA_Z581('8'))



 

