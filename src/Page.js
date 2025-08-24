

export default function Page() {
  return (
    <main>
      {/* About My Care Section */}
      <section className="section section--gradient">
        <div className="section__container">
          <h2 className="section__title">About My Care</h2>
          <p className="section__subtitle">
            Comprehensive mental health and wellness services designed to support your unique journey toward better health and well-being.
          </p>
          
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', maxWidth: '1000px', margin: '0 auto'}}>
            {/* What I Treat Card */}
            <div className="card">
              <h3 style={{textAlign: 'center', marginBottom: '24px'}}>What I Treat</h3>
              <ul className="about-care__list">
                <li className="about-care__item">
                  <div className="about-care__icon"></div>
                  <span>Anxiety & Depression</span>
                </li>
                <li className="about-care__item">
                  <div className="about-care__icon"></div>
                  <span>ADHD (Adult evaluation)</span>
                </li>
                <li className="about-care__item">
                  <div className="about-care__icon"></div>
                  <span>Life Transitions</span>
                </li>
                <li className="about-care__item">
                  <div className="about-care__icon"></div>
                  <span>Hormonal Changes</span>
                </li>
                <li className="about-care__item">
                  <div className="about-care__icon"></div>
                  <span>Medication Management</span>
                </li>
              </ul>
            </div>
            
            {/* How I Help Card */}
            <div className="card">
              <h3 style={{textAlign: 'center', marginBottom: '24px'}}>How I Help</h3>
              <ul className="about-care__list">
                <li className="about-care__item">
                  <div className="about-care__icon"></div>
                  <span>Secure telehealth visits</span>
                </li>
                <li className="about-care__item">
                  <div className="about-care__icon"></div>
                  <span>Personalized treatment plans</span>
                </li>
                <li className="about-care__item">
                  <div className="about-care__icon"></div>
                  <span>Same-day prescriptions</span>
                </li>
                <li className="about-care__item">
                  <div className="about-care__icon"></div>
                  <span>Flexible scheduling</span>
                </li>
                <li className="about-care__item">
                  <div className="about-care__icon"></div>
                  <span>Private, comfortable setting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Qualifications Section */}
      <section className="section section--alt">
        <div className="section__container">
          <h2 className="section__title">Why Choose Balanced Care</h2>
          <p className="section__subtitle">
            Board-certified expertise with a compassionate, patient-centered approach to mental health and wellness care.
          </p>
          <div className="qualifications">
            <div className="qualification-card">
              <div className="qualification-card__icon">
                <svg viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="qualification-card__title">Board Certified</h3>
              <p className="qualification-card__description">APRN-CNP with specialized psychiatric training</p>
            </div>
            <div className="qualification-card">
              <div className="qualification-card__icon">
                <svg viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="qualification-card__title">Experienced</h3>
              <p className="qualification-card__description">Primary care & behavioral health background</p>
            </div>
            <div className="qualification-card">
              <div className="qualification-card__icon">
                <svg viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="qualification-card__title">Compassionate</h3>
              <p className="qualification-card__description">Trauma-informed, whole-person care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credentials Section */}
      <section className="section">
        <div className="section__container">
          <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
            <h2 className="section__title">Trusted Mental Health Care</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', marginBottom: '40px'}}>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '32px', fontWeight: 'bold', color: 'var(--teal)', marginBottom: '8px'}}>APRN-CNP</div>
                <p style={{margin: '0', fontSize: '14px', color: 'var(--muted)'}}>Board Certified</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '32px', fontWeight: 'bold', color: 'var(--teal)', marginBottom: '8px'}}>5+ Years</div>
                <p style={{margin: '0', fontSize: '14px', color: 'var(--muted)'}}>Experience</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '32px', fontWeight: 'bold', color: 'var(--teal)', marginBottom: '8px'}}>100%</div>
                <p style={{margin: '0', fontSize: '14px', color: 'var(--muted)'}}>Telehealth</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '32px', fontWeight: 'bold', color: 'var(--teal)', marginBottom: '8px'}}>Ohio</div>
                <p style={{margin: '0', fontSize: '14px', color: 'var(--muted)'}}>Licensed</p>
              </div>
            </div>
            <p className="text-large" style={{color: 'var(--muted)', margin: '0'}}>
              "My goal is to provide compassionate, evidence-based mental health care that empowers you to achieve your wellness goals in a comfortable, private setting."
            </p>
            <p style={{marginTop: '16px', fontSize: '14px', color: 'var(--muted)', fontStyle: 'italic'}}>
              — Stephanie M. Nichols, APRN-CNP
            </p>
          </div>
        </div>
      </section>

            {/* Patient Type Selection */}
      <section id="patient-type" className="section">
        <div className="section__container">
          <h2 className="section__title">Ready to Get Started?</h2>
          <p className="section__subtitle">
            Choose your patient type below to begin your journey toward better mental health and wellness with personalized, professional care.
          </p>
          <div className="patient-types">
            <div className="patient-card">
              <div className="patient-card__icon">
                <svg viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="patient-card__title">New Patient</h3>
              <p className="patient-card__description">
                Beginning your wellness journey? I'll guide you through a comprehensive intake process and create a personalized care plan tailored to your unique needs.
              </p>
              <ul className="patient-card__list">
                <li>Initial consultation (60 minutes)</li>
                <li>Comprehensive mental health assessment</li>
                <li>Personalized treatment plan development</li>
                <li>Same-day prescription if appropriate</li>
              </ul>
              <a href="#contact" className="btn btn--primary">
                Schedule New Patient Visit →
              </a>
            </div>
            <div className="patient-card">
              <div className="patient-card__icon">
                <svg viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="patient-card__title">Existing Patient</h3>
              <p className="patient-card__description">
                Continuing your wellness journey? Schedule follow-up appointments for medication management, treatment adjustments, and ongoing support.
              </p>
              <ul className="patient-card__list">
                <li>Follow-up appointments (30-45 minutes)</li>
                <li>Medication management and adjustments</li>
                <li>Treatment plan modifications</li>
                <li>Ongoing wellness support and monitoring</li>
              </ul>
              <a href="#contact" className="btn btn--secondary">
                Schedule Follow-up Visit →
              </a>
            </div>
          </div>
        </div>
      </section>





            {/* Footer */}
      <footer className="footer">
        <div className="footer__container">
          <h3 className="footer__title">Balanced Care Columbus</h3>
          <p className="footer__description">
            Professional mental health and wellness care for your journey to better health
          </p>
          <hr className="footer__divider" />
          <div className="footer__bottom">
            <p className="footer__copyright">
              © {new Date().getFullYear()} Stephanie M. Nichols, APRN-CNP. All rights reserved.
            </p>
            <div className="footer__links">
              <a href="#privacy" className="footer__link">Privacy Notice</a>
              <a href="#forms" className="footer__link">Patient Forms</a>
              <a href="#accessibility" className="footer__link">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
