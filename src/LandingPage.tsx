
import photo_home from './photos/index.jpg'; 
import css from './home/home.module.css'; 
export default function LandingPage(){ 
    return(
            <> 
               <div className='container'>
                <div className={css.div}>
                <h1>Clinica Medica Bravo ¡Tu Clínica hispana en Houston!</h1> 
                        <img src={photo_home} alt='Clinica Medica Bravo' className='img-fluid rounded'></img>
                        <br /> 
                        <br /> 
 
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156599.02913862895!2d-95.58195123547503!3d29.853245035547772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640cf3256fcb201%3A0x64accb7afafb55c6!2s8795%20Antoine%20Dr%2C%20Houston%2C%20TX%2077088!5e0!3m2!1sen!2sus!4v1679603170332!5m2!1sen!2sus"   className='img-fluid rounded' />
 
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