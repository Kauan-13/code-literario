import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = "dark" | "light" | "bege" | "green";

interface IThemeContext {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const ThemeContext = createContext<IThemeContext>({
    theme: 'dark' as Theme,
    setTheme: () => {}
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const getInitialTheme = (): Theme => {
        const savedTheme = localStorage.getItem('theme') as Theme;
        if (savedTheme) return savedTheme;

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    };
    
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);