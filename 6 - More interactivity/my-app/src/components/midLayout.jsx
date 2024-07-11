import { useState } from 'react';
import './styles/layout.css';
function MidLayout (){
    const [count, setCount] = useState(1);
    const inct = () => {
        setCount((prev) => (prev + 1));
    };
    const dect = () => {
        setCount((prev) => (prev - 1));
    }
    return(
        <div>
  <div id='grid-container'>
    <div id='grid-item' className={count ===1 ? 'red':'inactive'}></div>
    <div id='grid-item' className={count ===2 ? 'yellow':'inactive'}></div>
    <div id='grid-item' className={count ===3 ? 'green':'inactive'}></div>
  </div>
  <div id='button-container'>
    <button disabled= {count === 1} id='btn' onClick={dect}>Prev</button>
    <button disabled = {count ===3} id='btn' onClick={inct}>Next</button>
  </div>
  {count}
</div>
    );
}
export default MidLayout;