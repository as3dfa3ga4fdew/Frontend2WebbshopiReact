import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { GetProductById } from "../../services/GetData";
import ProductDisplay from "./ProductDisplay";


const Product = () =>{
    const {state} = useLocation();
    const [product, setProduct] = useState(state);

    const params = useParams();
    const productId = parseInt(params.id);

    const [errorMessage, setErrorMessage] = useState();

    //Get product info from api
    useEffect(() =>{
        if(product === null)
        {
                 
            if(Number.isInteger(productId) === false)
            {
                setErrorMessage(<p>Something went wrong...</p>);
                return;
            }
    
            GetProductById(productId).then(data => {
                //Error handling
                if(data === undefined)    
                {
                    setErrorMessage(<p>Something went wrong...</p>);
                    return;
                }
    
                if(data.hasOwnProperty("error"))
                {
                    setErrorMessage(<p>Something went wrong...</p>);
                    return;
                }
    
                if(data.products.length === 0)
                {
                    setErrorMessage(<p>Something went wrong...</p>);
                    return;
                }
    
                setProduct(data.products[0]);
            })
        }
    },[]);

    return(
        <div className="product-container">
            {product === null ? errorMessage:<ProductDisplay product={product}/>}
        </div>
    );
}

export default Product;