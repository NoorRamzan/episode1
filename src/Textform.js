 import React, {useState} from  'react'

 export default function Textform(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was click")
     let   newText = text.toUpperCase();
        setText(newText)
        
    }

    const  handleClick =()=>{
      console.log("Lowercase was click")
   let   newText = text.toLowerCase();
      setText(newText)
      
  }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  //  setText=("new text");correct to change the text

  return (
    <>
    <div className='container'>
    <h1>{props.heading} </h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
  </div>
  <button type="button" class="btn btn-warning mx-1 " onClick={handleUpClick}>convert to Uppercase</button>
  <button type="button" class="btn btn-warning mx-1 " onClick={handleUpClick}>convert to lowercase</button>
  </div>
  <div className='container my-3'>
  <h2>Your text summery</h2>
  <p>
    words {text.split(" ").length} and {text.length} character
  </p>
  <p>{0.008 * text.split(" ").length } Minutes read</p>

  <p>Preview</p>
  <p>{text}</p>
  </div>

  </>
  )
}
