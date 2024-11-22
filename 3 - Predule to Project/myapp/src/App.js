import { useState } from 'react';
import './App.css';
import { coffee, coffee1, coffee2 } from './assets/img';
function Coffee({ name,imgsrc }) {
  return (
    <div className='main-box'>
      <h2 className='coffee-name'>Coffee Name: {name}</h2>
      <div className='button-container'>
        <button className='b1'>Buy Now</button>
      </div>
      <div className='img-container'>
        <img src={imgsrc}></img>
      </div>
    </div>
  );
}
function App(){
  //const [count,setCount] = useState(1);
  return(<div>
  <Coffee name='Espresso' imgsrc={coffee}/>
  <Coffee name='Americano' imgsrc={coffee1}/>
  <Coffee name='Latte' imgsrc={coffee2}/>
  </div>


  );
}

export default App;
