import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
export default function Header(){
    const {theme, Themetoggle} = useContext(ThemeContext);
    console.log(theme);
    return(<div>
        <h1>Hi</h1>
        {theme}
        <button onClick={Themetoggle}>Click Me</button>
    </div>);
}