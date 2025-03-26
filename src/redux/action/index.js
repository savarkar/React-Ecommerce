// For Add Item to Cart
export const addCart = (product) =>{
    return {
        type:"ADDITEM",
        payload:product
    }
}

// For Delete Item to Cart
export const delCart = (product) =>{
    return {
        type:"DELITEM",
        payload:product
    }
}

// For Delete Item to Cart
export const clearCart = () =>{
    return {
        type:"CLEAR_CART",
    }
}

export const SearchData = () =>{
    return {
        type:"FILTER_CART",
    }
}