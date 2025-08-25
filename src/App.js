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
            <a href="#patient-type" className="btn btn--secondary" aria-label="Schedule appointment with Stephanie Nichols, CNP">
              Schedule Appointment
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
          <p className="hero__tagline">Women's Mental Health • Mid-Life Hormones • Adult Psychiatric Care</p>
          <div className="hero__intro">
            <p>
              Specialized care for women navigating mental health challenges during life transitions. I understand how hormonal changes affect mood, anxiety, and overall well-being. My integrated approach addresses both mental health and hormonal factors for comprehensive care tailored specifically to women's unique needs.
            </p>
          </div>
          <a 
            href="#patient-type" 
            className="btn btn--primary btn--large hero__cta"
            aria-label="Schedule a consultation with Stephanie Nichols, CNP"
          >
            Schedule Consultation
          </a>
          <p className="hero__trust">
            HIPAA-compliant telehealth · Insurance accepted · Ohio licensed provider
          </p>
                </div>
              </section>

      {/* Main website content */}
      <Page />
    </>
  );
}
