import css from './home/home.module.css'; 
import ImageSlider from './utils/ImageSlider';
import MapGoogle from './utils/MapGoogle';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';   
import Orario from './utils/Orario';
import { slides } from './utils/Slides';

export default function LandingPage(){  
const containerStyle = {
    width: '960px',
    height: '540px',
    margin: '0 auto'
}; 
    const { t } = useTranslation();

    useEffect(() => {
    document.title = t('app_title');
    }, [t])

const srcMap ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156599.02913862895!2d-95.58195123547503!3d29.853245035547772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640cf3256fcb201%3A0x64accb7afafb55c6!2s8795%20Antoine%20Dr%2C%20Houston%2C%20TX%2077088!5e0!3m2!1sen!2sus!4v1679603170332!5m2!1sen!2sus";

return(
        <> 
            <div className='container'>
            <div className={css.div}>  

                <h1>{t("welcome")}</h1>    

                <div style={containerStyle} className='img-fluid'>
                    <ImageSlider slides={slides} />
                </div>   
                <br /> 
                <div style={containerStyle} className='img-fluid'>
                    <MapGoogle path={srcMap} />
                </div>  
                <p className="fw-bold">8795 Antoine Drive Houston, TX 77088 USA</p>  
                <a className={css.buttonTelephone} href="tel:+1-346-342-1652" >(346) 342-1652</a>
                <br />
                <br /> 
                    <Orario style={containerStyle} />
                </div>  
            </div>
        </>
    )
}