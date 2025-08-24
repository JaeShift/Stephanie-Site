import "./App.css";
import Page from "./Page";

export default function App() {
  return (
    <>
            {/* Header */}
      <header className="header">
        <div className="header__container">
          <a href="/" className="header__logo">
            Balanced Care Columbus
          </a>
          <a href="#patient-type" className="btn btn--secondary">
            Request Telehealth
          </a>
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
          <p className="hero__tagline">Televisits • Adult Mental Health • Mid-Life Hormones</p>
          <h2 className="hero__headline">
            Mental Health & <span>Wellness Care</span>
          </h2>
          <a 
            href="#patient-type" 
            className="btn btn--primary hero__cta"
            aria-label="Book a telehealth appointment"
          >
            Book a Telehealth Appointment →
          </a>
        </div>
      </section>

      {/* Main website content */}
      <Page />
    </>
  );
}
