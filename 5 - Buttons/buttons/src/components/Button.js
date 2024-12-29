"use client";
import { useState } from "react"

export default function Button({name }){
    const [state, setState] = useState("default");
    return(<button onClick={()=>state === "default" ? setState(name) : setState("default")}>{state}</button>)

}