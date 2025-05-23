console.log(document.querySelector('title').textContent)

function ajax(url, metodo = 'get') {
    let xhr = new XMLHttpRequest
    xhr.open(metodo, url)
    xhr.send()

    return xhr
}


//const getNombreArchivo = id => 'plantillas/' + id + '.html' //Con opeador ternario
const getNombreArchivo = id => 'plantillas/' + (id || 'home') + '.html' // con short circuit operator

function cargarNavBar(cb) {
    let header = document.querySelector('header')
    let xhr = ajax('plantillas/navbar.html')
    xhr.addEventListener('load', () => {
        if (xhr.status == 200) {
            header.innerHTML = xhr.response
            if (cb) cb()
        }
    })
}

 
cargarNavBar(getPlantillasSinHistory)


    /* --------------------------------------------------------- */
    /*      Manejo de la vista dinámica (SPA) sin historial      */
    /* --------------------------------------------------------- */
    
    function getPlantillasSinHistory() {
        const links = document.querySelectorAll('a')
        const main = document.querySelector('main')
    //console.log(links)


    /* ----------------------------------------------------------- */
    /*             Cargamos la vista inicial                       */
    /* ----------------------------------------------------------- */

    let archivo = getNombreArchivo('home')
    


     let xhr = ajax(archivo)
     xhr.addEventListener('load', () => {
         if (xhr.status == 200) {
             main.innerHTML = xhr.response
         }
     })


    /* ----------------------------------------------------------- */
    /* Cargamos la vista seleccionada desde la barra de navegación */
    /* ----------------------------------------------------------- */

    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()

            let id = link.id
            //console.log(id)

            //obtengo el nombre del archivo y le pido por ajax el recurso
            let archivo = getNombreArchivo(id)
           // console.log(archivo)


            let xhr = ajax(archivo)
            xhr.addEventListener('load', () => {
                if (xhr.status == 200) {
                    main.innerHTML = xhr.response
                }
            })

        })
    })
}


cargarNavBar(getPlantillasConHistoryHash)

    /* ---------------------------------------------------------------- */
    /*      Manejo de la vista dinámica (SPA) con historial HASH(#)     */
    /* ---------------------------------------------------------------- */
    
    function getPlantillasConHistoryHash() {
        const links = document.querySelectorAll('a')
        const main = document.querySelector('main')
    //console.log(links)


    /* ----------------------------------------------------------- */
    /*             Cargamos la vista inicial                       */
    /* ----------------------------------------------------------- */
    let id = location.hash.slice(1)
    let archivo = getNombreArchivo(id)
    

     let xhr = ajax(archivo)
     xhr.addEventListener('load', () => {
         if (xhr.status == 200) {
             main.innerHTML = xhr.response
         }
     })


    /* ----------------------------------------------------------- */
    /* Cargamos la vista seleccionada desde la barra de navegación */
    /* ----------------------------------------------------------- */

    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()

            let id = link.id
            //console.log(id)

            location.hash = id

          /* 
            let archivo = getNombreArchivo(id)
           // console.log(archivo)


             let xhr = ajax(archivo)
            xhr.addEventListener('load', () => {
                if (xhr.status == 200) {
                    main.innerHTML = xhr.response
                }
            })  */

        })
    })

    window.addEventListener('hashchange', () => {
        console.log('Cambio el hash url')

        let id = location.hash.slice(1)
        console.log(id)

        let archivo = getNombreArchivo(id)
           // console.log(archivo)


             let xhr = ajax(archivo)
            xhr.addEventListener('load', () => {
                if (xhr.status == 200) {
                    main.innerHTML = xhr.response
                }
            }) 

    })
}




