import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();
export default function ThemeProvider({children}){
    const [theme, setTheme] = useState('DarkMode');
    useEffect(()=>{
        const prevTheme = localStorage.getItem('theme');
        if (prevTheme){
            setTheme(prevTheme);
        }
    },[])
    useEffect(()=>{
        if (theme ==='LightMode'){
            document.body.classList.add('LightMode');
            localStorage.setItem('theme','LightMode');
        }
        else{
            document.body.classList.remove('LightMode');
            localStorage.setItem('theme','DarkMode');
        }
    },[theme]);
    function Themetoggle(){
        setTheme(prev => (prev ==='LightMode' ? 'DarkMode': 'LightMode'));
    }
    return(<ThemeContext.Provider value={{theme, Themetoggle}}>
        {children}
    </ThemeContext.Provider>);

}