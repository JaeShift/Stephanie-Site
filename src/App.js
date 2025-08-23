import "./App.css";
import Page from "./Page";

export default function App() {
  return (
    <>
      {/* Navigation header */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-900">Balanced Care Columbus</h1>
          </div>
          <button className="bg-black text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-800 transition-colors">
            Request Telehealth
          </button>
        </div>
      </nav>

      {/* Top headshot hero */}
      <header className="bcc-hero">
        <img
          src="/stephanie.jpg"
          alt="Stephanie Nichols, CNP"
          className="bcc-avatar"
          loading="eager"
          decoding="async"
        />
        <h1 className="bcc-hero-title">Stephanie M. Nichols, CNP</h1>
        <p className="bcc-hero-sub">Televisits • Adult Mental Health • Mid-Life Hormones</p>
      </header>

      {/* Main website content */}
      <Page />
    </>
  );
}
