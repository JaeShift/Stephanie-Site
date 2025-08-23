import "./App.css";

export default function App() {
  return (
    <>
      {/* Top headshot hero */}
      <header className="bcc-hero">
        <img
          src="/stephanie.jpg"
          alt="Stephanie Nichols, CNP"
          className="bcc-avatar"
          loading="eager"
          decoding="async"
        />
        {/* Optional text under the photo: */}
        {/* <h1 className="bcc-hero-title">Stephanie Nichols, CNP</h1>
        <p className="bcc-hero-sub">Televisits • Adult Mental Health • Mid-Life Hormones</p> */}
      </header>

      {/* ...your existing sections/components... */}
    </>
  );
}
