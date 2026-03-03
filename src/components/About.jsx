import './About.css';
import Timeline from './Timeline';

const highlights = [
    {
        icon: '⚙️',
        title: 'Workflow Automation',
        text: 'Engineered automated data pipelines and applications that reduced manual intervention by ~60%.',
    },
    {
        icon: '💷',
        title: '£1.64m Annual Savings',
        text: 'Delivered significant staffing cost savings through intelligent workflow automation and process optimisation.',
    },
    {
        icon: '🤖',
        title: 'AI Integration',
        text: 'Architected full-stack applications integrating the Gemini API to create context-aware chatbots and automated analysis reports.',
    },
    {
        icon: '📊',
        title: 'Data Analytics',
        text: 'Analysed complex, high-volume datasets using JavaScript and SQL to identify trends, patterns, and operational inefficiencies.',
    },
];

export default function About() {
    return (
        <section className="section" id="about">
            <h2 className="section-title fade-in">About Me</h2>
            <p className="about-description fade-in" data-delay="100">
                I believe the best solutions don't just describe the problem - they fix it.
                With a background in data solutions and full-stack development, I bridge the gap
                between operational strategy and technical execution. My approach is defined by a
                drive to automate the mundane to unlock value.
            </p>
            <div className="about-highlights">
                {highlights.map((item, i) => (
                    <div
                        key={item.title}
                        className="highlight-card fade-in"
                        data-delay={150 + i * 100}
                    >
                        <div className="highlight-header">
                            <span className="highlight-icon">{item.icon}</span>
                            <h3 className="highlight-title">{item.title}</h3>
                        </div>
                        <p className="highlight-text">{item.text}</p>
                    </div>
                ))}
            </div>
            <Timeline />
        </section>
    );
}
