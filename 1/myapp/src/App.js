import './App.css';
import fetch1 from './components/fetch1';
import {useState} from 'react'; 
function App(){
  const [advice, setAdvice] = useState("");
  function helper(){
    console.log('Helper'); 
  }
  return (
    <div><h1>Back to Basics</h1>
    <button onClick={helper}>Click Here</button>\\
    <button onClick={() =>fetch1(setAdvice)}> Fetcher</button>
    {advice}
    </div>
  )
}
export default App;
