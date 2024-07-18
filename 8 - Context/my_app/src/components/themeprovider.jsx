import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({children}){
    const [theme, SetTheme] = useState(()=>{
        return localStorage.getItem('theme') ==='light-mode';
    });
    useEffect(()=>{
        if (theme){
            localStorage.setItem('theme','light-mode');
            document.body.classList.add('light-mode');
        }
        else{
            localStorage.setItem('theme','dark-mode');
            document.body.classList.remove('light-mode');
        }
    },[theme])


    const toggleTheme = ()=>{
        SetTheme((prev) => (!prev));
    }
    return(<ThemeContext.Provider value={{theme, toggleTheme}} >
        {children}
    </ThemeContext.Provider>);

}
