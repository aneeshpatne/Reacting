import { useEffect, useState } from "react";

function Logger(props){
    const [data, setData] = useState();
    useEffect(()=>{
        console.log('its Working!')
    },[props.count])

}

export default Logger;