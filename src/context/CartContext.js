import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [productCartList, setProductCartList] = useState([]);


    const isInCart = (id) =>{
        const elemIndex = productCartList.findIndex(product => product.id === id);
        if (elemIndex >= 0) {
            return {exists:true, index:elemIndex}
        } else {
            return {exists:false, index:undefined}
        }
    }

    const addProduct = (product)=>{
        const inCartProd = isInCart(product.id);
        if (inCartProd.exists){
            const productListCopy = [...productCartList];
            productListCopy[inCartProd.index].quantity = productListCopy[inCartProd.index].quantity + product.quantity;
            productListCopy[inCartProd.index].totalParcial = productListCopy[inCartProd.index].totalParcial + product.totalParcial;
            setProductCartList(productListCopy)
        } else {
        const newList = [...productCartList,product];
        setProductCartList(newList)
        }
    }

    const removeItem = (idProduct) => {
        const copyArray = [...productCartList];
        const newArray = copyArray.filter(elem => elem.id !== idProduct);
        setProductCartList(newArray)
    }

    const clearCart = () => {
        setProductCartList([])
    }

    const getCantProducts = () => {
        const cantProducts = productCartList.reduce((acc,item)=> acc + item.quantity,0)
        return cantProducts

    }


    const getTotalCompra = () => {
        const totalCompra = productCartList.reduce((acc,item)=> acc + item.price * item.quantity,0)
        return totalCompra
    }

    return(
        <CartContext.Provider value={{addProduct,productCartList, clearCart, removeItem, isInCart, getCantProducts, getTotalCompra}}>
            
            {children}
        </CartContext.Provider>
    )
}

//