import React,{useState} from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle]= useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    // const[btntext, setBtnText] = useState('Enable Dark Mode')

    // const toggleStyle = () =>{
    //     if(myStyle.color === 'black') {
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color:'black',
    //     backgroundColor:'white'
    //         })
    //         setBtnText('Enable Light Mode')
    //     }
    //} 
    return (
                <div className="container my-2" style={{backgroundColor: props.mode==='dark'?'#042743':'white', padding:20}}> 
                <h1 style={{color: props.mode==='dark'?'white':'black'}}>About Us</h1>
                <div className="accordion" id="accordionExample" style={{backgroundColor: props.mode==='dark'?'grey':'white'}}>
               <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'grey':'white'}}>
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black', fontWeight: 'bold',border:'3px solid', borderColor:props.mode==='dark'?'white':'black',fontSize: '30px'}} aria-expanded="true" aria-controls="collapseOne">
                About TextUtils
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{color: props.mode==='dark'?'white':'black',border:'3px solid', borderColor:props.mode==='dark'?'white':'black'}} >
            <strong>TextUtiles provides you the facility to manipulate your text according to your requirements.
            It is free to use.</strong>
            </div>
            </div>
        </div>
        <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'grey':'white'}}>
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black', fontWeight: 'bold',border:'3px solid', borderColor:props.mode==='dark'?'white':'black',fontSize: '30px'}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                TextUtils Sevices
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{color: props.mode==='dark'?'white':'black',border:'3px solid', borderColor:props.mode==='dark'?'white':'black'}} >
                <strong>You can avail the various facilities here such as converting your text from lower case to upper case, upper case to lower case and can copy your manipulated text.</strong> 
            </div>
            </div>
        </div>
        </div >
        {/* <div className="container my-2">
        <button className="btn btn-primary" onClick={toggleStyle}>{btntext}</button>
        </div>  */}
        </div>
    )
}
