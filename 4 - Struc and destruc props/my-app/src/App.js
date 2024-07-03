import logo from './logo.svg';
import './App.css';
import HeaderComponenet from './components/header';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const f1 = () =>{
    setCount(count +1);
  }
  return (
    <div>
    <HeaderComponenet c1 = {count}/>
    <button onClick={f1}>Click Me</button>
    </div>
  );
}

export default App;
