'use client';

import Image from 'next/image';

export default function BroadImageSection() {
  return (
    <section className="broad-image-section" id="campaign-banner" aria-label="Campaign Banner">
      {/* Saffron Top Bar */}
      {/* <div className="broad-banner-orange-bar" aria-hidden="true" /> */}

      {/* Image Container */}
      <div className="broad-banner-image-container">
        <Image
          src="/broad image.webp"
          alt="Cockroach Janta Party Campaign Banner - Cockroach at podium with crowd cheering"
          width={1920}
          height={960}
          priority
          sizes="100vw"
          className="broad-banner-img"
        />
      </div>

      {/* Green Bottom Bar */}
      {/* <div className="broad-banner-green-bar" aria-hidden="true" /> */}
    </section>
  );
}
