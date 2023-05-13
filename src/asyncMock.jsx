

const products =[
    {
        id: "1",
        name: "Sillon Calma",
        precio: "60.000",
        category:"sillones",
        img:"https://picsum.photos/200?random=1",
        stock: 10,
        descrip: "Sillon de tres cuerpos con funda de tussor a eleccion",
        scrLink: "",
    },
    
    {
        id: "2",
        name: "Lampara tai",
        precio: "15.000",
        category:"iluminacion",
        img:"https://picsum.photos/200?random=2",
        stock: 10,
        descrip: "Lampara de pie con soporte de metal",
        scrLink: "",
    },
    {
        id: "3",
        name: "Mesa nube",
        precio: "56.000",
        category:"muebles",
        img:"https://picsum.photos/200?random=3",
        stock: 10,
        descrip: "Mesa escritorio de petirini enchapado",
        scrLink: "",
    },
    {
        id: "4",
        name: "Sillon Family",
        precio: "150.000",
        category:"sillones",
        img:"https://picsum.photos/200?random=4",
        stock: 10,
        descrip: "Sillon en L con funda de tussor a eleccion.",
        scrLink: "",
    },
    {
        id: "5",
        name: "Mesa Big Family",
        precio: "180.000",
        category:"muebles",
        img:"https://picsum.photos/200?random=5",
        stock: 10,
        descrip: "Mesa de petiribi macizo de 2x1.",
        scrLink: "",
    },
    {
        id: "6",
        name: "Velador Profundo",
        precio: "9.000",
        category:"iluminacion",
        img:"https://picsum.photos/200?random=6",
        stock: 10,
        descrip: "Velador de pared de hierro funido.",
        scrLink: "",
    }

]

export const getProducts =() =>{
    return new Promise ((resolve)=>{
        setTimeout(()=> {
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise ((resolve)=> {
        setTimeout (()=> {
            resolve (products.find(prod => prod.id===id))
        },500)
    })

}

