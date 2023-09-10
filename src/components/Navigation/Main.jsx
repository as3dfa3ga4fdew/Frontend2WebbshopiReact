import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Order from "../Order/Order";
import Product from "../Product/Product";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Search from "../Search/Search";

const Main = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Search" element={<Search/>}/>
            <Route path="/Product/:id" element={<Product/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Profile" element={<Profile/>}/>
            <Route path="/Order" element={<Order/>}/>
        </Routes>
    );
}

export default Main;