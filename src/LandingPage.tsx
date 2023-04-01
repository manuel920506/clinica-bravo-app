import photo0 from  './photos/photo0.jpg'; 
import photo1 from  './photos/photo1.jpg';  
import photo3 from  './photos/photo3.jpg'; 
import photo4 from  './photos/photo4.jpg'; 
import photo5 from  './photos/photo5.jpg'; 
import photo6 from  './photos/photo6.jpg';  
import photo9 from  './photos/photo9.jpg'; 
import photo10 from './photos/photo10.jpg';  
import photo12 from './photos/photo12.jpg'; 

import css from './home/home.module.css'; 
import ImageSlider, { slide } from './utils/ImageSlider';
import MapGoogle from './utils/MapGoogle';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next'; 
import cookies from 'js-cookie' 
import { useEffect } from 'react'; 
import Dropdown from 'react-bootstrap/Dropdown'; 

export default function LandingPage(){  
    const containerStyle = {
        width: '960px',
        height: '540px',
        margin: '0 auto'
    };
  
    const slides: slide[] = [
        {src: photo0 },
        {src: photo1 }, 
        {src: photo3 },
        {src: photo4 },
        {src: photo5 },
        {src: photo6 }, 
        {src: photo9 },
        {src: photo10}, 
        {src: photo12},
    ];

    const languages = [
        {
          code: 'es',
          name: 'Español',
          country_code: 'es',
        },
        {
          code: 'en',
          name: 'English',
          country_code: 'us',
        },
        {
          code: 'it',
          name: 'Italiano', 
          country_code: 'it',
        },
    ];

    const GlobeIcon = ({ width = 24, height = 24 }) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          fill="currentColor"
          className="bi bi-globe"
          viewBox="0 0 16 16"
        >
          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
        </svg>
      ); 
      
      const currentLanguageCode = cookies.get('i18next') || 'en';  
      const { t } = useTranslation();
    
      useEffect(() => {
        document.title = t('app_title');
      }, [t])

    const srcMap ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156599.02913862895!2d-95.58195123547503!3d29.853245035547772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640cf3256fcb201%3A0x64accb7afafb55c6!2s8795%20Antoine%20Dr%2C%20Houston%2C%20TX%2077088!5e0!3m2!1sen!2sus!4v1679603170332!5m2!1sen!2sus";
  

    function DropdownDisabled(code: string) 
    {
      return currentLanguageCode === code;
    };

    const onSelect = (eventKey: any, event: any) => {
      event.preventDefault();
      event.persist();
      event.stopPropagation(); 
      i18next.changeLanguage(event.target.id);
      console.log(event.target.id)
    }   
    
    return(
            <> 
               <div className='container'>
                <div className={css.div}> 

                    <h1>{t("welcome")}</h1>   

                    <div style={containerStyle} className='img-fluid'>
                        <ImageSlider slides={slides} />
                    </div> 
                    <br />   

                    <Dropdown  className="d-inline mx-2" onSelect={onSelect}>
                    <Dropdown.Toggle id="dropdown-autoclose-true">
                     < GlobeIcon />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    {languages.map(({ code, name, country_code }) => ( 
                      <Dropdown.Item key={code}  disabled={DropdownDisabled(code)} title={name} id={code}  opacity={currentLanguageCode === code ? 0.5 : 1}>{name}
                        {
                          <span
                          className={`flag-icon flag-icon-${country_code} mx-2`} />
                        } 
                      </Dropdown.Item> 
                        ))} 
                    </Dropdown.Menu>
                  </Dropdown >  
 
                    <br /> 
                    <div style={containerStyle} className='img-fluid'>
                        <MapGoogle path={srcMap} />
                    </div>  
                    <p className="fw-bold">8795 Antoine Drive Houston, TX 77088 USA</p>  
                    <a className={css.buttonTelephone} href="tel:+1-346-342-1652" >(346) 342-1652</a>
                    <br />
                    <br />
                    <h2>{t("business_hours")}</h2> 
                    <div style={containerStyle} className='img-fluid'>
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
                 </div>  
               </div>
            </>
    )
}