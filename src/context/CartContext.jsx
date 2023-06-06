import { createContext, useEffect, useState } from "react";


export const CartContext = createContext ();

 //Si hay informacion guardada en carrito se muestra cuando se actualice la pagina, de lo contrario arranca como un array vacio
 const cartInicial = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({children}) => {
    const [cart, setCart]=useState(cartInicial)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            setCart(prev =>[...prev, {...item, quantity}])
        } else {
            alert("El producto ya fue agregado")
        }
    }
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some (prod => prod.id === itemId)
    }

    const totalQuantity = ()=>{
        const totalCantidad = cart.reduce((total, item) => total + item.quantity, 0);
       return totalCantidad
    }

    const total = ()=>{
        const totalPrecio= cart.reduce((total, item) => total + (item.precio * item.quantity), 0);
        return totalPrecio;
    }
    //guardamos los datos en el localStorage cuando se monte y actualice el carrito
    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))
    },[cart])
 

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, totalQuantity, total}}>
        { children }
        </CartContext.Provider>
    )
}