export default function MapGoogle(props: mapGoogleProps){ 
    const mapStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    };
    const borderMapStyle = { 
        height: '100%',
        position: 'relative' as 'relative'  
    };
    return(
        <div style={borderMapStyle}>
             <iframe src={props.path}  style={mapStyle} /> 
        </div>
    )
}

export interface mapGoogleProps{
    path: string; 
} 