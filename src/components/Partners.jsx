import React from 'react';
import '../styles/Partners.css';

const partners = [
    'Aditya Birla Sun Life Mutual Fund',
    'Axis Mutual Fund',
    'Canara Robeco Mutual Fund',
    'DSP Mutual Fund',
    'Edelweiss Mutual Fund',
    'Franklin Templeton Mutual Fund',
    'HDFC Mutual Fund',
    'HSBC Mutual Fund',
    'ICICI Prudential Mutual Fund',
    'Invesco Mutual Fund',
    'Kotak Mahindra Mutual Fund',
    'Mirae Asset Mutual Fund',
    'Motilal Oswal Mutual Fund',
    'Nippon India Mutual Fund',
    'PPFAS Mutual Fund',
    'SBI Mutual Fund',
    'Tata Mutual Fund',
    'UTI Mutual Fund',
];

const row1 = partners.slice(0, 9);
const row2 = partners.slice(9);

const PartnerCard = ({ name }) => (
    <div className="partner-card">
        <img
            src={`/partners/${name}.png`}
            alt={name}
            className="partner-logo"
            draggable={false}
        />
    </div>
);

const Partners = () => (
    <section className="partners-section">
        <div className="partners-tag">Our Fund Partners</div>
        <h2 className="partners-heading">Trusted AMC Partners</h2>
        <p className="partners-subtext">
            We distribute schemes from India's leading Asset Management Companies,
            giving you access to the best funds across every category.
        </p>

        {/* Row 1 — left to right */}
        <div className="marquee-wrapper">
            <div className="marquee marquee-ltr">
                {[...row1, ...row1].map((name, i) => (
                    <PartnerCard key={`r1-${i}`} name={name} />
                ))}
            </div>
        </div>

        {/* Row 2 — right to left */}
        <div className="marquee-wrapper">
            <div className="marquee marquee-rtl">
                {[...row2, ...row2].map((name, i) => (
                    <PartnerCard key={`r2-${i}`} name={name} />
                ))}
            </div>
        </div>
    </section>
);

export default Partners;