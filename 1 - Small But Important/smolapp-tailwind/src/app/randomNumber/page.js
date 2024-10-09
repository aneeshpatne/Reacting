"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
export default function RandomNumber(){
    const [number, setNumber] = useState(0);
    const rNumber = () =>{
        setNumber(Math.floor(Math.random()*100))

    }
    return(<div>
        {number}
        <Button onClick={()=>rNumber()}>Hu</Button>
    </div>);
}