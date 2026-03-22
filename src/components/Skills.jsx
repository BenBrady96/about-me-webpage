import './Skills.css';

const allProjects = {
    simuChat: { name: 'SimuChat', url: 'https://github.com/BenBrady96/SimuChat' },
    invoiceGen: { name: 'Invoice Generator', url: 'https://github.com/BenBrady96/invoice-generator' },
    agenticAdmin: { name: 'Agentic Discord Admin', url: 'https://github.com/BenBrady96/agentic-discord-admin' },
    raidReporter: { name: 'Discord AI Raid Reporter', url: 'https://github.com/BenBrady96/discord-fflogs-ai-raid-reporter' },
    fireEmbers: { name: 'React Fire Embers', url: 'https://github.com/BenBrady96/react-fire-embers' },
    starfield: { name: 'React Starfield', url: 'https://github.com/BenBrady96/react-starfield' },
    snowfall: { name: 'React Snowfall', url: 'https://github.com/BenBrady96/react-snowfall' },
    snowman: { name: 'React Talking Snowman', url: 'https://github.com/BenBrady96/react-talking-snowman' },
};

const p = allProjects;
const allEight = [p.simuChat, p.invoiceGen, p.agenticAdmin, p.raidReporter, p.fireEmbers, p.starfield, p.snowfall, p.snowman];
const aiProjects = [p.simuChat, p.agenticAdmin, p.raidReporter];
const allReact = [p.simuChat, p.invoiceGen, p.fireEmbers, p.starfield, p.snowfall, p.snowman];

const categories = [
    {
        icon: '💻',
        title: 'Languages',
        skills: [
            {
                name: 'Python',
                devicon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                projects: [p.agenticAdmin, p.raidReporter],
            },
            {
                name: 'JavaScript',
                devicon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                projects: allReact,
            },
            {
                name: 'Kotlin',
                devicon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
                projects: [p.simuChat],
            },
            {
                name: 'C#',
                devicon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
                projects: [],
            },
            {
                name: 'SQL',
                devicon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg',
                projects: [p.simuChat, p.agenticAdmin],
            },
            {
                name: 'HTML5',
                devicon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
                projects: allReact,
            },
            {
                name: 'CSS3',
                devicon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
                projects: [p.simuChat, p.invoiceGen, p.fireEmbers, p.snowfall, p.snowman],
            },
        ],
    },
    {
        icon: '🤖',
        title: 'AI & Automation',
        skills: [
            {
                name: 'Google Gemini API',
                devicon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
                projects: aiProjects,
            },
            {
                name: 'Generative AI',
                devicon: null,
                emoji: '🧠',
                projects: aiProjects,
            },
            {
                name: 'ReAct Agentic Loop',
                devicon: null,
                emoji: '🔄',
                projects: [p.agenticAdmin],
            },
            {
                name: 'LLM Prompt Engineering',
                devicon: null,
                emoji: '💬',
                projects: aiProjects,
            },
        ],
    },
    {
        icon: '🎨',
        title: 'Front-End / UI',
        skills: [
            {
                name: 'React',
                devicon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                projects: allReact,
            },
            {
                name: 'CSS Animations',
                devicon: null,
                emoji: '✨',
                projects: [p.fireEmbers, p.snowfall, p.snowman],
            },
            {
                name: 'HTML5 Canvas',
                devicon: null,
                emoji: '🖼️',
                projects: [p.starfield],
            },
            {
                name: 'Bootstrap',
                devicon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
                projects: [p.simuChat],
            },
        ],
    },
    {
        icon: '🛠️',
        title: 'Tools & Infrastructure',
        skills: [
            {
                name: 'Git / GitHub',
                devicon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
                projects: allEight,
            },
            {
                name: 'Docker',
                devicon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
                projects: [p.simuChat],
            },
            {
                name: 'Kubernetes',
                devicon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg',
                projects: [p.simuChat],
            },
            {
                name: 'Linux / Ubuntu',
                devicon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
                projects: [],
            },
            {
                name: 'Google Cloud (GCP)',
                devicon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
                projects: [p.simuChat],
            },
            {
                name: 'Python venv',
                devicon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                projects: [p.agenticAdmin, p.raidReporter],
            },
            {
                name: 'SQLite',
                devicon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
                projects: [p.agenticAdmin],
            },
            {
                name: 'PostgreSQL',
                devicon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
                projects: [p.simuChat],
            },
            {
                name: 'Nginx',
                devicon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
                projects: [p.simuChat],
            },
            {
                name: 'Terraform',
                devicon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
                projects: [p.simuChat],
            },
            {
                name: 'Gradle',
                devicon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-original.svg',
                projects: [p.simuChat],
            },
        ],
    },
];

export default function Skills() {
    return (
        <section className="section" id="skills">
            <h2 className="section-title fade-in">Tech Stack & Tools</h2>
            <div className="skills-grid">
                {categories.map((cat, i) => (
                    <div
                        key={cat.title}
                        className="skill-category fade-in"
                        data-delay={100 + i * 100}
                    >
                        <div className="skill-category-header">
                            <span className="skill-category-icon">{cat.icon}</span>
                            <h3 className="skill-category-title">{cat.title}</h3>
                        </div>
                        <div className="skill-items">
                            {cat.skills.map((skill) => (
                                <div key={skill.name} className="skill-item">
                                    <div className="skill-item-icon">
                                        {skill.devicon ? (
                                            <img src={skill.devicon} alt={skill.name} loading="lazy" />
                                        ) : (
                                            <span style={{ fontSize: '1.5rem' }}>{skill.emoji}</span>
                                        )}
                                    </div>
                                    <div className="skill-item-info">
                                        <div className="skill-item-name">{skill.name}</div>
                                        {skill.projects.length > 0 && (
                                            <div className="skill-item-projects">
                                                Used in:{' '}
                                                {skill.projects.map((proj, j) => (
                                                    <span key={proj.name}>
                                                        <a href={proj.url} target="_blank" rel="noopener noreferrer">
                                                            {proj.name}
                                                        </a>
                                                        {j < skill.projects.length - 1 ? ', ' : ''}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
