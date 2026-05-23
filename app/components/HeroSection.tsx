'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero" aria-label="Hero">
      {/* Watermark */}
      <div className="hero-watermark" aria-hidden="true">CJP</div>

      <div className="hero-inner">
        {/* ── LEFT COLUMN ── */}
        <div className="hero-left">
          {/* Badge */}
          <div className="hero-badge" role="status">
            <span className="hero-badge-dot" aria-hidden="true" />
            Party Launch · Live Since Yesterday
          </div>

          {/* Headline */}
          <h1 className="hero-headline" aria-label="Voice of the Lazy and Unemployed">
            <span className="headline-line">Voice of</span>
            <span className="headline-line">the</span>
            <span className="headline-line mixed">
              <span className="orange">Lazy</span>
              <span className="headline-ampersand">&nbsp;&amp;</span>
            </span>
            <span className="headline-line green">Unemployed.</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            A political party for the people the system forgot to count.
            Five demands. Zero sponsors. One large, stubborn swarm.
          </p>

          {/* CTAs */}
          <div className="hero-ctas">
            <a href="#join" className="btn-primary" id="hero-join-btn">
              Join the Party →
            </a>
            <a href="#petition" className="btn-petition" id="hero-petition-btn">
              <span className="btn-petition-dot" aria-hidden="true" />
              <span className="btn-petition-text">
                Sack the Education Minister
                <span className="btn-petition-sub">FILE THE PETITION! →</span>
              </span>
            </a>
            <button className="btn-manifesto" id="hero-manifesto-btn">
              Read the Manifesto
            </button>
          </div>

          {/* Stats */}
          <div className="hero-stats" role="list" aria-label="Party statistics">
            <div className="stat-item" role="listitem">
              <span className="stat-number">5</span>
              <span className="stat-label">Demands</span>
            </div>
            <div className="stat-item" role="listitem">
              <span className="stat-number">0</span>
              <span className="stat-label">Corporate Donors</span>
            </div>
            <div className="stat-item" role="listitem">
              <span className="stat-icon" aria-hidden="true">∞</span>
              <span className="stat-label">Patience</span>
            </div>
            <div className="stat-item" role="listitem">
              <span className="stat-number">1</span>
              <span className="stat-label">Founder, No PA</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN – POSTER STACK ── */}
        <div className="hero-right" aria-hidden="true">
          <div className="poster-stack">
            {/* Wrapper to contain and constrain the saffron background card to the main poster content */}
            <div className="poster-front-wrapper">
              {/* Background angled card (saffron) */}
              <div className="poster-card-back" />

              {/* Main poster card */}
              <div className="poster-card poster-card-front">
                {/* Hero image — exact user-specified crop */}
                <div className="poster-image-area">
                  <Image
                    src="/hero section.webp"
                    alt="Official Campaign Poster — Stronger Together"
                    fill
                    priority
                    sizes="420px"
                    className="poster-img"
                  />
                </div>

                {/* Membership Banner */}
                <div className="poster-member-banner">
                  <div className="member-banner-left">
                    <div className="member-title">BE A MEMBER</div>
                    <div className="member-desc">
                      Be part of the movement.<br />
                      Be part of the change.
                    </div>
                  </div>
                  <div className="member-banner-icons">
                    <div className="member-stat">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="icon-orange"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                      <span>BE HEARD</span>
                    </div>
                    <div className="member-stat">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="icon-green"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                      <span>BE UNITED</span>
                    </div>
                    <div className="member-stat">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="icon-orange"><path d="M12 2L2 7v2h20V7L12 2zm-2 9h-2v7h2v-7zm6 0h-2v7h2v-7zm-10 0H4v7h2v-7zm12 0h-2v7h2v-7zm-14 9v2h16v-2H4z"/></svg>
                      <span>BE THE CHANGE</span>
                    </div>
                  </div>
                  <button className="member-join-btn">J</button>
                </div>

                {/* Green header bar */}
                <div className="poster-header">
                  <span className="poster-label">ONE MOVEMENT. ONE VOICE. ONE NATION OF COCKROACHES.</span>
                </div>
              </div>
            </div>

            {/* Second card — quote */}
            <div className="poster-card-2">
              <div className="poster-sub-label">Together · Resilient · Unstoppable</div>
              <p className="poster-quote">&quot;They tried to step on us. We came back.&quot;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
