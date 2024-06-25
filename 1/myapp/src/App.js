import './App.css';
import fetch1 from './components/fetch1';

function App(){
  function helper(){
    console.log('Helper') ; 
  }
  return (
    <div><h1>Back to Basics</h1>
    <button onClick={helper}>Click Here</button>\\
    <button onClick={fetch1}> Fetcher</button>
    </div>
  )
}
export default App;
