import { useState } from 'react';
import './App.css';
import { coffee } from './assets/img';
function Coffee({ name }) {
  return (
    <div className='main-box'>
      <h2 className='coffee-name'>Coffee Name: {name}</h2>
      <div className='button-container'>
        <button className='b1'>Buy Now</button>
      </div>
    </div>
  );
}
function App(){
  //const [count,setCount] = useState(1);
  return(<div>
  <Coffee name='Espresso'/>
  <Coffee name='Americano'/>
  <Coffee name='Latte'/>
  </div>


  );
}

export default App;
