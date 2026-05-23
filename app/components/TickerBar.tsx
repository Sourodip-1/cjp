'use client';

import { useEffect, useRef, useState } from 'react';

const TICKER_ITEMS = [
  'FILED UNDER: GENERAL DISGRUNTLEMENT',
  'SPONSORED BY NO ONE. FUNDED BY NOTHING.',
  'HQ: WHEREVER THE WIFI WORKS',
  'NOW ACCEPTING RANTS, RETWEETS, AND RESENTMENT',
  'PARTY LAUNCH · VOLUME 1',
  'FIVE DEMANDS. ZERO SPONSORS. ONE LARGE, STUBBORN SWARM.',
  'WE DIDN\'T CHOOSE THE COCKROACH LIFE. THE COCKROACH LIFE CHOSE US.',
  'OFFICIAL MOTTO: IF IT SURVIVES, WE SURVIVE.',
];

export default function TickerBar({ hidden }: { hidden: boolean }) {
  return (
    <div className={`ticker-wrapper${hidden ? ' hidden' : ''}`} aria-hidden="true">
      <div className="ticker-track">
        {/* Duplicate for seamless loop */}
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span key={i} className="ticker-item">
            {item}
            <span className="ticker-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
