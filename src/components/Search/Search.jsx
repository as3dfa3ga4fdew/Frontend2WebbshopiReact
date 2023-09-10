import SearchBar from "./SearchBar";
import "..//..//styles/Search.css";
import ProductList from "../Product/ProductList";

const Search = () =>{
    return(
        <div className="search-container">
            <SearchBar/>
            <ProductList  test="search"/>
        </div>
    );
}

export default Search;