import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductListContext } from "../../contexts/ProductListContext";
import { GetProductsSearch } from "../../services/GetData";
import "..//..//styles/SearchBar.css";

const SearchBar = () =>{
    const {productListUpdate, productList} = useContext(ProductListContext);
    const navigate = useNavigate();
    let inputRef = useRef();
    let selectRef = useRef();

    const searchClick = () =>{
        
        let condition = inputRef.current.value;
        if(condition === "")
            return;

        let category = selectRef.current.value;
        
        GetProductsSearch(condition, category).then(data => {

            productListUpdate(data);

            navigate("/Search");
        });

    }

    return(
        <div className="searchbar-container">
            <input type="text" ref={inputRef} placeholder="Search for products"/>
            <select ref={selectRef}>
                <option value="Shoes">Shoes</option>
                <option value="Jackets">Jackets</option>
            </select>
            <button onClick={() => searchClick()}>Search</button>
        </div>
    );

}

export default SearchBar;