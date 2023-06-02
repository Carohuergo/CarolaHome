import imagen1 from "./images/sillonCalmaPic.webp"
import imagen2 from "./images/lamparaTai.webp"
import imagen3 from "./images/escritorioNube.webp"
import imagen4 from "./images/sillonHilo.webp";
import imagen5 from "./images/mesaBig.webp"
import imagen6 from "./images/veladorPared.webp"

const products =[
    {
        id: "1",
        name: "Sillon Calma",
        precio: 60000,
        category:"sillones",
        img:imagen1,
        stock: 10,
        descrip: "Sillon de tres cuerpos con funda de tussor a eleccion",
        scrLink: "",
    },
    
    {
        id: "2",
        name: "Lampara tai",
        precio: 15000,
        category:"iluminacion",
        img:imagen2,
        stock: 10,
        descrip: "Lampara de pie con soporte de metal",
        scrLink: "",
    },
    {
        id: "3",
        name: "Escritorio nube",
        precio: 56000,
        category:"muebles",
        img: imagen3,
        stock: 10,
        descrip: "Mesa escritorio de petirini enchapado",
        scrLink: "",
    },
    {
        id: "4",
        name: "Sillon Hilo Kraft",
        precio: 150000,
        category:"sillones",
        img: imagen4,
        stock: 10,
        descrip: "Sillon individual petiribi tejido papel kraft",
        scrLink: "",
    },
    {
        id: "5",
        name: "Mesa Big Family",
        precio: 180000,
        category:"muebles",
        img: imagen5,
        stock: 10,
        descrip: "Mesa de petiribi macizo de 2x1.",
        scrLink: "",
    },
    {
        id: "6",
        name: "Velador Caliz",
        precio: 9000,
        category:"iluminacion",
        img: imagen6,
        stock: 10,
        descrip: "Aplique con brazo y pantalla de mimbre",
        scrLink: "",
    }

]

export const getProducts =() =>{
    return new Promise ((resolve)=>{
        setTimeout(()=> {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise ((resolve)=> {
        setTimeout (()=> {
            resolve (products.find(prod => prod.id===id))
        },500)
    })

}

