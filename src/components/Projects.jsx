import './Projects.css';

const projects = [
    {
        icon: '🤖',
        title: 'Agentic Discord Admin',
        description:
            'Autonomous Discord admin bot powered by Google Gemini. Uses a ReAct agentic loop to manage your server through natural language — 38 tools, button-based confirmation for destructive actions, and multi-step autonomous workflows.',
        tags: ['Python', 'Gemini API', 'Discord.py', 'ReAct Agent'],
        url: 'https://github.com/BenBrady96/agentic-discord-admin',
    },
    {
        icon: '📊',
        title: 'Discord AI Raid Reporter',
        description:
            'Automatically generates AI-powered raid performance reports from FFLogs links via Discord channels, showcasing practical LLM integration with gaming APIs.',
        tags: ['Python', 'Gemini API', 'FFLogs API', 'Discord.py'],
        url: 'https://github.com/BenBrady96/discord-fflogs-ai-raid-reporter',
    },
    {
        icon: '🔥',
        title: 'React Fire Embers',
        description:
            'A mesmerising fire embers particle effect built with React & CSS animations — no canvas, no WebGL, just pure CSS keyframes creating beautiful floating particles.',
        tags: ['React', 'CSS Animations', 'JavaScript'],
        url: 'https://github.com/BenBrady96/react-fire-embers',
    },
    {
        icon: '✨',
        title: 'React Starfield',
        description:
            'A mesmerising twinkling starfield effect built with React and HTML5 Canvas — 2000 stars with smooth twinkle animations on a deep space gradient background.',
        tags: ['React', 'HTML5 Canvas', 'JavaScript'],
        url: 'https://github.com/BenBrady96/react-starfield',
    },
    {
        icon: '❄️',
        title: 'React Snowfall',
        description:
            'A gentle snowfall particle effect built with React and CSS animations — 100 glowing snowflakes drifting down with randomised sizes and speeds.',
        tags: ['React', 'CSS Animations', 'JavaScript'],
        url: 'https://github.com/BenBrady96/react-snowfall',
    },
    {
        icon: '⛄',
        title: 'React Talking Snowman',
        description:
            'An animated talking snowman component built with React. Features a CSS-only snowman with a top hat, scarf, carrot nose, and speech bubbles cycling through random quotes.',
        tags: ['React', 'CSS', 'Component Design'],
        url: 'https://github.com/BenBrady96/react-talking-snowman',
    },
];

export default function Projects() {
    return (
        <section className="section" id="projects">
            <h2 className="section-title fade-in">Featured Projects</h2>
            <div className="projects-grid">
                {projects.map((project, i) => (
                    <div
                        key={project.title}
                        className="project-card fade-in"
                        data-delay={100 + i * 120}
                    >
                        <div className="project-header">
                            <span className="project-icon">{project.icon}</span>
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                                aria-label={`View ${project.title} on GitHub`}
                            >
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                            </a>
                        </div>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tags">
                            {project.tags.map((tag) => (
                                <span key={tag} className="project-tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
