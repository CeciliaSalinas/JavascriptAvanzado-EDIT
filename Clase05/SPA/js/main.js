console.log(document.querySelector('title').textContent)


// todas las peticiones de ajax que hay que hacer
function ajax(url, metodo = 'get'){
    let xhr = new XMLHttpRequest
    xhr.open(metodo, url)
    xhr.send()

    return xhr
}

const getNombreArchivo = id => 'plantillas/' + id + '.html'

//listener de comunicacion
function cargarNavBar(cb){
    let header = document.querySelector('header')
    let xhr = ajax('plantillas/navbar.html')
    xhr.addEventListener('load', () => {
        if(xhr.status == 200){
            header.innerHTML = xhr.response
            if(cb) cb()
        }
    })
}


/* cargarNavBar(getPlantillas) */
/* cargarNavBar(getPlantillasSinHistory) */
cargarNavBar(getPlantillasConHistoryHash)


/* ---------------------------------------------------------------------- */
/*        Manejo de la vista dinámica (SPA) CON HISTORIAL HASH (#)         */ 
/* ---------------------------------------------------------------------- */

function getPlantillasConHistoryHash(){
    const links = document.querySelectorAll('a')
    const main = document.querySelector('main')
    /* console.log(links) */

        /* ---------------------------------------------------------------------- */
        /*                     Cargamos la vista inicial                          */ 
        /* ---------------------------------------------------------------------- */

       /*  let archivo = getNombreArchivo('home') */
        /* console.log(archivo) */
/* 
        let xhr = ajax(archivo)
        xhr.addEventListener('load', () => {
            if(xhr.status == 200){
            main.innerHTML = xhr.response
            
        }
        }) */


        /* ---------------------------------------------------------------------- */
        /*     Cargamos la vista seleccionada desde la barra de navegacion        */ 
        /* ---------------------------------------------------------------------- */

            links.forEach( link => {
                link.addEventListener('click', e => {
                    e.preventDefault()

                    let id = link.id
                    /* console.log(id) */
                    location.hash = id

                    let archivo = getNombreArchivo(id)
                    /* console.log(archivo) */

                    let xhr = ajax(archivo)
                    xhr.addEventListener('load', () => {
                        if(xhr.status == 200){
                        main.innerHTML = xhr.response
                        
                }
            })

                })
            })

            window.addEventListener('hashchange', () => {
                console.log('Cambio el hash url')

                let id = location.hash.slice(1)
                
            let archivo = getNombreArchivo('home')
            /* console.log(archivo) */

            let xhr = ajax(archivo)
            xhr.addEventListener('load', () => {
                if(xhr.status == 200){
                main.innerHTML = xhr.response
                
            }
            })
                })

            }

/* ---------------------------------------------------------------------- */
/*        Manejo de la vista dinámica (SPA) SIN HISTORIAL                 */ 
/* ---------------------------------------------------------------------- */

function getPlantillasSinHistory(){
    const links = document.querySelectorAll('a')
    const main = document.querySelector('main')
    /* console.log(links) */

        /* ---------------------------------------------------------------------- */
        /*                     Cargamos la vista inicial                          */ 
        /* ---------------------------------------------------------------------- */

        let archivo = getNombreArchivo('home')
        /* console.log(archivo) */

        let xhr = ajax(archivo)
        xhr.addEventListener('load', () => {
            if(xhr.status == 200){
            main.innerHTML = xhr.response
            
        }
        })


        /* ---------------------------------------------------------------------- */
        /*     Cargamos la vista seleccionada desde la barra de navegacion        */ 
        /* ---------------------------------------------------------------------- */

            links.forEach( link => {
                link.addEventListener('click', e => {
                    e.preventDefault()

                    let id = link.id
                    /* console.log(id) */

                    let archivo = getNombreArchivo(id)
                    /* console.log(archivo) */

                    let xhr = ajax(archivo)
                    xhr.addEventListener('load', () => {
                        if(xhr.status == 200){
                        main.innerHTML = xhr.response
                        
                }
            })

                })
            })

        }










