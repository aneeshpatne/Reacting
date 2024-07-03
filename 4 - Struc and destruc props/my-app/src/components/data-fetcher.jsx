import { useEffect, useState } from "react";

function Ftc() {
    const [data,setData] = useState(null);
    useEffect(()=>{
        async function fetchData(){
            const data= await fetch('http://date.jsontest.com/');
            const result = await data.json();
            setData(result);
        }
        fetchData()
        const interval = setInterval(fetchData,100);
        return () => clearInterval(interval);
    },[])
    return (<div>{data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}</div>);
}
export default Ftc;