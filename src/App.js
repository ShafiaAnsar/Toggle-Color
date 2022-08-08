import Square from "./Square";
import Input from "./Input";
import {useState} from 'react'
function App() {
  const[colorValue,setColorValue]=useState('')
  const[hexValue,setHexValue]=useState('')
  const[isDakText,setIsDarkText]=useState('')
  return (
    <div className="App">
      <Square 
      colorValue={colorValue}    
      hexValue={hexValue}
      isDakText={isDakText}
      />
      <Input 
      colorValue={colorValue}
      setColorValue={setColorValue}
    setHexValue={setHexValue}
    isDakText={isDakText}
    setIsDarkText={setIsDarkText}
      />
      
    </div>
  );
}

export default App;
