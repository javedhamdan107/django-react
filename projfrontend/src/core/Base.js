import React from "react";
import Menu from "./Menu";
const Base = ({
    title = "My title",
    description = "My description",
    className = "bg-dark text-while p-4",
    children
}) => {
    return(
        <div>
            <Menu/>
            <div className ="container-fluid">
                <div className = "jumbotron bg-dark text-white text-center">
                    <h2 className ="display-4">{title} </h2>
                    <p className ="lead">{description}</p>
                </div>
                <div className={className}>{children}
                    
                </div>
            </div>
            <footer className= "footer.footer.bg-dark.mt-auto.py-3">
                <div className = "container-fluid bg-success text-black text-center py-3">
                    <h4>If you got any questions reach me out</h4>
                    <button className="btn btn-warning btn-lg">Contact us</button>
                    <div className = "container">
                        <span className= "text-warning">
                            An amazing Django React Full Stack project
                        </span>
                    </div>

                </div>
            </footer>
        </div>
    );
}
export default Base;