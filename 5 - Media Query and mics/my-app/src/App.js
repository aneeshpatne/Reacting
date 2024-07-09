import './App.css';
import ListRender from './components/listRender';
import ConRen from './components/conditionalRendering';
import Counter from './components/counter';
const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
function App() {
  return (<div>
    {items.map((item,index) => <ListRender items ={item} key={index}/>)}
    <ConRen />
    <Counter />

  </div>
    

  );
}

export default App;
