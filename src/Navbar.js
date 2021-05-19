import React, {useState} from "react";
import './App.css';
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar(){
    const [showLinks, setShowLinks] = useState(false);
    return(
        <div className="title">
        <div className="Navbar">
            <div className="leftside">
            <a className="dif" href="#" ><i class="icon female"></i></a>

                <div className="links" id={showLinks ? "hidden" : ""}>
                    <a href="#">Contact Me</a> 
                  
                    <a href="#">Skills</a>
                    <a href="#">Project</a>
                  




                </div>
               
            </div>
            <div className="rightside">
            <button onClick={()=> setShowLinks(!showLinks) }>
                    {""}
                    <ReorderIcon />
                </button>


            </div>
           
        </div>
       
        </div>
    )
}


export default Navbar;