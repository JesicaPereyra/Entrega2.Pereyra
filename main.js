const contenedroProducto = document.getElementById("productos")
const carritoNuevo = document.getElementById("carrito")

const productosTodos = [
{
    id:1,
    nombre:`Accesorios`,
    precio: 100,
    img: "./imagen/tienda/accesorios.jpg",
    descripción: `Collares, pulseras ideal Día De La Madre`

},
{
    id:2,
    nombre:`Albumes`,
    precio: 200,
    img: "./imagen/tienda/albumes.jpg",
    descripción: `Nada mejor que revivir tus ultimas vacaciones en un libro`,
},
{
    id:3,
    nombre:`Bebé`,
    precio: 150,
    img: "./imagen/tienda/bebe.jpg",
    descripción: `Recordá la llegada de tu bebé`,
},
{
    id:4,
    nombre:`Calendario`,
    precio: 2100,
    img: "./imagen/tienda/calendario.jpg",
    descripción: `Muchos formatos para tener tus fechas cerca`,
},
{
    id:5,
    nombre:`Decoracion`,
    precio: 1500,
    img: "./imagen/tienda/deco.jpg",
    descripción: `Cuadros, láminas, y deco de cumpleaños`,
},
{
    id:6,
    nombre:`Fechas`,
    precio: 100,
    img: "./imagen/tienda/fechas.jpg",
    descripción: `Regalo ideal para dias especiales`,
},
{
    id:7,
    nombre:`Formatos`,
    precio: 500,
    img: "./imagen/tienda/formatos.jpg",
    descripción: `desde poquet hasta gigantografías`,
},
{
    id:8,
    nombre:`Rompecabezas`,
    precio: 800,
    img: "./imagen/tienda/rompecabezas.jpg",
    descripción: `Tus mejores fotos en piezas para unir y divertirse`,
},
{
    id:8,
    nombre:`Souvenir`,
    precio: 50,
    img: "./imagen/tienda/souvenir.jpg",
    descripción: `Que recuerden ese día especial con souvenirs`,
},
]

const carrito = []

productosTodos.forEach (el=>{
    const card =`
    <div class=contenedor>
      <h3 class:"titulo">${el.nombre}</h3>
      <img class="imgcentraltienda" alt= "imagen" src="${el.img}"/>
      <p class:"titulo"> Precio:$${el.precio} </p>
      <p class:"titulo2">${el.descripción}  </p>
      <button class="boton" type= "button"> QUIERO </button>
    </div>
    `
    contenedroProducto.innerHTML += card 
})

const botonEvento = document.getElementsByClassName ("boton")
const arrayDeBotones = Array.from(botonEvento)
console.log(botonEvento)

const mostrarCarrito = () =>{
    carritoNuevo.innerHTML = ""
    carrito.forEach (el=>{
        carritoNuevo.innerHTML += `<h3>${el}</h3>`
    })
}

arrayDeBotones.forEach(boton=> {
    boton.addEventListener ("click", (e) => {
        carrito.push(e.innerText)
    })
})
