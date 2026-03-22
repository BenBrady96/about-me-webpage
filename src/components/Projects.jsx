import { useState } from 'react';
import './Projects.css';

const projects = [
    {
        icon: '💬',
        title: 'SimuChat',
        description:
            'A secure, microservices-based AI Chat platform featuring 6 legendary Final Fantasy personas. Powered by Google Gemini. Built with Kotlin (Ktor), React, and PostgreSQL. Features robust security hardening, anti-jailbreak guardrails, and full IaC/K3s orchestration.',
        features: [
            '6 AI characters with detailed system prompts and anti-prompt-injection guardrails',
            'Kotlin/Ktor REST API with JWT authentication and BCrypt password hashing',
            'React + Bootstrap 5 SPA with Axios JWT interceptor',
            'PostgreSQL database with Exposed ORM and HikariCP connection pooling',
            '29 automated tests — auth flows, IDOR/BOLA, SQL injection, XSS, and timing attacks',
            'Full IaC with Terraform (GCP) and Kubernetes (K3s) deployment manifests',
            'Dockerised multi-stage builds with Nginx reverse proxy and security headers',
        ],
        tags: ['Kotlin', 'Ktor', 'React', 'PostgreSQL', 'Google Gemini API', 'Docker', 'Terraform', 'Kubernetes', 'Nginx', 'JWT'],
        url: 'https://github.com/BenBrady96/SimuChat',
        liveUrl: 'https://youtu.be/GAD_lCMx0NA',
        demoType: 'youtube',
        youtubeId: 'GAD_lCMx0NA',
    },
    {
        icon: '📄',
        title: 'Invoice Generator',
        description:
            'A professional, client-side PDF invoice generator built with React and Vite. Features 6 premium templates, automatic multi-page pagination, and fully private local storage — no sign-up or server required.',
        features: [
            '6 premium templates — Classic, Modern, Minimal, Bold, Professional, Creative',
            'WYSIWYG PDF export — what you see is exactly what you get',
            'Company logo upload with drag-and-drop support',
            'Browser persistence — company profile saved to localStorage',
            'Smart multi-page pagination with automatic page numbers',
            'Multi-currency support — GBP, USD, EUR, JPY, INR, AUD, CAD',
            'Auto-calculated subtotal, tax, and grand total in real-time',
            'Fully client-side — no server, no database, no tracking',
        ],
        tags: ['React', 'Vite', 'JavaScript', 'CSS', 'html2canvas', 'jsPDF', 'localStorage'],
        url: 'https://github.com/BenBrady96/invoice-generator',
        liveUrl: 'https://benbrady96.github.io/invoice-generator/',
        demoType: 'iframe',
        demoSrc: 'https://benbrady96.github.io/invoice-generator/',
    },
    {
        icon: '🤖',
        title: 'Agentic Discord Admin',
        description:
            'An autonomous Discord admin bot powered by Google Gemini that uses a ReAct agentic loop to manage your server through plain English. Tell it what you want and it figures out the rest — reasoning, chaining tool calls, and executing multi-step workflows without hand-holding.',
        features: [
            'ReAct agentic loop with multi-step autonomous reasoning',
            '38 admin tools — channels, roles, moderation, messaging, and more',
            'Button-based confirmation for 12 destructive actions',
            'Full conversation memory preserved across messages',
            'SQLite database for persistent alert and warning storage',
            'Automatic Gemini API rate-limit retry with exponential backoff',
        ],
        tags: ['Python', 'Google Gemini API', 'Discord.py', 'ReAct Agent', 'SQLite', 'asyncio'],
        url: 'https://github.com/BenBrady96/agentic-discord-admin',
        liveUrl: 'https://www.youtube.com/watch?v=BwE0c9SxiMs',
        demoType: 'youtube',
        youtubeId: 'BwE0c9SxiMs',
    },
    {
        icon: '📊',
        title: 'Discord AI Raid Reporter',
        description:
            'A Discord bot that detects FFLogs links, queries the FFLogs GraphQL API for structured fight data, and sends it to Google Gemini AI for analysis — generating detailed performance reports posted directly into your Discord server.',
        features: [
            'Automatic FFLogs link detection in Discord messages',
            'GraphQL API integration for structured raid data extraction',
            'AI-powered analysis via Google Gemini producing detailed reports',
            'Per-player performance breakdowns with actionable feedback',
            'Support for multiple fight types and difficulty levels',
        ],
        tags: ['Python', 'Google Gemini API', 'FFLogs GraphQL API', 'Discord.py'],
        url: 'https://github.com/BenBrady96/discord-fflogs-ai-raid-reporter',
        liveUrl: 'https://www.youtube.com/watch?v=sjbn3MEzjg4',
        demoType: 'youtube',
        youtubeId: 'sjbn3MEzjg4',
    },
    {
        icon: '🔥',
        title: 'React Fire Embers',
        description:
            'A mesmerising fire embers particle effect built entirely with React and CSS animations — no canvas, no WebGL, just pure CSS keyframes creating beautiful floating particles that rise and fade.',
        features: [
            'Pure CSS keyframe animations — no Canvas or WebGL',
            'Randomised particle sizes, speeds, and trajectories',
            'Smooth colour transitions from warm orange to translucent',
            'Configurable particle count and animation properties',
            'Lightweight with zero external dependencies',
        ],
        tags: ['React', 'CSS Animations', 'JavaScript', 'CSS Keyframes'],
        url: 'https://github.com/BenBrady96/react-fire-embers',
        liveUrl: 'https://benbrady96.github.io/react-fire-embers/',
        demoType: 'iframe',
        demoSrc: 'https://benbrady96.github.io/react-fire-embers/',
    },
    {
        icon: '✨',
        title: 'React Starfield',
        description:
            'A mesmerising twinkling starfield effect built with React and HTML5 Canvas — 2000 stars with smooth twinkle animations rendered on a deep space gradient background.',
        features: [
            'HTML5 Canvas rendering for optimal performance',
            '2000 individually animated stars with randomised properties',
            'Smooth sine-wave twinkle animations',
            'Deep space gradient background effect',
            'Responsive canvas that adapts to window size',
        ],
        tags: ['React', 'HTML5 Canvas', 'JavaScript', 'requestAnimationFrame'],
        url: 'https://github.com/BenBrady96/react-starfield',
        liveUrl: 'https://benbrady96.github.io/react-starfield/',
        demoType: 'iframe',
        demoSrc: 'https://benbrady96.github.io/react-starfield/',
    },
    {
        icon: '❄️',
        title: 'React Snowfall',
        description:
            'A gentle snowfall particle effect with 100 glowing snowflakes drifting down with randomised sizes, speeds, and horizontal sway — creating a peaceful winter atmosphere.',
        features: [
            'CSS-driven animation for smooth performance',
            '100 snowflakes with randomised sizes and fall speeds',
            'Gentle horizontal sway using sine-wave motion',
            'Soft glow effect on each snowflake',
            'Configurable snowflake count and properties',
        ],
        tags: ['React', 'CSS Animations', 'JavaScript'],
        url: 'https://github.com/BenBrady96/react-snowfall',
        liveUrl: 'https://benbrady96.github.io/react-snowfall/',
        demoType: 'iframe',
        demoSrc: 'https://benbrady96.github.io/react-snowfall/',
    },
    {
        icon: '⛄',
        title: 'React Talking Snowman',
        description:
            'An animated talking snowman component built entirely with CSS. Features a snowman with a top hat, scarf, carrot nose, and speech bubbles that cycle through random quotes with smooth transitions.',
        features: [
            'Pure CSS-constructed snowman — no images or SVGs',
            'Animated speech bubbles with smooth transitions',
            'Customisable quote list cycling through random messages',
            'Detailed accessories — top hat, scarf, buttons, and carrot nose',
            'Responsive design that scales across viewports',
        ],
        tags: ['React', 'CSS', 'Component Design', 'CSS Shapes'],
        url: 'https://github.com/BenBrady96/react-talking-snowman',
        liveUrl: 'https://benbrady96.github.io/react-talking-snowman/',
        demoType: 'iframe',
        demoSrc: 'https://benbrady96.github.io/react-talking-snowman/',
    },
];

