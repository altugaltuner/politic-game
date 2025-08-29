"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ThemeContextType {
    isDarkMode: boolean;
    toggleTheme: () => void;
    mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    }
    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, mounted }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};