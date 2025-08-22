import { useState } from "react";
import {
  Phone, Mail, MapPin, CalendarCheck2, FileText,
  ShieldCheck, Stethoscope, Brain
} from "lucide-react";

/* Booking form */
function BookingForm() {
  const [sent, setSent] = useState(false);
  return (
    <div className="card">
      {sent ? (
        <div role="status" className="text-center">
          <h4 className="text-xl font-semibold">Thank you!</h4>
          <p className="mt-1 text-sm text-slate-600">
            Your request was received. We’ll reach out to schedule shortly.
          </p>
        </div>
      ) : (
        <form
          aria-label="Booking request form"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="grid gap-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="label" htmlFor="name">Full name</label>
              <input id="name" name="name" required className="input" placeholder="Full name" />
            </div>
            <div>
              <label className="label" htmlFor="email">Email</label>
              <input id="email" name="email" required type="email" className="input" placeholder="you@email.com" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="label" htmlFor="phone">Phone</label>
              <input id="phone" name="phone" required className="input" placeholder="(555) 555-5555" />
            </div>
            <div>
              <label className="label" htmlFor="reason">Reason for visit</label>
              <select id="reason" name="reason" className="input">
                <option>New patient consult</option>
                <option>Medication management</option>
                <option>ADHD evaluation (adult)</option>
                <option>Follow-up</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="label" htmlFor="message">Notes</label>
            <textarea id="message" name="message" className="textarea" placeholder="Briefly describe how we can help" />
            <p className="hint mt-1">
              * Don’t include protected health information (PHI). We’ll collect clinical details through the patient portal if appropriate.
            </p>
          </div>

          <button className="btn-primary w-full sm:w-auto" aria-label="Send booking request">
            <CalendarCheck2 size={18} /> Send booking request
          </button>
        </form>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white text-slate-900">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="section flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-indigo-600 grid place-content-center text-white">
              <Brain size={18} aria-hidden />
            </div>
            <div>
              <p className="text-[11px] font-medium text-slate-500">Psychiatric-Mental Health • Family Practice</p>
              <h1 className="text-sm sm:text-base font-bold">Stephanie M. Nichols, APRN-CNP</h1>
            </div>
          </div>
          <nav className="hidden sm:flex items-center gap-2" aria-label="Primary">
            <a href="#services" className="chip">Services</a>
            <a href="#about" className="chip">About</a>
            <a href="#patients" className="chip">New Patients</a>
            <a href="#contact" className="btn-primary"><CalendarCheck2 size={18}/> Book</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="section pt-12 sm:pt-16 lg:pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="kicker">Private Nurse Practitioner Psychiatry</p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Family Nurse Practitioner with a master’s in Psychiatric-Mental Health
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-prose">
              Evaluation, diagnosis, and ongoing management with a whole-person, evidence-based approach.
              Collaborative treatment plans, clear education, and respectful listening.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-primary">
                <CalendarCheck2 size={18}/> Request an appointment
              </a>
              <span className="chip"><ShieldCheck size={14}/> APRN-CNP</span>
              <span className="chip"><Stethoscope size={14}/> Primary & Behavioral Health</span>
            </div>
          </div>

          <div className="card">
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                ["Anxiety disorders","Generalized, panic, social"],
                ["Mood disorders","Depression, bipolar"],
                ["Adult ADHD","Assessment & management"],
                ["PTSD & trauma","Trauma-informed care"],
                ["Sleep issues","Evaluation & strategies"],
                ["Women’s mental health","Across the lifespan"],
              ].map(([title,sub])=> (
                <li key={title} className="rounded-xl border border-slate-200 p-4 bg-white">
                  <p className="font-semibold">{title}</p>
                  <p className="text-sm text-slate-600">{sub}</p>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-slate-500">Care plans are individualized; this is a partial list.</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-xl font-bold">Comprehensive Psychiatric Evaluation</h3>
            <p className="mt-2 text-sm text-slate-700">
              In-depth history, diagnostic clarification, and collaborative planning.
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>• Medication management when appropriate</li>
              <li>• Lifestyle & sleep hygiene guidance</li>
              <li>• Coordination with therapists & PCPs</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold">Ongoing Medication Management</h3>
            <p className="mt-2 text-sm text-slate-700">Regular follow-ups to monitor response, side effects, and goals.</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>• Shared decision-making</li>
              <li>• Pharmacogenomics (if applicable)</li>
              <li>• Lab monitoring & safety reviews</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold">Telehealth & In-Person</h3>
            <p className="mt-2 text-sm text-slate-700">
              Secure video for established patients; in-person by appointment.
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>• HIPAA-conscious platforms</li>
              <li>• Flexible scheduling</li>
              <li>• Ohio patients (update as needed)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="card">
            <h3 className="text-2xl font-bold">Meet Stephanie</h3>
            <p className="mt-3 text-sm text-slate-700">
              Family Nurse Practitioner with a master’s focus in Psychiatric-Mental Health.
              Experienced across primary care and behavioral health settings.
            </p>
            <div id="credentials" className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-slate-200 p-4 bg-white">
                <p className="font-semibold">Credentials</p>
                <ul className="mt-1 text-slate-700 space-y-1">
                  <li>• APRN-CNP</li>
                  <li>• Master’s concentration: Psychiatric-Mental Health</li>
                  <li>• Family/Individual Across the Lifespan</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 p-4 bg-white">
                <p className="font-semibold">Care Philosophy</p>
                <p className="mt-1 text-slate-700">
                  Whole-person, trauma-informed, collaborative care.
                </p>
              </div>
            </div>
          </div>

          <BookingForm />
        </div>
      </section>

      {/* NEW PATIENTS */}
      <section id="patients" className="section py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <FileText size={18}/> New Patient Steps
            </h3>
            <ol className="mt-2 text-sm space-y-2 text-slate-700 list-decimal list-inside">
              <li>Submit a booking request.</li>
              <li>Complete electronic intake forms (sent securely).</li>
              <li>Attend your evaluation (telehealth or in-person).</li>
            </ol>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold">Insurance & Payment</h3>
            <p className="mt-2 text-sm text-slate-700">Add accepted plans or cash-pay rates.</p>
            <ul className="mt-2 text-sm text-slate-700 space-y-1">
              <li>• Superbills for out-of-network reimbursement</li>
              <li>• HSA/FSA accepted (if applicable)</li>
              <li>• Transparent pricing</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold">Crisis & Safety</h3>
            <p className="mt-2 text-sm text-slate-700">
              This practice does not provide emergency services.
            </p>
            <ul className="mt-2 text-sm text-slate-700 space-y-1">
              <li>• In crisis? Call 988 (Suicide & Crisis Lifeline)</li>
              <li>• Immediate danger? Call 911 or go to the nearest ER</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section py-12 lg:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="card">
            <h3 className="text-2xl font-bold">Get in touch</h3>
            <div className="mt-3 grid gap-2 text-sm text-slate-700">
              <p className="flex items-center gap-2"><Phone size={16}/> <span><strong>Phone:</strong> (xxx) xxx-xxxx</span></p>
              <p className="flex items-center gap-2"><Mail size={16}/> <span><strong>Email:</strong> hello@example.com</span></p>
              <p className="flex items-center gap-2"><MapPin size={16}/> <span><strong>Office:</strong> 123 Placeholder Rd, Suite 100</span></p>
              <a className="btn-ghost mt-2 inline-flex" href="mailto:hello@example.com?subject=Consult%20Request">
                Email to request an appointment
              </a>
              <p className="text-xs text-slate-500 mt-2">
                Email is for scheduling/administrative questions only. Don’t send PHI.
                Established patients: use the portal.
              </p>
            </div>
          </div>

          <BookingForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white/80">
        <div className="section py-8 text-sm text-slate-600">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Stephanie M. Nichols, APRN-CNP. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <button className="text-xs underline bg-transparent border-none cursor-pointer">Privacy Notice</button>
              <button className="text-xs underline bg-transparent border-none cursor-pointer">Patient Forms</button>
              <button className="text-xs underline bg-transparent border-none cursor-pointer">Accessibility</button>
            </div>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Information is educational only and does not establish a patient-provider relationship until intake is completed and confirmed.
          </p>
        </div>
      </footer>
    </main>
  );
}
