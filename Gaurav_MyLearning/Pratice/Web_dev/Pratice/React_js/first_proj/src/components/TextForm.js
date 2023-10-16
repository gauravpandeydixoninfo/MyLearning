import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("upper case clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        console.log("upper case clicked" + text);
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleOnChange= (event)=>{
        console.log("on Change");
        setText(event.target.value);
    }

    const handleClearClick = ()=>{
        setText("");
    }
    
    
    const [text, setText] = useState('Enter text here');
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8" />
            </div>

            <button type="submit" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to upperCase</button>
            <button type="submit" className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowerCase</button>
            <button type="submit" className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>

        </div>
        <div className='container'>
            <h1>Your text summary</h1>
            <p>no of character={text.length} no of words={text.split(" ").length}</p>
            <p>{0.008 * text.split("").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>

        </div>
        </>
        
    )
}