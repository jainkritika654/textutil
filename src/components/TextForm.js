import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpclick = () => {
        //console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoclick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        console.log("Onchange");
        setText(event.target.value)
    }
    const handleClear = () => {
        setText('')
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} rows="7"></textarea>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick= {handleUpclick}> Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick= {handleLoclick}> Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick= {handleClear}> Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick= {handleCopy}> Copy Text</button>
        </div>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h3>Your text Summary</h3>
        <p>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").filter((element)=> {return element.length!==0}).length} Minutes read.</p>
        <h2>Preview your text</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
    )
}
