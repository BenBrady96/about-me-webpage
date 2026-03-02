import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

const paletteKeys = ['teal', 'purple', 'blue', 'orange', 'pink'];

export default function Navbar() {
    const { mode, palette, toggleMode, setPalette } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
                <div className="navbar-inner">
                    <a href="#hero" className="navbar-logo">BB</a>

                    <ul className="navbar-links">
                        {navLinks.map((l) => (
                            <li key={l.href}>
                                <a href={l.href} className="navbar-link">{l.label}</a>
                            </li>
                        ))}
                    </ul>

                    <div className="navbar-controls">
                        <div className="palette-dots">
                            {paletteKeys.map((p) => (
                                <button
                                    key={p}
                                    className={`palette-dot palette-dot--${p}${palette === p ? ' active' : ''}`}
                                    onClick={() => setPalette(p)}
                                    aria-label={`${p} theme`}
                                    title={p.charAt(0).toUpperCase() + p.slice(1)}
                                />
                            ))}
                        </div>

                        <button className="theme-toggle-btn" onClick={toggleMode} aria-label="Toggle theme">
                            {mode === 'dark' ? (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5" />
                                    <line x1="12" y1="1" x2="12" y2="3" />
                                    <line x1="12" y1="21" x2="12" y2="23" />
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                    <line x1="1" y1="12" x2="3" y2="12" />
                                    <line x1="21" y1="12" x2="23" y2="12" />
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                </svg>
                            ) : (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                </svg>
                            )}
                        </button>

                        <button className="navbar-hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                {mobileOpen ? (
                                    <>
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </>
                                ) : (
                                    <>
                                        <line x1="3" y1="6" x2="21" y2="6" />
                                        <line x1="3" y1="12" x2="21" y2="12" />
                                        <line x1="3" y1="18" x2="21" y2="18" />
                                    </>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
                {navLinks.map((l) => (
                    <a key={l.href} href={l.href} className="navbar-link" onClick={() => setMobileOpen(false)}>
                        {l.label}
                    </a>
                ))}
                <div className="palette-dots">
                    {paletteKeys.map((p) => (
                        <button
                            key={p}
                            className={`palette-dot palette-dot--${p}${palette === p ? ' active' : ''}`}
                            onClick={() => setPalette(p)}
                            aria-label={`${p} theme`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
