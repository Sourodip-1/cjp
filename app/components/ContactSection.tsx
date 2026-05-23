'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [twitterNever, setTwitterNever] = useState(false);
  const [twitterHandle, setTwitterHandle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const handleNeverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTwitterNever(e.target.checked);
    if (e.target.checked) {
      setTwitterHandle('Never');
    } else {
      setTwitterHandle('');
    }
  };

  const startCountdown = () => {
    let count = 5;
    setCountdown(5);
    setIsSuccess(true);
    const interval = setInterval(() => {
      count -= 1;
      setCountdown(count);
      if (count <= 0) {
        clearInterval(interval);
        window.location.href = '/';
      }
    }, 1000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formEl = e.currentTarget;
      const formData = new FormData(formEl);
      // Ensure captcha is disabled
      formData.append('_captcha', 'false');

      const response = await fetch("https://formsubmit.co/ajax/cjpwb.in@yopmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitting(false);
        startCountdown();
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="join" aria-labelledby="contact-title">
      {/* Success Confirmation Screen overlay */}
      {isSuccess && (
        <div className="form-success-overlay" role="dialog" aria-modal="true" aria-labelledby="success-title">
          <div className="form-success-modal">
            <div className="success-modal-header">
              <span id="success-title" className="success-modal-title">REGISTRATION CONFIRMED</span>
              <div className="success-decor-stripes">
                <span className="decor-strip saffron" />
                <span className="decor-strip green" />
              </div>
            </div>
            <div className="success-modal-body">
              <div className="success-icon-badge">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="success-check-icon"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="success-greeting">WELCOME TO THE SWARM!</h3>
              <p className="success-message">
                Your application has been received and processed. No verification, no audits, no work.
              </p>
              <div className="redirect-countdown-box">
                Redirecting to main site in <span className="countdown-number">{countdown}</span> seconds...
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="contact-inner">
        {/* ── LEFT COLUMN ── */}
        <div className="contact-left">
          <span className="contact-kicker">GET IN TOUCH</span>
          <h2 id="contact-title" className="contact-headline">
            Connect <br />
            with us.
          </h2>
          <p className="contact-description">
            Want to join, volunteer, complain, or send a meme? Use the form. We read everything. We reply to most things.
          </p>

          <div className="contact-info-list" role="list">
            <div className="contact-info-item" role="listitem">
              <span className="info-label">EMAIL</span>
              <span className="info-value">
                <a href="mailto:contact@cockroachjantaparty.org">contact@cockroachjantaparty.org</a>
              </span>
            </div>
            <div className="contact-info-item" role="listitem">
              <span className="info-label">PRESS</span>
              <span className="info-value">
                <a href="mailto:contact@cockroachjantaparty.org">contact@cockroachjantaparty.org</a>
              </span>
            </div>
            <div className="contact-info-item" role="listitem">
              <span className="info-label">HEADQUARTERS</span>
              <span className="info-value">Wherever the wifi works.</span>
            </div>
            <div className="contact-info-item" role="listitem">
              <span className="info-label">FOUNDER</span>
              <div className="founder-block">
                <span className="founder-name">Abhijeet Dipke</span>
                <span className="founder-title">FOUNDER & CONVENOR</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN (FORM) ── */}
        <div className="contact-right" id="contact">
          <div className="membership-form-card">
            {/* Header branding */}
            <div className="form-card-header">
              <div className="form-card-title-bar">
                <span className="form-card-title">MEMBERSHIP APPLICATION</span>
                <span className="form-card-serial">CJP-2026-NVR</span>
              </div>
              <div className="form-card-decor">
                <span className="decor-strip saffron" />
                <span className="decor-strip green" />
              </div>
            </div>

            {/* FormSubmit Form */}
            <form
              onSubmit={handleSubmit}
              className="membership-form"
            >
              {/* FormSubmit configurations */}
              <input type="hidden" name="_subject" value="New CJP Membership Application!" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_honey" style={{ display: 'none' }} />
              <input type="hidden" name="_captcha" value="false" />

              {/* Text Fields */}
              <div className="form-group">
                <label htmlFor="name-input">Name *</label>
                <input
                  type="text"
                  id="name-input"
                  name="name"
                  required
                  placeholder="e.g. Swarm Member #42"
                  className="brutalist-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone-input">Phone *</label>
                <input
                  type="tel"
                  id="phone-input"
                  name="phone"
                  required
                  placeholder="e.g. +91 XXXXX XXXXX"
                  className="brutalist-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email-input">Email *</label>
                <input
                  type="email"
                  id="email-input"
                  name="email"
                  required
                  placeholder="e.g. resident@sewer.in"
                  className="brutalist-input"
                />
              </div>

              {/* Questions */}
              <div className="form-group-radio">
                <span className="radio-group-label">Are you chronically online? *</span>
                <div className="brutalist-radio-options">
                  <label className="radio-option">
                    <input type="radio" name="chronically_online" value="Yes" required />
                    <span className="radio-text">Yes</span>
                  </label>
                  <label className="radio-option">
                    <input type="radio" name="chronically_online" value="No" />
                    <span className="radio-text">No</span>
                  </label>
                  <label className="radio-option">
                    <input type="radio" name="chronically_online" value="Maybe" />
                    <span className="radio-text">Maybe</span>
                  </label>
                </div>
              </div>

              <div className="form-group-radio">
                <span className="radio-group-label">Are you lazy? *</span>
                <div className="brutalist-radio-options">
                  <label className="radio-option">
                    <input type="radio" name="lazy" value="Yes" required />
                    <span className="radio-text">Yes</span>
                  </label>
                  <label className="radio-option">
                    <input type="radio" name="lazy" value="No" />
                    <span className="radio-text">No</span>
                  </label>
                  <label className="radio-option">
                    <input type="radio" name="lazy" value="Maybe" />
                    <span className="radio-text">Maybe</span>
                  </label>
                </div>
              </div>

              <div className="form-group-radio">
                <span className="radio-group-label">
                  Do you identify yourself as a &ldquo;cockroach&rdquo; as defined by the Hon&rsquo;ble CJI? *
                </span>
                <div className="brutalist-radio-options">
                  <label className="radio-option">
                    <input type="radio" name="identify_cockroach" value="Yes" required />
                    <span className="radio-text">Yes</span>
                  </label>
                  <label className="radio-option">
                    <input type="radio" name="identify_cockroach" value="No" />
                    <span className="radio-text">No</span>
                  </label>
                  <label className="radio-option">
                    <input type="radio" name="identify_cockroach" value="Maybe" />
                    <span className="radio-text">Maybe</span>
                  </label>
                </div>
              </div>

              {/* Twitter field */}
              <div className="form-group twitter-field">
                <div className="twitter-label-row">
                  <label htmlFor="twitter-input">Mention your twitter handle to join the Cockroach Janta Party</label>
                </div>
                <div className="twitter-input-wrapper">
                  <input
                    type="text"
                    id="twitter-input"
                    name="twitter_handle"
                    value={twitterHandle}
                    onChange={(e) => setTwitterHandle(e.target.value)}
                    disabled={twitterNever}
                    required
                    placeholder={twitterNever ? 'Never' : 'e.g. @lazy_swarmer'}
                    className="brutalist-input"
                  />
                  <label className="never-checkbox-label" htmlFor="never-checkbox">
                    <input
                      type="checkbox"
                      id="never-checkbox"
                      checked={twitterNever}
                      onChange={handleNeverChange}
                      className="brutalist-checkbox"
                    />
                    <span className="checkbox-text">Never</span>
                  </label>
                </div>
              </div>

              {/* Submit button */}
              <button type="submit" className="form-submit-btn">
                SUBMIT APPLICATION &rarr;
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
