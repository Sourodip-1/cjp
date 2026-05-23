'use client';

import Link from 'next/link';

export default function EligibilitySection() {
  const requirements = [
    {
      num: '01',
      title: 'Unemployed',
      desc: "By force, by choice, or by principle. We don't ask.",
    },
    {
      num: '02',
      title: 'Lazy',
      desc: 'Physically only. The brain may continue to spiral.',
    },
    {
      num: '03',
      title: 'Chronically online',
      desc: 'Minimum 11 hours a day, including bathroom breaks.',
    },
    {
      num: '04',
      title: 'Can rant professionally',
      desc: 'As long as the content is sharp, honest, and points at something that actually matters.',
    },
  ];

  return (
    <section className="eligibility-section" id="eligibility" aria-labelledby="eligibility-title">
      <div className="eligibility-inner">
        {/* Header */}
        <div className="eligibility-header">
          <span className="eligibility-kicker">MEMBERSHIP</span>
          <h2 id="eligibility-title" className="eligibility-title">
            Are you eligible <br />
            to <span className="eligibility-title-italic">join?</span>
          </h2>
          <p className="eligibility-subtitle">
            We do not check religion, caste, or gender. We do, however, have four (4) standards.
          </p>
        </div>

        {/* Requirements Cards */}
        <div className="eligibility-list">
          {requirements.map((req) => (
            <div key={req.num} className="eligibility-card" tabIndex={0}>
              <div className="eligibility-card-num">
                REQ / {req.num}
              </div>
              <div className="eligibility-card-content">
                <h3 className="eligibility-card-title">{req.title}</h3>
                <p className="eligibility-card-desc">{req.desc}</p>
              </div>
              <div className="eligibility-checkmark-circle" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="checkmark-icon"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="eligibility-cta-container">
          <Link href="#join" className="eligibility-join-btn btn-primary">
            JOIN THE PARTY &rarr;
          </Link>
          <div className="eligibility-footer-text">
            <p className="footer-line-1">Membership is free, lifelong, and revocable only by you.</p>
            <p className="footer-line-2">No fees. No selfies with the leader. No &ldquo;missed call to register.&rdquo;</p>
          </div>
        </div>
      </div>
    </section>
  );
}
