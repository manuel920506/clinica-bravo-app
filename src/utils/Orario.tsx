import { useTranslation } from "react-i18next"; 

export default function Orario(props: orarioProps){  
    const { t } = useTranslation(); 
    return(
        <>
        <h2>{t("business_hours")}</h2> 
                    <div style={props.style} className='img-fluid'>
                        <table className="table table-striped font-weight-bold"> 
                        <tbody>
                            <tr>  
                            <td>{t("monday")}</td>
                            <td>9:00 AM – 8:00 PM</td>
                            </tr>
                            <tr>  
                            <td>{t("tuesday")}</td>
                            <td>9:00 AM – 8:00 PM</td>
                            </tr>
                            <tr>  
                            <td>{t("wednesday")}</td>
                            <td>9:00 AM – 8:00 PM</td>
                            </tr>
                            <tr>  
                            <td>{t("thursday")}</td>
                            <td>9:00 AM – 8:00 PM</td>
                            </tr>
                            <tr>  
                            <td>{t("friday")}</td>
                            <td>9:00 AM – 8:00 PM</td>
                            </tr>
                            <tr>  
                            <td>{t("saturday")}</td>
                            <td>9:00 AM – 8:00 PM</td>
                            </tr>
                            <tr>  
                            <td>{t("sunday")}</td>
                            <td>{t("closed")}</td>
                            </tr>
                        </tbody>
                        </table>
                    </div> 
        </> 
    )
}


export interface orarioProps{
    style: any; 
} 