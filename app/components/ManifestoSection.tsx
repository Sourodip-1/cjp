'use client';

export default function ManifestoSection() {
  return (
    <section id="manifesto" className="manifesto-section" aria-labelledby="manifesto-title">
      <div className="manifesto-inner">
        <div className="manifesto-header">
          <span className="manifesto-kicker">THE FIVE DEMANDS</span>
          <h2 id="manifesto-title" className="manifesto-title">The Manifesto.</h2>
          <p className="manifesto-subtitle">
            Read it once. Read it twice. Then send it to someone who needs to read it.
          </p>
        </div>

        <div className="manifesto-list">
          <div className="manifesto-item">
            <div className="manifesto-number">01</div>
            <div className="manifesto-text">
              <p>
                If the CJP comes in power, <span className="manifesto-highlight">no Chief Justice shall be granted a Rajya Sabha seat</span> as a post-retirement reward.
              </p>
            </div>
          </div>

          <div className="manifesto-item">
            <div className="manifesto-number">02</div>
            <div className="manifesto-text">
              <p>
                <span className="manifesto-highlight">Strict implementation of accountability measures</span> across all tiers of the judiciary to prevent backlogs.
              </p>
            </div>
          </div>

          <div className="manifesto-item">
            <div className="manifesto-number">03</div>
            <div className="manifesto-text">
              <p>
                <span className="manifesto-highlight">Women shall receive 50% reservation, not 33%</span>, without increasing the strength of Parliament. Additionally, <span className="manifesto-highlight">50% of all Cabinet positions</span> shall be reserved for women.
              </p>
            </div>
          </div>

          <div className="manifesto-item">
            <div className="manifesto-number">04</div>
            <div className="manifesto-text">
              <p>
                All media houses owned by <span className="manifesto-highlight">Ambani and Adani shall have their licences cancelled</span> to make way for truly independent media. Bank accounts of Godi media anchors shall be investigated.
              </p>
            </div>
          </div>

          <div className="manifesto-item">
            <div className="manifesto-number">05</div>
            <div className="manifesto-text">
              <p>
                Any MLA or MP who defects from one party to another shall be <span className="manifesto-highlight">barred from contesting elections — and from holding any public office — for a period of 20 years</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
