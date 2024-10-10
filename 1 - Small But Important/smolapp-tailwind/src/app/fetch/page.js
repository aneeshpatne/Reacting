'use client';
import { useState, useEffect } from 'react';
import ExamplePage from '@/components/loading-page';
export default function DataFetcher(){
    const [Mount, setMount] = useState(false);
    const [Data, setData] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments/1')
        .then((response) => response.json())
        .then((data)=>{
            setData(data);
            setMount(true);
        })
        .catch((error)=>{
        console.log(error);
        setMount(true);
    })
        
    }, []);
    if (!Data) return <ExamplePage/>
    if (!Mount) return <ExamplePage/>
    return(<div>
        {Data.id}
        {Data.name}
        {Data.email}
        {Data.body}
    </div>)
}