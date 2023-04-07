import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import DropdownLenguages from "./DropdownLenguages";
import Authorized from "../auth/Authorized";

export default function Menu(){
    const activeClass = "active";
    const { t } = useTranslation();
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" activeClassName={activeClass}  to="/">{t("start")}</NavLink>
                
                <Authorized  
                    role='admin'
                    authorized={
                        <>
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName={activeClass} to="/blog">Blog</NavLink>
                                    </li> 
                                </ul>
                            </div>
                        </>
                    }
                />
                
                <DropdownLenguages />
            </div>
        </nav> 
    )
}