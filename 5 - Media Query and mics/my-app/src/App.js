import './App.css';
import ListRender from './components/listRender';
const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
function App() {
  return (<div>
    {items.map((item,index) => <ListRender items ={item} key={index}/>)}
  </div>
    

  );
}

export default App;
