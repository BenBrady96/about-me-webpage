import './Skills.css';

const categories = [
    {
        icon: '💻',
        title: 'Languages',
        skills: ['Python', 'JavaScript', 'C#', 'SQL', 'HTML5', 'CSS3'],
    },
    {
        icon: '🤖',
        title: 'AI & Automation',
        skills: ['Generative AI', 'Gemini API', 'LLM Integration', 'Workflow Automation', 'ReAct Agents'],
    },
    {
        icon: '🎨',
        title: 'Front-End / UI',
        skills: ['React', 'CSS Animations', 'HTML5 Canvas', 'Responsive Design', 'AppSheet'],
    },
    {
        icon: '📈',
        title: 'Data & Analytics',
        skills: ['Data Pipelines', 'Data Visualisation', 'Dashboards', 'Trend Analysis'],
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
                        <span className="skill-category-icon">{cat.icon}</span>
                        <h3 className="skill-category-title">{cat.title}</h3>
                        <div className="skill-tags">
                            {cat.skills.map((skill) => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
