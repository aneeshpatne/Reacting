import FetchPages from "./fetch";
import { Suspense } from "react";
export default function Home(){
  return(<div>
    <Suspense fallback={<div>Loading ....</div>}>
    <FetchPages />
    </Suspense>
  </div>);
}