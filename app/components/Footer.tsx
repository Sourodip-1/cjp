'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        {/* ── LEFT SECTION: BRANDING ── */}
        <div className="footer-brand">
          <Link href="/" className="footer-logo" aria-label="Cockroach Janta Party Home">
            <div className="footer-logo-icon">
              <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
                <circle cx="32" cy="32" r="29" fill="none" stroke="#E0651E" strokeWidth="3" strokeDasharray="46 1000" transform="rotate(-90 32 32)"></circle>
                <circle cx="32" cy="32" r="29" fill="none" stroke="#1F5A2E" strokeWidth="3" strokeDasharray="46 1000" transform="rotate(30 32 32)"></circle>
                <circle cx="32" cy="32" r="29" fill="none" stroke="#2A1A10" strokeWidth="0.8"></circle>
                <ellipse cx="32" cy="36" rx="11" ry="16" fill="#5A2F12"></ellipse>
                <ellipse cx="32" cy="25" rx="7" ry="6" fill="#5A2F12"></ellipse>
                <path d="M28 17 Q22 10 18 8 M36 17 Q42 10 46 8" stroke="#2A1A10" strokeWidth="1.6" fill="none" strokeLinecap="round"></path>
                <rect x="26" y="23" width="12" height="3.5" rx="1" fill="#0a0807"></rect>
              </svg>
            </div>
            <div className="footer-logo-text">
              <span className="footer-logo-title">COCKROACH<br />JANTA PARTY</span>
              <span className="footer-logo-hindi">कॉकरोच जनता पार्टी</span>
            </div>
          </Link>
          <p className="footer-brand-desc">
            A political party for the lazy, the unemployed, and the chronically correct.
            Headquartered wherever the wifi works.
          </p>
        </div>

        {/* ── RIGHT SECTION: LINKS GRID ── */}
        <div className="footer-links-grid">
          {/* Column 1 */}
          <div className="footer-links-column">
            <span className="footer-column-heading">THE PARTY</span>
            <ul className="footer-column-list">
              <li><Link href="#vision">Vision</Link></li>
              <li><Link href="#manifesto">Manifesto</Link></li>
              <li><Link href="#founder">Founder</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="footer-links-column">
            <span className="footer-column-heading">GET INVOLVED</span>
            <ul className="footer-column-list">
              <li><Link href="#eligibility">Eligibility</Link></li>
              <li><Link href="#join">Join the party</Link></li>
              <li><Link href="#volunteer">Volunteer</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-links-column">
            <span className="footer-column-heading">FOLLOW</span>
            <ul className="footer-column-list">
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter / X</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a href="https://telegram.org" target="_blank" rel="noopener noreferrer">Telegram</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <div className="footer-copyright">
            &copy; 2026 COCKROACH JANTA PARTY &middot; ALL RANTS RESERVED.
          </div>

          <div className="footer-satire-badge">
            <span className="satire-badge-icon" aria-hidden="true">&#9888;</span>
            <span className="satire-badge-text">A WORK OF SATIRE</span>
          </div>

          <div className="footer-bottom-links">
            <Link href="#privacy">PRIVACY</Link>
            <span className="sep">&middot;</span>
            <Link href="#press">PRESS</Link>
            <span className="sep">&middot;</span>
            <Link href="#contact">CONTACT</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
