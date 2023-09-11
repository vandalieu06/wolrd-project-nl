import { useState } from "react";

export function TextArea () {
  const [text, setText] = useState('');
  const [clicked, setClicked] = useState(false);

  const handleChangeTextArea = (e) => setText(e.target.value);
  const handleClickClicked = () => setClicked(!clicked)

  function generateParagraphs () {
    let paragraphs = text.split('\n').map( (paragraph, index) => {
      return <p key={index}>{paragraph}</p>
    });
    
    return paragraphs
  }

  return(
    <div className="form-group">
      <label>Text</label>
      <textarea 
        onChange={handleChangeTextArea}
        value={text}
        type="text" 
        name="text-area-first" 
        id="text-area-first" 
        className="form-control" 
        placeholder="text"
        >
      </textarea>
      <button id="store" onClick={handleClickClicked}>
        {clicked ? 'Ocultar' : 'Mostrar'}
      </button>
      <div className="novel-paragraphs">
        {clicked && generateParagraphs()}
      </div>
    </div>
    )
}