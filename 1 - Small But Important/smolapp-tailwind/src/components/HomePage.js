'use client';
import { useRouter } from "next/navigation";
import { NiceButton } from "./nice-button";
export default function HomePage(){
    const Router = useRouter()
    return (
        <div className="p-5">
<button className="relative inline-flex h-9 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" onClick={()=>(Router.push('/counter'))}>
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff4d4d_0%,#ffa64d_20%,#ffff4d_40%,#4dff4d_90%,#4dffff_80%,#4d4dff_100%)] blur-lg opacity-100" />
  <span className="inline-flex h-full w-full cursor-pointer rounded-md items-center justify-center  bg-blue-600 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Counter
  </span>
</button>
<button className="relative inline-flex h-9 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" onClick={()=>(Router.push('/todo'))}>
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff4d4d_0%,#ffa64d_20%,#ffff4d_40%,#4dff4d_90%,#4dffff_80%,#4d4dff_100%)] blur-lg opacity-100" />
  <span className="inline-flex h-full w-full cursor-pointer rounded-md items-center justify-center  bg-blue-600 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    To- Do
  </span>
</button>

        </div>
    )
}