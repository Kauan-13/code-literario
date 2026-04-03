import React, { createContext, useEffect, useState } from 'react';

type Theme = string | "system" | "dark" | "light" | "bege" | "green";

interface IThemeContext {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const ThemeContext = createContext<IThemeContext>({
    theme: "light" as Theme,
    setTheme: () => {}
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const getInitialTheme = (): Theme => {
        const savedTheme = localStorage.getItem('theme') as Theme;
        if (savedTheme) return savedTheme;
        return "system"
    };
    
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        if (theme != "system") {
            document.documentElement.setAttribute('data-theme', theme);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        }
        localStorage.setItem('theme', theme);

    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export {ThemeContext, ThemeProvider};