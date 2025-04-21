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

xhr.open('get', 'texto.txt')
console.log(xhr.readyState)

xhr.addEventListener('readystatechange', () => {
    console.log('readystatechange ->', xhr.readyState)

    if(xhr.readyState == 4){
        if(xhr.status == 200){
            console.log(xhr.response)
        }
        else{
            console.error('Error status de comunicación', xhr.status)
        }
    }
})

xhr.send()

/* setTimeout(() =>{
    console.log(xhr.status, xhr.response)
},1000)
 */

