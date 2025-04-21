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


cargarNavBar(getPlantillas)


function getPlantillas(){
    const links = document.querySelectorAll('a')
    const main = document.querySelector('main')
    console.log(links)

    links.forEach( link => {
        link.addEventListener('click', e => {
            e.preventDefault()

            let id = link.id
            console.log(id)

            let archivo = getNombreArchivo(id)
            console.log(archivo)

            let xhr = ajax(archivo)
            xhr.addEventListener('load', () => {
                if(xhr.status == 200){
                main.innerHTML = xhr.response
                if(cb) cb()
        }
    })

        })
    })
}
