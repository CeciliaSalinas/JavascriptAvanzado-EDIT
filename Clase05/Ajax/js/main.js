console.log(document.querySelector('title').textContent)

console.log(`
    /* ----------------------------------------- */
    /*      Código sincrónico en Js              */
    /* ----------------------------------------- */
`)

/* function delaySync(){
    for(let i=0; i<3e9; i++){}
}

console.log('Inicio de Tareas')

console.log('Tarea A - paso 1'); delaySync()
console.log('Tarea A - paso 2'); delaySync()
console.log('Tarea A - paso 3'); delaySync()
console.log('Tarea A - paso 4'); delaySync()

console.log('Fin de Tarea A')


console.log('Tarea B - paso 1'); delaySync()
console.log('Tarea B - paso 2'); delaySync()
console.log('Tarea B - paso 3'); delaySync()
console.log('Tarea B - paso 4'); delaySync()

console.log('Fin de Tarea B')

console.log('Otras tareas ...') */


console.log(`
    /* ----------------------------------------- */
    /*      Código Asincrónico en Js              */
    /* ----------------------------------------- */
`)
/* function delayASync(cb){
    setTimeout(cb, 1500)
}

console.log('Inicio de Tareas')

console.log('Tarea A - paso 1')
delayASync(() => {
    console.log('Tarea A - paso 2')
    delayASync(() => {
        console.log('Tarea A - paso 3') 
        delayASync(() => {
            console.log('Tarea A - paso 4')
            delayASync(() => {
                console.log('Fin de Tarea A')
            })
        })
    })
})



console.log('Tarea B - paso 1')
delayASync(() => {
    console.log('Tarea B - paso 2')
    delayASync(() => {
        console.log('Tarea B - paso 3') 
        delayASync(() => {
            console.log('Tarea B - paso 4')
            delayASync(() => {
                console.log('Fin de Tarea B')
            })
        })
    })
})

console.log('Otras tareas ...') */


console.log(`
    /* ------------------------------------------------- */
    /*      Comunicación asincrónica con Ajax            */
    /*      Ajax : Javascript Asincrónico And XML        */
    /* ------------------------------------------------- */
`)

/* 
---------------------------------------------------------------
xhr.readyState
0 -> La instancia está creada
1 -> La instancia está configurada
2 -> Hay intercambio de headers entre cliente y el servidor
3 -> Transferencia de información
4 -> Fin de la comunicación (ok o error)
---------------------------------------------------------------
*/

let xhr = new XMLHttpRequest //instancia de comunicacion asinc
console.log(xhr)
console.log(xhr.readyState)

//xhr.open('get', 'texto.txt')
console.log(xhr.readyState)

xhr.addEventListener('readystatechange', () => {
    console.log('readystatechange ->', xhr.readyState)

    /* ------ Intercambio de headers ------ */
    if(xhr.readyState == 2){
        let headers = xhr.getAllResponseHeaders()
        //console.log(headers)

        let tipo = xhr.getResponseHeader('content-type')
        console.log(' --> ' + tipo)

        const valorHeaderEsperado = 'text/plain'
        //const valorHeaderEsperado = 'text/html'
        if(!tipo.includes(valorHeaderEsperado)){
            console.warn(`El tipo header recibido ${tipo} no corresponde al esperado ${valorHeaderEsperado}`)
            xhr.abort()

        }
    }
    
    /* ----- Fin de la comunicación ----- */
   /*  if(xhr.readyState == 4){
        if(xhr.status == 200){
            console.log(xhr.response)
        }
        else{
            console.error('Error status de comunicación', xhr.status)
        }
    } */
})

xhr.addEventListener('abort', () => {
    console.warn('La comunicación fue abortada')
})

xhr.addEventListener('timeout', () => {
    console.warn('El pedido se ha excedido de tiempo')
})


xhr.addEventListener('load', () => {
    if(xhr.status == 200){
        console.log(xhr.response)
    }
    else{
        console.error('Error status de comunicación', xhr.status)
    }
})

xhr.open('get', 'texto.html')

xhr.timeout = 1000 // especifica el tiempo máximo en milisegundos para recibir la respuesta del servidor
                    // con valor 0 deshabilito esta opción
xhr.send()

/* setTimeout(() =>{
    console.log(xhr.status, xhr.response)
},1000)
 */

