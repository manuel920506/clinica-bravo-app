import { NavLink } from "react-router-dom";

export default function Menu(){
    const activeClass = "active";
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" activeClassName={activeClass}  to="/">Inicio</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={activeClass} to="/blog">Blog</NavLink>
                        </li> 
                    </ul>
                </div>
            </div>
        </nav> 
    )
}