import {useEffect, useState} from 'react' ;
function App(){
  const [counter, counterSetter] = useState(0) ; 
  function hello(){
    counterSetter(p => p + 1); 
  }
  useEffect(function(){
    hello();
  }, []);
return(<div>Counter<br />
  <button onClick={hello}>Click</button><br />
  <strong>{counter}</strong>
</div>);

}
export default App;