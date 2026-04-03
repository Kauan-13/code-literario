import React, { createContext, useEffect, useState } from 'react';

type Font = string | "jetbrains" | "roboto" | "times";

interface IFontContext {
    font: Font;
    setFont: React.Dispatch<React.SetStateAction<Font>>;
}

const FontContext = createContext<IFontContext>({
    font: "jetbrains" as Font,
    setFont: () => {}
});

const FontProvider = ({ children }: { children: React.ReactNode }) => {
    const getInitialFont = (): Font => {
        const savedFont = localStorage.getItem('font') as Font;
        if (savedFont) return savedFont;
        return "jetbrains"
    };
    
    const [font, setFont] = useState<Font>(getInitialFont);

    useEffect(() => {
        document.documentElement.setAttribute('data-font', font);
        localStorage.setItem('font', font);
    }, [font]);

    return (
        <FontContext.Provider value={{ font, setFont }}>
            {children}
        </FontContext.Provider>
    );
};

export {FontContext, FontProvider};