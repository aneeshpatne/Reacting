import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { coffee } from './assets/img';

function App() {
  const [count, setCount] = useState(0);
  //count = 1;
  const f1 = () =>{
    setCount((d) => d+1)
  }
  return (
    <div>
      

      <h2>Hello</h2>
    <button onClick={f1}>Click Me</button>
    {count % 2 ===0 && <img src ={coffee}/>}</div>

  );
}

export default App;
