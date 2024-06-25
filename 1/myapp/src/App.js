
import './App.css';

function App(){
  function helper(){
    console.log('Helper') ; 
  }
  return (
    <div><h1>Back to Basics</h1>
    <button onClick={helper}>Click Here</button>
    </div>
  )
}
export default App;
