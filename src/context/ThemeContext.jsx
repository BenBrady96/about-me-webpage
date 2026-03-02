import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const palettes = {
    teal: { accent: '#64ffda', accentGlow: 'rgba(100, 255, 218, 0.15)', accentRgb: '100, 255, 218' },
    purple: { accent: '#b48eff', accentGlow: 'rgba(180, 142, 255, 0.15)', accentRgb: '180, 142, 255' },
    blue: { accent: '#82aaff', accentGlow: 'rgba(130, 170, 255, 0.15)', accentRgb: '130, 170, 255' },
    orange: { accent: '#ffcb6b', accentGlow: 'rgba(255, 203, 107, 0.15)', accentRgb: '255, 203, 107' },
    pink: { accent: '#ff79c6', accentGlow: 'rgba(255, 121, 198, 0.15)', accentRgb: '255, 121, 198' },
};

export function ThemeProvider({ children }) {
    const [mode, setMode] = useState(() => localStorage.getItem('theme-mode') || 'dark');
    const [palette, setPalette] = useState(() => localStorage.getItem('theme-palette') || 'teal');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', mode);
        localStorage.setItem('theme-mode', mode);
    }, [mode]);

    useEffect(() => {
        const p = palettes[palette] || palettes.teal;
        document.documentElement.style.setProperty('--accent', p.accent);
        document.documentElement.style.setProperty('--accent-glow', p.accentGlow);
        document.documentElement.style.setProperty('--accent-rgb', p.accentRgb);
        document.documentElement.setAttribute('data-palette', palette);
        localStorage.setItem('theme-palette', palette);
    }, [palette]);

    const toggleMode = () => setMode((m) => (m === 'dark' ? 'light' : 'dark'));

    return (
        <ThemeContext.Provider value={{ mode, palette, toggleMode, setPalette, palettes }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
