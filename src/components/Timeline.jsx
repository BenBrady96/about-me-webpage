import './Timeline.css';

const jobs = [
    {
        role: 'Junior Software Engineer - AI & Automation',
        company: 'Zencargo',
        type: 'Full-time',
        period: 'March 2026 - Present',
        location: 'London, England, United Kingdom · Remote',
        logo: 'https://www.google.com/s2/favicons?domain=zencargo.com&sz=128',
        description: null,
        placeholder: 'To be added...',
    },
    {
        role: 'Business Analyst',
        company: 'Travis Perkins plc',
        type: 'Full-time',
        period: 'Feb 2019 - Dec 2025 · 6 yrs 11 mos',
        location: 'Northampton, England, United Kingdom · Remote',
        logo: 'https://www.google.com/s2/favicons?domain=travisperkins.co.uk&sz=128',
        description: [
            'Designed and implemented automated data processing workflows, reducing manual intervention by ~60% and delivering an estimated £1.64m annual staffing cost saving.',
            'Analysed complex, high-volume datasets using JavaScript and SQL to identify trends, patterns and operational inefficiencies.',
            'Built interactive, user-friendly dashboards and applications (Google AppSheet) to support executive decision-making and enable remote workforce management.',
            'Developed and standardised data visualisations to clearly communicate insights to technical and non-technical stakeholders across the organisation.',
            'Designed and delivered workflow automation solutions, including a job submission and approval application that streamlined cross-team processes.',
            'Partnered with cross-functional teams to translate business requirements into scalable, data-driven solutions and actionable recommendations.',
            'Led data literacy and analytics enablement initiatives, delivering training sessions that increased adoption of data-driven decision-making across departments.',
            'Performed regular data quality, validation and integrity checks, ensuring reliable reporting and auditable outputs for senior management.',
        ],
    },
    {
        role: 'Customer Service Manager',
        company: 'Ladbrokes Coral',
        type: 'Full-time',
        period: 'Nov 2014 - Feb 2019 · 4 yrs 4 mos',
        location: 'Northampton, England, United Kingdom · On-site',
        logo: 'https://www.google.com/s2/favicons?domain=ladbrokes.com&sz=128',
        description: [
            'Managed daily operations of a betting shop, ensuring timely opening and closing, clean facilities and adherence to all company policies and legal betting standards.',
            'Ensured compliance with gambling regulations, including responsible gambling practices and strict under-18 access controls, reducing operational risk and maintaining regulatory standards.',
            'Scheduled and managed staff rotas, covering absences and ensuring continuous shop operations while maintaining service quality.',
            'Led, coached and motivated a team of customer service staff, providing guidance to maximise performance and maintain a positive, professional working environment.',
            'Monitored shop performance and compliance, identifying operational issues and implementing corrective actions to uphold service and safety standards.',
            'Implemented problem-solving strategies for operational and customer issues, ensuring smooth day-to-day operations and excellent customer experiences.',
            'Created a culture of accountability, teamwork and service excellence, ensuring staff followed procedures and customers received consistent, high-quality service.',
        ],
    },
];

export default function Timeline() {
    return (
        <div className="timeline fade-in" data-delay="200">
            <h3 className="timeline-heading">
                <span>💼</span> Career Timeline
            </h3>
            <div className="timeline-line">
                {jobs.map((job) => (
                    <div key={job.role} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-card">
                            <div className="timeline-card-header">
                                <img
                                    src={job.logo}
                                    alt={`${job.company} logo`}
                                    className="timeline-logo"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                                <div className="timeline-header-info">
                                    <div className="timeline-role">{job.role}</div>
                                    <div className="timeline-company">{job.company} · {job.type}</div>
                                    <div className="timeline-meta">
                                        <span>📅 {job.period}</span>
                                        <span>📍 {job.location}</span>
                                    </div>
                                </div>
                            </div>
                            {job.description ? (
                                <ul className="timeline-description">
                                    {job.description.map((item) => (
                                        <li key={item.slice(0, 40)}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="timeline-description-placeholder">{job.placeholder}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
