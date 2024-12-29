import { useContext } from "react";
import { ThemeContext } from "./themeprovider";
export default function HomePage(){
    const {theme, toggleTheme} = useContext(ThemeContext);
    console.log(theme);
    return(<div>
        <h1>Home Page
            {theme ? 'true' :'false'}
            <button onClick={toggleTheme}>Click</button>
        </h1>
        </div>);
}