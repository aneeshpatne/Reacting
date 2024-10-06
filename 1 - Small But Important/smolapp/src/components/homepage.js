'use client';
import { useRouter } from "next/navigation";
export default function HomePage() {
    const Router = useRouter()
    return (
        <div>
            <button onClick={()=>Router.push('/about')}>ABOUT</button>
        </div>
    )
}