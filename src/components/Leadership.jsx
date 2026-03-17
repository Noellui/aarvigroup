import React from 'react';
import '../styles/Leadership.css';
import useScrollAnimation from './useScrollAnimation';
import TiltCard from './TiltCard';

const leaders = [
    {
        name: 'Mansi Shah',
        initials: 'MS',
        credential: 'CA',
        credentialFull: 'Chartered Accountant',
        experience: 20,
        bio: 'With two decades of expertise in financial planning and wealth management, Mansi leads Aarvi with a deep commitment to client-first strategies and long-term value creation.',
    },
    {
        name: 'Darshee Kuntal Parikh',
        initials: 'DP',
        credential: 'CFA (USA)',
        credentialFull: 'Chartered Financial Analyst',
        experience: 17,
        bio: 'A CFA charterholder with 17 years of global investment experience, Darshee brings rigorous analytical discipline and international market perspective to every portfolio decision.',
    },
];

const Leadership = () => {
    const itemsRef = useScrollAnimation();

    return (
        <section id="leadership" className="leadership-section">
            <div
                className="leadership-tag fade-up"
                ref={(el) => (itemsRef.current[0] = el)}
            >
                Meet the Team
            </div>
            <h2
                className="leadership-heading fade-up"
                ref={(el) => (itemsRef.current[1] = el)}
            >
                Our Leadership
            </h2>
            <p
                className="leadership-intro fade-up"
                ref={(el) => (itemsRef.current[2] = el)}
            >
                Guided by seasoned professionals whose combined expertise spans four decades
                of financial markets and wealth stewardship.
            </p>

            <div className="leadership-grid">
                {leaders.map((leader, i) => (
                    <TiltCard
                        key={i}
                        className="leader-card fade-up"
                        ref={(el) => (itemsRef.current[3 + i] = el)}
                    >
                        <div className="leader-avatar">{leader.initials}</div>
                        <div className="leader-name">{leader.name}</div>
                        <div className="leader-credential">{leader.credential}</div>
                        <div className="leader-divider" />
                        <p className="leader-experience">
                            {leader.credentialFull} &nbsp;·&nbsp;{' '}
                            <strong>{leader.experience}+ years</strong> of experience
                        </p>
                        <p className="leader-experience" style={{ marginTop: '12px', fontSize: '14px' }}>
                            {leader.bio}
                        </p>
                    </TiltCard>
                ))}
            </div>
        </section>
    );
};

export default Leadership;