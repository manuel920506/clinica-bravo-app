import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import DropdownLenguages from "./DropdownLenguages";
import Authorized from "../auth/Authorized";
import Button from "./Button";
import AuthenticationContext from "../auth/AuthenticationContext";
import { useContext } from "react";
import { logout } from "../auth/handleJWT";

export default function Menu(){
    const activeClass = "active";
    const { t } = useTranslation();
    const {update, claims} = useContext(AuthenticationContext);

    function getUserName(): string {
        return claims.filter(x => x.name === "email")[0]?.value;
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">

                <div className="d-flex flex-row">
                    <NavLink className="navbar-brand" activeClassName={activeClass}  to="/">{t("start")}</NavLink>
                    
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName={activeClass} to="/blog">Blog</NavLink>
                            </li> 
                        </ul>
                    </div>
                </div> 

                <div className="d-flex">
                    <Authorized   
                        authorized={
                            <> 
                                {/* <span className="nav-link">Hola, {getUserName()}</span> */}
                                <Button  
                                    onClick={() => {
                                            logout();
                                            update([]);
                                    }}
                                    className="btn btn-primary">
                                    Log out
                                </Button>
                                </>
                        }
                        notAuthorized={
                                <> 
                                    <NavLink to="/Login" className="btn btn-primary">Admin</NavLink> 
                                </>
                        }
                    />
                    
                    <DropdownLenguages /> 
                </div> 
            </div>
        </nav> 
    )
}