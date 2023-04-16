import { useTranslation } from "react-i18next";

export default function NotAuthorized(){  
    const { t } = useTranslation();
     return (
        <>
        <h3>{t("notAuthorized")}</h3>    
        </> 
    )
}