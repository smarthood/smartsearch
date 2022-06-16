import { useState } from 'react';
import './App.css';

function App() {
  const [input,setInput] = useState("")
  const [key,setKey]=useState("flutter")
  const handleKey=(k)=>{
    setKey(k.target.value)
  }
  const handleInput =(e)=>{
    setInput(e.target.value)
  }
  const search =()=>{
    if(input===""){
      alert("Invalid input")
    }
    else{
      window.open('http://google.com/search?q=how to '+input+' in '+key)
    }
  }
  return (
    <div className="App">
     <div className="search_bar">
       <input type="text" placeholder='search here...' onChange={handleInput} onKeyPress={(e) => e.key === 'Enter' && search()}/>
       <select onChange={handleKey}>
         <option value="flutter">Flutter</option>
         <option value="react js"> React js</option>
         <option value="react native">React Native</option>
         <option value="firebase">Firebase</option>
         <option value="html">HTML</option>
         <option value="css">CSS</option>
         <option value="javascript">JS</option>
       </select><br />
       <span><button onClick={search}>search</button></span>
     </div>
     <div className="logo">
       <img src={"./images/"+key+".png"} alt={key} />
     </div>
     <div className="design">
       <div className="tri1"></div>
       <div className="tri2"></div>
     </div>
    </div>
  );
}

export default App;
