import './App.css';
import ListRender from './components/listRender';
import ConRen from './components/conditionalRendering';
import Counter from './components/counter';
import { RedBox, BlueBox } from './components/box2';
import { useState } from 'react';
const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
function App() {
  const [state, setState] = useState(true);
  const f1 = () => {
    setState((state)=>!state);
  }
  return (<div>
    {items.map((item,index) => <ListRender items ={item} key={index}/>)}
    <ConRen />
    <Counter />
    <button onClick={f1}>state</button>
    {state ? <RedBox width ={500} height ={600}/> : <BlueBox />}

  </div>
    

  );
}

export default App;
