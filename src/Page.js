import { useState } from "react";
import { CalendarCheck2, Monitor, Brain, Activity } from "lucide-react";

/* Booking form */
function BookingForm() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      {sent ? (
        <div role="status" className="text-center py-12">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h4 className="text-2xl font-bold text-slate-900 mb-3">Thank you!</h4>
          <p className="text-lg text-slate-600">
            Your request was received. We'll reach out to schedule shortly.
          </p>
        </div>
      ) : (
        <form
          aria-label="Booking request form"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3" htmlFor="name">Full name</label>
              <input 
                id="name" 
                name="name" 
                required 
                className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-slate-50 focus:bg-white hover:border-slate-300" 
                placeholder="Your full name" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3" htmlFor="email">Email</label>
              <input 
                id="email" 
                name="email" 
                required 
                type="email" 
                className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-slate-50 focus:bg-white hover:border-slate-300" 
                placeholder="your@email.com" 
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3" htmlFor="phone">Phone</label>
            <input 
              id="phone" 
              name="phone" 
              required 
              className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-slate-50 focus:bg-white hover:border-slate-300" 
              placeholder="(555) 555-5555" 
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3" htmlFor="reason">Reason for visit</label>
            <select 
              id="reason" 
              name="reason" 
              className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-slate-50 focus:bg-white hover:border-slate-300"
            >
              <option>New patient consult</option>
              <option>Medication management</option>
              <option>ADHD evaluation (adult)</option>
              <option>Follow-up</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3" htmlFor="message">Notes</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-slate-50 focus:bg-white hover:border-slate-300 resize-none" 
              placeholder="Briefly describe how we can help you..."
            />
          </div>

          <button className="group w-full text-white font-semibold py-4 px-6 rounded-xl transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3" style={{background: `linear-gradient(to right, var(--accent), var(--accent-hover))`}} aria-label="Send booking request">
            <CalendarCheck2 size={20} className="group-hover:scale-110 transition-transform duration-300" />
            Send booking request
            <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </form>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen" style={{background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary), var(--bg-primary))'}}>
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-24 px-4 overflow-hidden" style={{background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary))'}}>
        <div className="absolute inset-0 opacity-30" style={{background: 'radial-gradient(circle at 50% 50%, var(--tertiary-accent), transparent 70%)'}}></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-up opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight tracking-tight" style={{background: `linear-gradient(to right, var(--text-primary), var(--accent))`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Mental Health &<br/>
              <span style={{background: `linear-gradient(to right, var(--accent), var(--secondary-accent))`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Wellness Care</span>
            </h1>
          </div>
          <div className="animate-fade-in-up opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{color: 'var(--text-secondary)'}}>
              Experience compassionate, professional care from the comfort of your home
            </p>
          </div>
          <div className="animate-fade-in-up opacity-0" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
            <a 
              href="#patient-type" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden"
              style={{background: `linear-gradient(to right, var(--accent), var(--accent-hover))`}}
            >
              <span className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{background: `linear-gradient(to right, var(--accent-hover), var(--accent))`}}></span>
              <span className="relative flex items-center gap-3">
                <CalendarCheck2 size={20} />
                Book a Telehealth Appointment
                <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </a>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-40 animate-float" style={{backgroundColor: 'var(--tertiary-accent)'}}></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full opacity-30 animate-float-delayed" style={{backgroundColor: 'var(--secondary-accent)'}}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full opacity-25 animate-float-slow" style={{backgroundColor: 'var(--warm-accent)'}}></div>
      </section>

      {/* EXPANDED MEET STEPHANIE SECTION */}
      <section className="py-24 px-4 relative" style={{background: 'var(--bg-primary)'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: 'var(--text-primary)'}}>
              Meet Stephanie M. Nichols, CNP
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{color: 'var(--text-secondary)'}}>
              Your partner in mental health and wellness, dedicated to providing compassionate, evidence-based care
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Professional Background */}
            <div className="space-y-8">
              <div className="p-8 rounded-3xl shadow-lg" style={{backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)'}}>
                <h3 className="text-2xl font-bold mb-6" style={{color: 'var(--text-primary)'}}>
                  Professional Background
                </h3>
                <div className="space-y-4 text-lg leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                  <p>
                    I am a board-certified Family Nurse Practitioner with specialized training in Psychiatric-Mental Health. 
                    With extensive experience across primary care and behavioral health settings, I bring a comprehensive 
                    understanding of both physical and mental wellness to my practice.
                  </p>
                  <p>
                    My approach combines evidence-based medical treatment with compassionate, person-centered care. 
                    I believe in treating the whole person, not just symptoms, and work collaboratively with each patient 
                    to develop personalized treatment plans that fit their unique needs and goals.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl shadow-md" style={{backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border)'}}>
                  <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center" style={{backgroundColor: 'var(--accent)'}}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg mb-2" style={{color: 'var(--text-primary)'}}>APRN-CNP Certified</h4>
                  <p className="text-sm" style={{color: 'var(--text-secondary)'}}>Advanced Practice Registered Nurse - Certified Nurse Practitioner</p>
                </div>

                <div className="p-6 rounded-2xl shadow-md" style={{backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border)'}}>
                  <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center" style={{backgroundColor: 'var(--secondary-accent)'}}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg mb-2" style={{color: 'var(--text-primary)'}}>Specialized Training</h4>
                  <p className="text-sm" style={{color: 'var(--text-secondary)'}}>Master's focus in Psychiatric-Mental Health</p>
                </div>
              </div>
            </div>

            {/* Treatment Philosophy & Specialties */}
            <div className="space-y-8">
              <div className="p-8 rounded-3xl shadow-lg" style={{backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)'}}>
                <h3 className="text-2xl font-bold mb-6" style={{color: 'var(--text-primary)'}}>
                  Treatment Philosophy
                </h3>
                <div className="space-y-4 text-lg leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                  <p>
                    I practice trauma-informed, whole-person care that recognizes the interconnection between mental, 
                    physical, and social well-being. My goal is to create a safe, non-judgmental space where you feel 
                    heard, understood, and empowered in your healing journey.
                  </p>
                  <p>
                    Whether you're seeking support for anxiety, depression, ADHD, hormonal changes, or life transitions, 
                    I'm here to walk alongside you with patience, expertise, and genuine care.
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-3xl shadow-lg" style={{backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border)'}}>
                <h3 className="text-xl font-bold mb-6" style={{color: 'var(--text-primary)'}}>
                  Areas of Expertise
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    'Adult Mental Health Assessments',
                    'Anxiety & Depression Treatment',
                    'ADHD Evaluation & Management',
                    'Medication Management',
                    'Mid-Life Hormonal Health',
                    'Trauma-Informed Care',
                    'Telehealth Services',
                    'Preventive Mental Health'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{backgroundColor: 'var(--accent)'}}></div>
                      <span style={{color: 'var(--text-secondary)'}}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Personal Touch */}
          <div className="mt-16 text-center p-8 rounded-3xl shadow-lg" style={{backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)'}}>
            <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--text-primary)'}}>
              Why Choose Balanced Care Columbus?
            </h3>
            <p className="text-lg max-w-4xl mx-auto leading-relaxed" style={{color: 'var(--text-secondary)'}}>
              I understand that seeking mental health care can feel overwhelming. That's why I've designed my practice 
              to be as accessible and comfortable as possible. Through secure telehealth visits, you can receive 
              professional care from the privacy and comfort of your own space, on your schedule. 
              I'm committed to making your wellness journey as smooth and supportive as possible.
            </p>
          </div>
        </div>
      </section>

      {/* PATIENT TYPE SELECTION */}
      <section id="patient-type" className="py-20 px-4 relative overflow-hidden" style={{background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary))'}}>
        <div className="absolute inset-0 opacity-20" style={{background: 'radial-gradient(circle at 70% 30%, var(--tertiary-accent), transparent 50%)'}}></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{background: `linear-gradient(to right, var(--accent), var(--secondary-accent))`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Welcome to Balanced Care
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{color: 'var(--text-secondary)'}}>
              Choose your patient type to get started with personalized care
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* New Patient Card */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden" style={{borderColor: 'var(--border)'}}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary))'}}></div>
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300" style={{background: `linear-gradient(to bottom right, var(--accent), var(--accent-hover))`}}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:transition-colors duration-300" style={{color: 'var(--text-primary)'}}>
                  New Patient
                </h3>
                <p className="mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                  Starting your wellness journey with us? We'll guide you through a comprehensive intake process and create a personalized care plan.
                </p>
                <ul className="text-left mb-8 space-y-2" style={{color: 'var(--text-secondary)'}}>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: 'var(--accent)'}}></div>
                    Initial consultation (60 minutes)
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: 'var(--accent)'}}></div>
                    Comprehensive health assessment
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: 'var(--accent)'}}></div>
                    Personalized treatment plan
                  </li>
                </ul>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center w-full text-white font-semibold py-4 px-6 rounded-xl transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl gap-2"
                  style={{background: `linear-gradient(to right, var(--accent), var(--accent-hover))`}}
                >
                  Schedule New Patient Visit
                  <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>

            {/* Existing Patient Card */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden" style={{borderColor: 'var(--border)'}}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary))'}}></div>
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300" style={{background: `linear-gradient(to bottom right, var(--secondary-accent), var(--warm-accent))`}}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:transition-colors duration-300" style={{color: 'var(--text-primary)'}}>
                  Existing Patient
                </h3>
                <p className="mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                  Welcome back! Continue your care journey with follow-up appointments and ongoing support for your wellness goals.
                </p>
                <ul className="text-left mb-8 space-y-2" style={{color: 'var(--text-secondary)'}}>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: 'var(--secondary-accent)'}}></div>
                    Follow-up appointments (30-45 minutes)
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: 'var(--secondary-accent)'}}></div>
                    Medication management
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: 'var(--secondary-accent)'}}></div>
                    Ongoing wellness support
                  </li>
                </ul>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center w-full text-white font-semibold py-4 px-6 rounded-xl transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl gap-2"
                  style={{background: `linear-gradient(to right, var(--secondary-accent), var(--warm-accent))`}}
                >
                  Schedule Follow-up Visit
                  <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="py-24 px-4 relative" style={{background: 'var(--bg-primary)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: 'var(--text-primary)'}}>
              Comprehensive Care Solutions
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{color: 'var(--text-secondary)'}}>
              Professional healthcare services designed for your convenience and comfort
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Televisits Card */}
            <div className="group relative bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden" style={{borderColor: 'var(--border)'}}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary))'}}></div>
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" style={{background: `linear-gradient(to bottom right, var(--accent), var(--accent-hover))`}}>
                  <Monitor size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 transition-colors duration-300" style={{color: 'var(--text-primary)'}}>
                  Televisits
                </h3>
                <p className="mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                  Secure, convenient virtual visits for adults. Access care on your schedule in the privacy of your chosen space.
                </p>
                <button className="inline-flex items-center font-semibold transition-colors group-hover:translate-x-1 duration-300" style={{color: 'var(--accent)'}}>
                  Learn more
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>

            {/* Adult Mental Health Card */}
            <div className="group relative bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden" style={{borderColor: 'var(--border)'}}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary))'}}></div>
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" style={{background: `linear-gradient(to bottom right, var(--secondary-accent), var(--warm-accent))`}}>
                  <Brain size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 transition-colors duration-300" style={{color: 'var(--text-primary)'}}>
                  Adult Mental Health
                </h3>
                <p className="mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                  Evaluations, ongoing support, and personalized medication management. Your wellbeing, fully supported.
                </p>
                <button className="inline-flex items-center font-semibold transition-colors group-hover:translate-x-1 duration-300" style={{color: 'var(--secondary-accent)'}}>
                  Learn more
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>

            {/* Mid-Life Hormones Card */}
            <div className="group relative bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden" style={{borderColor: 'var(--border)'}}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary))'}}></div>
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" style={{background: `linear-gradient(to bottom right, var(--tertiary-accent), var(--success))`}}>
                  <Activity size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 transition-colors duration-300" style={{color: 'var(--text-primary)'}}>
                  Mid-Life Hormones
                </h3>
                <p className="mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                  Evidence-based care to support hormonal balance. Restore wellness and improve quality of life.
                </p>
                <button className="inline-flex items-center font-semibold transition-colors group-hover:translate-x-1 duration-300" style={{color: 'var(--tertiary-accent)'}}>
                  Learn more
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* FOOTER */}
      <footer className="py-16 px-4 relative overflow-hidden" style={{background: 'linear-gradient(135deg, var(--text-primary), var(--text-secondary))'}}>
        <div className="absolute inset-0 opacity-20" style={{background: 'linear-gradient(to bottom right, var(--accent), var(--secondary-accent))'}}></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Balanced Care Columbus
            </h3>
            <p className="text-xl max-w-2xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              Professional mental health and wellness care for your journey to better health
            </p>
          </div>
          
          <div className="pt-8" style={{borderTop: '1px solid rgba(255, 255, 255, 0.2)'}}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p style={{color: 'rgba(255, 255, 255, 0.7)'}}>
                © {new Date().getFullYear()} Stephanie M. Nichols, APRN-CNP. All rights reserved.
              </p>
              <div className="flex gap-8">
                <button className="transition-colors duration-300 hover:scale-105 transform" style={{color: 'rgba(255, 255, 255, 0.7)'}} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>
                  Privacy Notice
                </button>
                <button className="transition-colors duration-300 hover:scale-105 transform" style={{color: 'rgba(255, 255, 255, 0.7)'}} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>
                  Patient Forms
                </button>
                <button className="transition-colors duration-300 hover:scale-105 transform" style={{color: 'rgba(255, 255, 255, 0.7)'}} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>
                  Accessibility
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
