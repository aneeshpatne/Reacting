'use client';
import { useRouter } from "next/navigation";
import { NiceButton } from "./nice-button";
import { Suspense } from "react";
export default function HomePage(){
    const Router = useRouter()
    return (
        <div className="flex gap-5 p-5">
<DefaultButton name={"Counter" } path={'/counter'}/>
<DefaultButton name={"To- Do"} path={'/todo'}/>
<DefaultButton name={"Ghaph"} path={'/graph'}/>
<DefaultButton name={"Random Number"} path={'/randomNumber'}/>
<DefaultButton name={"Fetch"} path={'/fetch'}/>
<Suspense fallback={<h1>WAITING</h1>}>
<DefaultButton name={"SVG"} path={'/svgGraphics'}/>
</Suspense>

        </div>
    )
}
export function DefaultButton({name, path}){
  const Router = useRouter()
  return(
    <button className="relative inline-flex h-9 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" onClick={()=>(Router.push(path))}>
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff4d4d_0%,#ffa64d_20%,#ffff4d_40%,#4dff4d_90%,#4dffff_80%,#4d4dff_100%)] blur-lg opacity-100" />
  <span className="inline-flex h-full w-full cursor-pointer rounded-md items-center justify-center  bg-blue-600 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    {name}
  </span>
</button>
  )
}