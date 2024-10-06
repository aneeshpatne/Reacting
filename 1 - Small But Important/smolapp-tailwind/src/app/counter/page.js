"use client";
import { useState } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button";
export default function Home(){
    const [count, setCount] = useState(0);
    const increment =() =>{
        setCount(count => count + 1);
    }
    const decrement =() =>{
        if (count >0){
        setCount(count => count - 1);
    }
}
    return(
        <div className="p-5">
        <Button className="mr-5 ml-5"variant="outline" size="icon" onClick={decrement}>
      <ChevronLeft className="h-4 w-4" />
    </Button>
    {count}
    <Button className="ml-5"variant="outline" size="icon" onClick={increment}>
      <ChevronRight className="h-4 w-4" />
    </Button>
        </div>
    )
}