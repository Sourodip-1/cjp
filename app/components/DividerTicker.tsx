'use client';

const TICKER_ITEMS = [
  'Progress',
  'You Cannot Squash A Movement',
  'Together We Survive'
];

export default function DividerTicker() {
  return (
    <div className="divider-ticker-wrapper" aria-hidden="true">
      <div className="ticker-track divider-track">
        {/* Duplicate even number of times (8) for a seamless translateX(-50%) loop */}
        {Array(8).fill(TICKER_ITEMS).flat().map((item, i) => (
          <span key={i} className="divider-ticker-item">
            {item}
            <span className="divider-ticker-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
