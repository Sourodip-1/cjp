'use client';

import Image from 'next/image';

export default function VisionSection() {
  return (
    <section className="vision-section" id="vision" aria-label="Vision">
      <div className="vision-inner">
        {/* ── LEFT COLUMN ── */}
        <div className="vision-left">
          {/* Badge */}
          <div className="vision-badge">
            Chapter One
          </div>

          {/* Headline */}
          <h2 className="vision-headline">
            <span className="headline-text">Our Movement's</span>
            <span className="headline-italic-green">Vision.</span>
          </h2>

          {/* Description */}
          <p className="vision-description">
            We are not here to set up another PM CARES, holiday in Davos on
            the taxpayer's salary slip, or rebrand corruption as "strategic
            spending." We are here to ask — loudly, repeatedly, in writing —
            where the money went.
          </p>

          {/* Mission Box */}
          <div className="mission-box">
            <div className="mission-badge">
              Our Mission
            </div>
            <p className="mission-text">
              Build a party for the young people who keep getting called lazy,
              chronically online, and — most recently — cockroaches. That's it.
              That's the mission. The rest is satire.
            </p>
          </div>
        </div>

        {/* ── RIGHT COLUMN – STACK ── */}
        <div className="vision-right" aria-hidden="true">
          <div className="vision-poster-stack">
            {/* Background rotated card */}
            <div className="vision-card-back" />

            {/* Main poster card container */}
            <div className="vision-card-front">
              <div className="vision-card-layout">
                {/* Image fills entire layout */}
                <div className="vision-image-wrapper">
                  <Image
                    src="/vision_podium.webp"
                    alt="Vision podium representation"
                    width={320}
                    height={480}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
