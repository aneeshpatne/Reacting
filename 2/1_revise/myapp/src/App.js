import { useState } from "react";

function App(){
  const [value, valueSetter] = useState('')
  async function helper(){
    try{
    const res = await fetch('http://127.0.0.1:5000');
    const resp = await res.json();
    console.log(resp) ;
    valueSetter(resp) ;
    }
    catch(error){
      console.error(error);
    }
  }
return (<div>
  
  <h1>Hello</h1>
  <button onClick={helper}>Click Here {value}</button>
  </div>);
}

export default App ; 