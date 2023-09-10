import { useContext, useEffect, useState } from "react";
import { ProductListContext } from "../../contexts/ProductListContext";
import { GetProducts } from "../../services/GetData";
import "../../styles/Home.css";
import ProductList from "../Product/ProductList";
import SearchBar from "../Search/SearchBar";

const Home = () => {

    const {productListUpdate, productList} = useContext(ProductListContext);
    let [products, setProducts] = useState({});


    useEffect(() => {
        
        (async () =>{
            let data = await GetProducts(6);

            productListUpdate(data);
            setProducts(data);

        })();
    },[]);

    return(
       <div className="home-container">
            <SearchBar />
            <ProductList products={products}/>
       </div>
    );
}

export default Home;