import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("upper case clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to Upper case", "success");
    }
    const handleLoClick = ()=>{
        console.log("upper case clicked" + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lower case", "success");
    }
    const handleOnChange= (event)=>{
        console.log("on Change");
        setText(event.target.value);
    }

    const handleClearClick = ()=>{
        setText("");
        props.showAlert("clear all text", "success");
    }
    
    
    const [text, setText] = useState('Enter text here');
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} />
            </div>

            <button type="submit" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to upperCase</button>
            <button type="submit" className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowerCase</button>
            <button type="submit" className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>

        </div>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>no of character={text.length} no of words={text.split(" ").length}</p>
            <p>{0.008 * text.split("").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter some text in textBox"}</p>

        </div>
        </>
        
    )
}