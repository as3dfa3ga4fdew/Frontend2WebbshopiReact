import "..//..//styles/Load.css";
import loadimng from "..//..//images/load.png";
const Load = () =>{

    return(
        <div className="load-container">
            <img className="rotate" src={loadimng} alt="" />
            <b>Loading...</b>
        </div>
    );
}

export default Load;