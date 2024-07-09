import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const f1 = ()=> {
        setCount((prev)=> prev+1)

    }
    return(<div>
        {count % 2 !==0 && <p1>Odd Nos</p1>} <br/>
        <button onClick={f1}>Click Me</button>
        {count}
    </div>);
}

export default Counter;