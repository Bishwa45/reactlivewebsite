import React, {useState} from 'react'

export default function TextForms(props) {

    const upClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "Sucess");
    }
    const downClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "Sucess");
    }

    const clearClick=()=>{
      let newText = '';
      setText(newText);
      props.showAlert("text is Cleared", "Sucess");
  }

  const copyText =()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied", "Sucess");
  
  }

    const handleOnchage=(event)=>{
        setText(event.target.value); //we can change the text in text area 

    }

    const[text, setText] = useState();

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" onChange={handleOnchage} style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} value={text} id="myBox" rows="8"></textarea>
</div>
<div className="btn btn-primary mx-2"  onClick={upClick}>Convert to UpperCase</div>
<div className="btn btn-primary mx-2"  onClick={downClick}>Convert to LowerCase</div>
<div className="btn btn-primary mx-2"  onClick={clearClick}>Clear text</div>
<div className="btn btn-primary mx-2"  onClick={copyText}>Copy Text</div>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Preview</h2>
      <p>{text}</p>

    
    </div>
    </>
  )
  
}
