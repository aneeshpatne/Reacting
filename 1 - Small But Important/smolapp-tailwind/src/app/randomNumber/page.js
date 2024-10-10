"use client"

import { useState, useEffect } from 'react';

import { Button } from "@/components/ui/button";
export default function RandomNumber(){
    const [number, setNumber] = useState(Math.floor(Math.random()*100));
    const [mounted, setMounted] = useState(false);
    const rNumber = () =>{
        setNumber(Math.floor(Math.random()*100))
    

    }
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted){
        return null;
    }
    
    return(<div>
        {number}
        <Button onClick={()=>rNumber()}>Hu</Button>
    </div>);
}