import React from 'react'
import ReactHowler from 'react-howler';

function Fart() {
    const [play, setPlay] = React.useState(false);
    const audioPlay =() =>{
        setPlay(true)
        // history.pushState(null,null,location.href);
        //     window.onpopstate = function () {
        //         history.go(1);
        //     }
       
    }
    
   
        
    return (
        <div>
            <ReactHowler src='https://cdn.videvo.net/videvo_files/audio/premium/audio0115/watermarked/HumanFart%20CTE03_17.7_preview.mp3' playing={play} />
            <button className="btn btn-primary my-3" onClick={audioPlay}>
                PRESS ME
            </button>
        </div>
    )
}

export default Fart