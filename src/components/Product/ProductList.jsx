import { useContext } from "react";
import { ProductListContext } from "../../contexts/ProductListContext";
import ProductItem from "./ProductItem";
import "..//..//styles/ProductList.css";
const ProductList = (props) =>{

    console.log(props.products);
    //You cant update a context in the same component as its renders
    const {productListUpdate, productList} = useContext(ProductListContext);

    //Error handling
    if(productList === undefined)    
    {
        return(
            <p>Please try again later.</p>
        );
    }

    if(productList.hasOwnProperty("error"))
    {
        return (
            <p>Please try again later.</p>
        );
    }

    if(productList.products.length === 0)
    {
        return(
            <p>No products found, check the spelling or try another category.</p>
        );
    }
    
    //Map
    let mappedProductList = productList.products.map(product => {
        return <ProductItem product={product}/>;
    });

    return(
        <div className="productlist-container">
            {mappedProductList}
        </div>
    );
}

export default ProductList;