function ProjectDemo({ project }) {
    const [playing, setPlaying] = useState(false);

    if (project.demoType === 'youtube') {
        return (
            <div className="project-demo">
                {playing ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&loop=1&playlist=${project.youtubeId}`}
                        title={`${project.title} demo`}
                        allow="autoplay; encrypted-media; fullscreen"
                        allowFullScreen
                    />
                ) : (
                    <>
                        <img
                            src={`https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`}
                            alt={`${project.title} demo`}
                            loading="lazy"
                        />
                        <div className="project-demo-overlay project-demo-overlay--always">
                            <button
                                className="project-demo-link"
                                onClick={() => setPlaying(true)}
                            >
                                ▶ Watch Demo
                            </button>
                        </div>
                    </>
                )}
            </div>
        );
    }

    if (project.demoType === 'iframe') {
        return (
            <div className="project-demo">
                <iframe
                    src={project.demoSrc}
                    title={`${project.title} demo`}
                    loading="lazy"
                    sandbox="allow-scripts"
                />
                <div className="project-demo-overlay">
                    <a
                        href={project.liveUrl || project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-demo-link"
                    >
                        🔗 Live Demo
                    </a>
                </div>
            </div>
        );
    }

    if (project.demoType === 'image') {
        return (
            <div className="project-demo">
                <img
                    src={project.imageSrc}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', position: 'absolute', top: 0, left: 0, background: 'var(--bg-secondary, #0a0a1a)' }}
                />
                <div className="project-demo-overlay">
                    <a
                        href={project.liveUrl || project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-demo-link"
                    >
                        {project.liveUrl ? '🔗 Live Demo' : '📂 View Code'}
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="project-demo">
            <div style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-card))',
                fontSize: '4rem',
            }}>
                {project.icon}
            </div>
            <div className="project-demo-overlay">
                <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-demo-link"
                >
                    📂 View Code
                </a>
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <div id="projects">
            <div className="projects-header">
                <h2 className="section-title fade-in">Featured Projects</h2>
            </div>

            {projects.map((project, i) => (
                <div key={project.title}>
                    <div className="project-showcase fade-in" data-delay={100}>
                        <div className={`project-showcase-inner${i % 2 !== 0 ? ' reverse' : ''}`}>
                            <ProjectDemo project={project} />

                            <div className="project-details">
                                <span className="project-number">Project {String(i + 1).padStart(2, '0')}</span>
                                <h3 className="project-showcase-title">
                                    <span>{project.icon}</span> {project.title}
                                </h3>
                                <p className="project-showcase-description">{project.description}</p>
                                <ul className="project-features">
                                    {project.features.map((f) => (
                                        <li key={f}>{f}</li>
                                    ))}
                                </ul>
                                <div className="project-showcase-tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="project-showcase-tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="project-showcase-links">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-showcase-btn"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        Source Code
                                    </a>
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-showcase-btn project-showcase-btn--primary"
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                <polyline points="15 3 21 3 21 9" />
                                                <line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {i < projects.length - 1 && (
                        <div className="project-divider">
                            <div className="project-divider-line"></div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
