import "./App.css";
import Page from "./Page";

export default function App() {
  return (
    <>
            {/* Header */}
      <header className="header sticky-header">
        <div className="header__container">
          <a href="/" className="header__logo">
            Balanced Care Columbus
          </a>
          <nav className="header__nav">
            <a href="#services" className="nav-link">Services</a>
            <a href="#about-stephanie" className="nav-link">About Stephanie</a>
            <a href="#what-to-expect" className="nav-link">What to Expect</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="#contact" className="btn btn--secondary">
              Book Appointment
            </a>
          </nav>
        </div>
      </header>

                    {/* Hero Section */}
              <section className="hero">
                <div className="hero__card">
                  <img
                    src="/stephanie.jpg"
                    alt="Stephanie Nichols, CNP"
                    className="hero__avatar"
                    loading="eager"
                    decoding="async"
                  />
                  <h1 className="hero__name">Stephanie M. Nichols, CNP</h1>
                  <p className="hero__tagline">Adult Mental Health • Women's Mid-Life Hormones • Telehealth</p>
                  <h2 className="hero__headline">
                    Mental health care that <span>understands you</span>
                  </h2>
                  <div className="availability-highlight">
                    <div className="highlight-badge">
                      <span className="highlight-icon">✓</span>
                      <strong>Now Accepting New Patients</strong> — While traditional practices have waiting lists, I have availability within 1-2 weeks
                    </div>
                  </div>
                  <div className="hero__welcome">
                    <p>
                      I'm Stephanie, and after 25+ years in healthcare, I now specialize in adult mental health for all patients, plus mid-life hormone wellness specifically for women. 
                      Whether you're struggling with anxiety, depression, ADHD, or life transitions, I provide personalized psychiatric care. For women navigating perimenopause 
                      and postmenopause, I also offer specialized hormone therapy. My telehealth-first approach means compassionate care from the comfort of your own home.
                    </p>
                  </div>
                  <div className="hero__benefits">
                    <div className="benefit-item">
                      <span className="benefit-icon">✓</span>
                      <span>Adult mental health care for all patients</span>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">✓</span>
                      <span>Specialized women's hormone therapy services</span>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">✓</span>
                      <span>25+ years of healthcare experience you can trust</span>
                    </div>
                  </div>
                  <a 
                    href="#patient-type" 
                    className="btn btn--primary btn--large hero__cta"
                    aria-label="Book your telehealth visit with Stephanie"
                  >
                    Book Your Telehealth Visit
                  </a>
                  <p className="hero__trust">
                    Insurance accepted • HIPAA-secure platform • New patients welcome
                  </p>
                </div>
              </section>

      {/* Main website content */}
      <Page />
    </>
  );
}
