import { useState } from "react";
import { CalendarCheck2, Monitor, Brain, Activity } from "lucide-react";

/* Booking form */
function BookingForm() {
  const [sent, setSent] = useState(false);
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      {sent ? (
        <div role="status" className="text-center">
          <h4 className="text-xl font-semibold text-gray-900">Thank you!</h4>
          <p className="mt-2 text-sm text-gray-600">
            Your request was received. We'll reach out to schedule shortly.
          </p>
        </div>
      ) : (
        <form
          aria-label="Booking request form"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">Full name</label>
            <input id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Full name" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email</label>
            <input id="email" name="email" required type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="you@email.com" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">Phone</label>
            <input id="phone" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="(555) 555-5555" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="reason">Reason for visit</label>
            <select id="reason" name="reason" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
              <option>New patient consult</option>
              <option>Medication management</option>
              <option>ADHD evaluation (adult)</option>
              <option>Follow-up</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">Notes</label>
            <textarea id="message" name="message" rows="3" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Briefly describe how we can help" />
          </div>

          <button className="w-full bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors" aria-label="Send booking request">
            <CalendarCheck2 size={18} className="inline mr-2" /> Send booking request
          </button>
        </form>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Compassionate Mental Health & Wellness Care
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Televisits • Adult Mental Health • Mid-Life Hormone Care
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-black text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-800 transition-colors"
          >
            Book a Telehealth Appointment
          </a>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Televisits Card */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Monitor size={32} className="text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Televisits.</h3>
              <p className="text-gray-600 mb-4">
                Secure, convenient virtual visits for adults. Access care on your schedule in the privacy of your chosen space.
              </p>
              <button className="text-green-600 font-medium hover:text-green-700 transition-colors">
                Learn more.
              </button>
            </div>

            {/* Adult Mental Health Card */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Brain size={32} className="text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Adult Mental Health.</h3>
              <p className="text-gray-600 mb-4">
                Evaluations, ongoing support, and personalized medication management. Your wellbeing, fully supported.
              </p>
              <button className="text-green-600 font-medium hover:text-green-700 transition-colors">
                Learn more.
              </button>
            </div>

            {/* Mid-Life Hormones Card */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Activity size={32} className="text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mid-Life Hormones.</h3>
              <p className="text-gray-600 mb-4">
                Evidence-based care to support hormonal balance. Restore wellness and improve quality of life.
              </p>
              <button className="text-green-600 font-medium hover:text-green-700 transition-colors">
                Learn more.
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 px-4 border-t border-blue-200 border-l border-blue-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Stephanie</h2>
              <p className="text-lg text-gray-600 mb-6">
                Family Nurse Practitioner with a master's focus in Psychiatric-Mental Health. 
                Experienced across primary care and behavioral health settings.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">APRN-CNP</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Psychiatric-Mental Health Specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Whole-person, trauma-informed care</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request an Appointment</h3>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-4">
            © {new Date().getFullYear()} Stephanie M. Nichols, APRN-CNP. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <button className="text-gray-500 hover:text-gray-700 transition-colors">Privacy Notice</button>
            <button className="text-gray-500 hover:text-gray-700 transition-colors">Patient Forms</button>
            <button className="text-gray-500 hover:text-gray-700 transition-colors">Accessibility</button>
          </div>
        </div>
      </footer>
    </main>
  );
}
