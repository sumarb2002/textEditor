import React from 'react'
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
// import { faVoicemail } from '@fortawesome/free-solid-svg-icons';
// import { faHouse } from '@fortawesome/free-solid-svg-icons'
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import { faCat } from '@awesome.me/kit-KIT_CODE/icons/sharp/solid'
// import { faDog } from '@awesome.me/kit-KIT_CODE/icons/sharp-duotone/solid'

// 

export default function About(props) {
    // const [btnText,setBtnText] = useState("Enable Dark Mode");
    // const [compstyle,setCompstyle] = useState({
    //     color:'black',
    //     backgroundColor:'white',
    //     // border:'1px solid black',
    // });

    let compstyle = {
         color : props.mode==='light'?'rgb(36 74 104)':'white',
         backgroundColor:props.mode==='light'?'white':'rgb(36 74 104)',
        //  border:'2px solid',
        //  borderColor:props.mode==='light'?'#123e75':'white'
    };
    // function setMode()
    // {
    //     if(compstyle.color === 'white')
    //     {
    // setCompstyle(
    //         {
    //              color:'black',
    //         backgroundColor:'white',
    //         // border:'1px solid black',
    //         }
    //     )
    //     setBtnText("Enable Dark Mode");
    //     }
    //     else{
    //         setCompstyle(
    //             {
    //                  color:'white',
    //             backgroundColor:'black',
    //             // border:'1px solid white',
    //             }
    //         )
    //         setBtnText("Enable Light Mode");
    //         }
    //     }
  return (
    <>
{/* <FontAwesomeIcon icon={faHouse} />
<FontAwesomeIcon icon={faWhatsapp} /> */}

    <div className="container">
    <h1 className="m-4" style={{color : props.mode==='light'?'rgb(36 74 104)':'white',}}>About Us</h1>
      <div className="accordion m-2 p-2" id="accordionExample">
  <div className="accordion-item " style={compstyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={compstyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong> Analyse Your Text </strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <strong>Text Editor</strong>  gives you a way to analyse your text quickly and efficiently.
       Be it a word count,charactor count or removing extra spaces.. Place the text in the editor you want to edit and analyse the text 
       and copy it. It is that much easy..
      </div>
    </div>
  </div>
  <div className="accordion-item" style={compstyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={compstyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong> Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <strong>Text Editor</strong>  is a free character counter tool that provides instant character count and word count statistics for a given text.Thus it is suitable for writing text with word/character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={compstyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={compstyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong> Contact Detail</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <i>Contact Us on:   </i><br/><br/>
        {/* <FontAwesomeIcon icon={faLinkedin} size="2x"/> */}
        <FontAwesomeIcon icon={faEnvelopeSquare} style={{fontSize:'25px'}}/> &nbsp; &nbsp;sumapoojari2002@gmail.com <br/><br/>
        <FontAwesomeIcon icon={faLinkedin} style={{fontSize:'25px'}}/> &nbsp; &nbsp;https://www.linkedin.com/in/suma-rb <br/><br/>
        <FontAwesomeIcon icon={faGithub}   style={{fontSize:'25px'}}/> &nbsp; &nbsp;https://github.com/sumarb2002 <br/><br/>


      </div>
    </div>
  </div>
  {/* <button className="btn btn-primary m-2" onClick={setMode}>
      {btnText}
  </button> */}
</div>
    </div>
    </>
  )
}
