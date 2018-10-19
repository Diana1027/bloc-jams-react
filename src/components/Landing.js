import React from 'react';

const Landing = () => (
  <section className="landing">
    <h1 className="hero-title">Turn The Music Up!</h1>
    <section className="selling points">
      <div className="point">
        <h2 className="point-title">Choose Your Music</h2>
        <p className="point-description">
          The World is Full of Music; Why Should You Have to Listen to Music that Someone Else
          Chose?
        </p>
      </div>
      <div className="point">
        <h2 className="point-title">Unlimited, Streaming, Ad-Free</h2>
        <p className="point-description">No Arbitrary Limits. No Distractions.</p>
      </div>
      <div className="point">
        <h2 className="point-title">Mobile Enabled</h2>
        <p className="point-description">
          Listen to Your Music on the Go. This Streaming Service is Available on All Mobile
          Platforms.
        </p>
      </div>
    </section>
  </section>
);

export default Landing;
