
import photo0 from  './photos/photo0.jpg'; 
import photo1 from  './photos/photo1.jpg'; 
import photo2 from  './photos/photo2.jpg'; 
import photo3 from  './photos/photo3.jpg'; 
import photo4 from  './photos/photo4.jpg'; 
import photo5 from  './photos/photo5.jpg'; 
import photo6 from  './photos/photo6.jpg'; 
import photo7 from  './photos/photo7.jpg'; 
import photo8 from  './photos/photo8.jpg'; 
import photo9 from  './photos/photo9.jpg'; 
import photo10 from './photos/photo10.jpg'; 
import photo11 from './photos/photo11.jpg'; 
import photo12 from './photos/photo12.jpg'; 

import css from './home/home.module.css'; 
import ImageSlider, { slide } from './utils/ImageSlider';
import MapGoogle from './utils/MapGoogle';
export default function LandingPage(){  
    const containerStyle = {
        width: '960px',
        height: '540px',
        margin: '0 auto'
    };
  
    const slides: slide[] = [
        {src: photo0 },
        {src: photo1 },
        {src: photo2 },
        {src: photo3 },
        {src: photo4 },
        {src: photo5 },
        {src: photo6 },
        {src: photo7 },
        {src: photo8 },
        {src: photo9 },
        {src: photo10},
        {src: photo11},
        {src: photo12},
    ];

    const srcMap ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156599.02913862895!2d-95.58195123547503!3d29.853245035547772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640cf3256fcb201%3A0x64accb7afafb55c6!2s8795%20Antoine%20Dr%2C%20Houston%2C%20TX%2077088!5e0!3m2!1sen!2sus!4v1679603170332!5m2!1sen!2sus";
 
    return(
            <> 
               <div className='container'>
                <div className={css.div}>
                    <h1>Clinica Medica Bravo ¡Tu Clínica hispana en Houston!</h1> 
                    <div style={containerStyle} className='img-fluid'>
                        <ImageSlider slides={slides} />
                    </div> 
                    <br /> 
                    <br /> 
                    <div style={containerStyle} className='img-fluid'>
                        <MapGoogle path={srcMap} />
                    </div> 
 
                    {/* <iframe   className='img-fluid rounded' /> */}

                    <br />8795 Antoine Drive Houston, TX 77088 USA 
                    <p></p>
                    <a className={css.buttonTelephone} href="tel:+1-346-342-1652" >(346) 342-1652</a>
                    <p></p>
                    <h2>Business Hours</h2> 
                    <p>Mon:	9:00 AM – 8:00 PM 
                    <br />Tue:	9:00 AM – 8:00 PM 
                    <br />Wed:	9:00 AM – 8:00 PM 
                    <br />Thu:	9:00 AM – 8:00 PM 
                    <br />Fri:	9:00 AM – 8:00 PM 
                    <br />Sat:	9:00 AM – 8:00 PM 
                    <br />Sun: Closed</p>
                 </div>  
               </div>
            </>
    )
}