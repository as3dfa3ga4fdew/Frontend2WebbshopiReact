import { createContext, useState } from "react"

const ProductListContext = createContext();

const ProductListProvider = (props) =>{

    const productListUpdate = (val) =>{
        setProductList(val);
    }

    const [productList, setProductList] = useState();

    return(
        <ProductListContext.Provider value={{productList, productListUpdate}}>
            {props.children}
        </ProductListContext.Provider>
    );
}

export {ProductListProvider, ProductListContext};