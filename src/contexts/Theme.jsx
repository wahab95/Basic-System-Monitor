import {createContext, useState, useEffect} from 'react';

export const ThemeContext = createContext({
    theme: 'dark',
    setTheme: () => {},
});

export const ThemeProvider = ({children}) => { 
    const [theme, setTheme] = useState(() => {
        // Get theme from localStorage or default to 'dark'
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'dark';
    });

    useEffect(() => {
        // Save theme to localStorage whenever it changes
        localStorage.setItem('theme', theme);
        // Apply theme to document root
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}