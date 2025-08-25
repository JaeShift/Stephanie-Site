

export default function Page() {
  return (
    <main>
      {/* About My Care Section */}
      <section id="services" className="section section--gradient">
        <div className="section__container">
          <h2 className="section__title">Women's Mental Health & Hormone Specialties</h2>
          <p className="section__subtitle">
            Integrated psychiatric and hormonal care designed specifically for women during life transitions. 
            Understanding how hormones impact mental health for comprehensive, compassionate treatment.
          </p>
          
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', maxWidth: '1000px', margin: '0 auto'}}>
            {/* What I Treat Card */}
            <div className="card specialty-card">
              <div className="card-header">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                                        <h3>Women's Mental Health Specialties</h3>
        </div>
                      <ul className="specialty-list">
                        <li className="specialty-item">
                          <span className="specialty-name">Perimenopause & Menopause Depression</span>
                          <span className="specialty-desc">Mood changes during hormonal transitions</span>
                        </li>
                        <li className="specialty-item">
                          <span className="specialty-name">Hormone-Related Anxiety</span>
                          <span className="specialty-desc">Anxiety linked to estrogen fluctuations</span>
                        </li>
                        <li className="specialty-item">
                          <span className="specialty-name">PMDD & Severe PMS</span>
                          <span className="specialty-desc">Premenstrual dysphoric disorder treatment</span>
                        </li>
                        <li className="specialty-item">
                          <span className="specialty-name">Postpartum Mental Health</span>
                          <span className="specialty-desc">Depression and anxiety after childbirth</span>
                        </li>
                        <li className="specialty-item">
                          <span className="specialty-name">Adult ADHD in Women</span>
                          <span className="specialty-desc">Often undiagnosed, especially mid-life</span>
                        </li>
                        <li className="specialty-item">
                          <span className="specialty-name">Life Transition Support</span>
                          <span className="specialty-desc">Empty nest, divorce, career changes, aging parents</span>
                        </li>
                      </ul>
          </div>
          
            {/* How I Help Card */}
            <div className="card approach-card">
              <div className="card-header">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                </div>
                                        <h3>Integrated Care Approach</h3>
                      </div>
                      <ul className="approach-list">
                        <li className="approach-item">
                          <span className="approach-name">Hormone-Informed Mental Health</span>
                          <span className="approach-desc">Understanding how estrogen, progesterone affect mood</span>
                        </li>
                        <li className="approach-item">
                          <span className="approach-name">Life Stage-Specific Treatment</span>
                          <span className="approach-desc">Perimenopause, menopause, postpartum focused care</span>
                        </li>
                        <li className="approach-item">
                          <span className="approach-name">Women-Centered Therapy</span>
                          <span className="approach-desc">Understanding unique female experiences and challenges</span>
                        </li>
                        <li className="approach-item">
                          <span className="approach-name">Collaborative Care Planning</span>
                          <span className="approach-desc">Working with your OB/GYN or primary care provider</span>
                        </li>
                        <li className="approach-item">
                          <span className="approach-name">Convenient Telehealth</span>
                          <span className="approach-desc">Private, secure appointments from home</span>
                        </li>
                      </ul>
          </div>
          </div>

          <div style={{textAlign: 'center', marginTop: '40px'}}>
            <a href="#patient-type" className="btn btn--primary" aria-label="Schedule consultation with Stephanie Nichols, CNP">
              Schedule Consultation
            </a>
            <p style={{fontSize: '14px', color: 'var(--muted)', marginTop: '12px'}}>
              Insurance accepted · Ohio licensed provider · Accepting new patients
            </p>
          </div>
        </div>
      </section>

      

      {/* Social Proof & Results Section */}
      <section id="about-stephanie" className="section">
        <div className="section__container">
          <div style={{textAlign: 'center', maxWidth: '900px', margin: '0 auto'}}>
                        <h2 className="section__title">About Stephanie M. Nichols, CNP</h2>
            <p className="section__subtitle" style={{marginBottom: '24px'}}>
              Specialized in Women's Mental Health & Mid-Life Hormones
            </p>
            <div className="bio-content">
              <p>I am a board-certified psychiatric nurse practitioner with over 25 years of healthcare experience, specializing in the unique mental health needs of women during life transitions. My practice focuses on the connection between hormonal changes and mental wellness, providing integrated care for women navigating perimenopause, menopause, postpartum challenges, and other hormone-related mood disorders.</p>
            </div>
            <div style={{textAlign: 'center', marginTop: '32px'}}>
              <a href="#patient-type" className="btn btn--primary" aria-label="Schedule appointment with Stephanie Nichols, CNP">
                Schedule Appointment
              </a>
          </div>

                        {/* Professional Qualifications */}
            <h3 style={{textAlign: 'center', marginTop: '48px', marginBottom: '32px', color: 'var(--ink)'}}>Professional Qualifications & Expertise</h3>
            <div className="stats-grid">
              <div className="stat-card competitive-advantage">
                <div className="stat-number">Women's Health</div>
                <div className="stat-detail">Specialized training in hormone-mental health connections.</div>
              </div>
              <div className="stat-card competitive-advantage">
                <div className="stat-number">25+ Years</div>
                <div className="stat-detail">Extensive experience with women's life transitions.</div>
              </div>
              <div className="stat-card competitive-advantage">
                <div className="stat-number">Integrated Care</div>
                <div className="stat-detail">Understanding how hormones affect mood and mental health.</div>
              </div>
    </div>

            {/* Professional Statement */}
            <div className="personal-story-card">
              <h3 style={{textAlign: 'center', marginBottom: '24px', color: 'var(--teal)'}}>Why I Specialize in Women's Mental Health & Hormones</h3>
              <p className="personal-story-text">
                "During my years in family medicine, I noticed a troubling pattern: women coming in feeling anxious, depressed, or 'not themselves' were often dismissed or given quick fixes. A 45-year-old woman with sudden panic attacks was told it was 'just stress.' Women in perimenopause describing mood swings and brain fog were told 'it's just part of getting older.' New mothers struggling with postpartum depression waited months for proper care.
              </p>
              <p className="personal-story-text">
                I realized these women needed someone who understood the intricate connection between hormones and mental health. That's why I specialized exclusively in women's psychiatric care with advanced training in hormone therapy. Because your mental health journey is unique to your life stage, your hormones, and your experiences as a woman - and you deserve care that honors all of that."
              </p>
              <p className="personal-story-signature">
                — Stephanie M. Nichols, APRN-CNP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Expertise Section */}
      <section className="section section--alt">
        <div className="section__container">
          <h2 className="section__title">Education, Training & Professional Memberships</h2>
          <p className="section__subtitle">
            Ongoing education and professional development to provide you with the most current, evidence-based care
          </p>
          
          <div className="credentials-grid">
            <div className="credential-card">
              <div className="credential-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <h4>Education</h4>
              <ul>
                <li><strong>Master of Science in Nursing</strong><br/>Psychiatric Mental Health NP<br/>The Ohio State University</li>
                <li><strong>Bachelor of Science in Nursing</strong><br/>Otterbein University</li>
                <li><strong>Board Certification</strong><br/>APRN-CNP, Psychiatric Specialty</li>
              </ul>
            </div>
            
            <div className="credential-card">
              <div className="credential-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
              </div>
              <h4>Continuing Education & Certifications</h4>
              <ul>
                <li><strong>Women's Hormone Therapy Certification</strong><br/>Latest training in bioidentical HRT (2024)</li>
                <li><strong>Adult ADHD Specialist Training</strong><br/>Advanced assessment and treatment (2023)</li>
                <li><strong>Trauma-Informed Care Certification</strong><br/>Understanding trauma's impact on mental health</li>
                <li><strong>Telehealth Best Practices</strong><br/>Specialized training in virtual care delivery</li>
              </ul>
            </div>

            <div className="credential-card">
              <div className="credential-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h4>Professional Memberships</h4>
              <ul>
                <li><strong>American Psychiatric Nurses Association</strong><br/>Active member since 2018</li>
                <li><strong>International Society for Women's Health</strong><br/>Specializing in menopause care</li>
                <li><strong>Ohio Board of Nursing</strong><br/>Licensed APRN in good standing</li>
                <li><strong>American Association of Nurse Practitioners</strong><br/>Committed to advancing NP practice</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials Section */}
      <section className="section">
        <div className="section__container">
          <h2 className="section__title">What My Patients Say</h2>
          <p className="section__subtitle">
            Real stories from real people who've found their path to better mental health
          </p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card-new">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-quote">
                "Stephanie saved my life during perimenopause. I was having panic attacks, couldn't sleep, and felt like I was losing my mind. She was the first provider who actually listened and understood the connection between my hormones and mental health. Six months later, I feel like myself again."
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <span className="author-name">Sarah M.</span>
                  <span className="author-detail">Age 47, Columbus • Perimenopause & Anxiety</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card-new">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-quote">
                "I've struggled with ADHD my whole life but was never properly diagnosed until I met Stephanie. She took the time to really understand my symptoms and how they affected my work and relationships. The medication she prescribed changed everything - I can finally focus and feel productive."
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <span className="author-name">Michael R.</span>
                  <span className="author-detail">Age 34, Dublin • Adult ADHD</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card-new">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-quote">
                "After my divorce, I was dealing with depression and anxiety like never before. Stephanie didn't just prescribe medication - she helped me understand what I was going through and gave me tools to cope. Her telehealth appointments were perfect during a time when I could barely leave the house."
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <span className="author-name">Jennifer L.</span>
                  <span className="author-detail">Age 41, Westerville • Depression & Life Transitions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

                          {/* Patient Type Selection */}
              <section id="patient-type" className="section">
                <div className="section__container">
                  <h2 className="section__title">Schedule Your Appointment</h2>
                  <p className="section__subtitle">
                    Professional psychiatric care tailored to your individual needs and circumstances.
                  </p>
                  <div className="patient-types">
                    <div className="patient-card">
                      <div className="patient-card__icon">
                        <svg viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <h3 className="patient-card__title">New Patient Consultation</h3>
                      <p className="patient-card__description">
                        Comprehensive assessment focusing on the unique intersection of mental health and hormonal factors affecting women.
                      </p>
                      <ul className="patient-card__list">
                        <li>90-minute detailed consultation</li>
                        <li>Hormone and mental health history assessment</li>
                        <li>Life stage-specific evaluation (perimenopause, postpartum, etc.)</li>
                        <li>Integrated treatment plan for mental health and hormones</li>
                        <li>Collaboration with your OB/GYN or primary care if needed</li>
                      </ul>
                      <a href="#contact" className="btn btn--primary" aria-label="Schedule new patient consultation">
                        Schedule New Patient Consultation
                      </a>
                      <p className="patient-card__trust">
                        <strong>Insurance Continuity:</strong> I accept the same major insurance plans from my time at Central Ohio Primary Care, 
                        ensuring seamless coverage transition • HIPAA-compliant telehealth platform
                      </p>
                    </div>
                    <div className="patient-card">
                      <div className="patient-card__icon">
                        <svg viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="patient-card__title">Follow-Up Appointment</h3>
                      <p className="patient-card__description">
                        Ongoing care focused on your mental health journey as your hormones and life circumstances change.
                      </p>
                      <ul className="patient-card__list">
                        <li>30-45 minute focused appointments</li>
                        <li>Hormone and mental health symptom tracking</li>
                        <li>Medication adjustments for changing needs</li>
                        <li>Life stage transition support</li>
                        <li>Coordination with other women's health providers</li>
                      </ul>
                      <a href="#contact" className="btn btn--primary" aria-label="Schedule follow-up appointment">
                        Schedule Follow-Up
                      </a>
                      <p className="patient-card__trust">
                        <strong>Insurance Continuity:</strong> I accept the same major insurance plans from my time at Central Ohio Primary Care, 
                        ensuring seamless coverage transition • HIPAA-compliant telehealth platform
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* What to Expect Section */}
              <section id="what-to-expect" className="section section--gradient">
                <div className="section__container">
                  <h2 className="section__title">What to Expect: Your Journey with Me</h2>
                  <p className="section__subtitle">
                    Transparency and clear expectations make for better care. Here's exactly what happens when you choose Balanced Care Columbus.
                  </p>
                  
                  <div className="journey-steps">
                    <div className="step-card">
                      <div className="step-number">1</div>
                      <h4>Initial Contact</h4>
                      <p><strong>Within 24 hours:</strong> My team will contact you to schedule your appointment and verify insurance benefits. We'll also send you secure intake forms to complete before your visit.</p>
                      <div className="step-detail">
                        <span>Intake forms take about 15 minutes to complete</span>
                      </div>
                    </div>
                    
                    <div className="step-card">
                      <div className="step-number">2</div>
                      <h4>Your First Appointment</h4>
                      <p><strong>90 minutes dedicated to you:</strong> We'll discuss your concerns, medical history, current symptoms, and goals. I'll explain my assessment and we'll create your personalized treatment plan together.</p>
                      <div className="step-detail">
                        <span>Secure telehealth platform - no rushing, no interruptions</span>
                      </div>
                    </div>
                    
                    <div className="step-card">
                      <div className="step-number">3</div>
                      <h4>Treatment Begins</h4>
                      <p><strong>Same day when appropriate:</strong> If medication is recommended, prescriptions are sent directly to your pharmacy. Lab orders (if needed) are sent to your preferred lab.</p>
                      <div className="step-detail">
                        <span>Electronic prescriptions - no waiting, no extra trips</span>
                      </div>
                    </div>
                    
                    <div className="step-card">
                      <div className="step-number">4</div>
                      <h4>Ongoing Support</h4>
                      <p><strong>Regular follow-ups:</strong> We'll monitor your progress, adjust treatments as needed, and ensure you're getting the results you deserve. Emergency support available between visits.</p>
                      <div className="step-detail">
                        <span>Crisis support available - you're never on your own</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="expectations-note">
                    <h4>What Makes This Different</h4>
                    <div className="difference-grid">
                                            <div className="difference-item">
                        <div>
                          <strong>Extended Appointment Times</strong>
                          <p>90-minute initial consultations, 45-minute follow-ups</p>
                        </div>
                      </div>
                      <div className="difference-item">
                        <div>
                          <strong>Continuity of Care</strong>
                          <p>Same provider for every appointment ensuring consistent treatment</p>
                        </div>
                      </div>
                      <div className="difference-item">
            <div>
                          <strong>Interim Support</strong>
                          <p>Available for urgent clinical concerns between scheduled visits</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Availability Section */}
              <section className="section section--urgent">
                <div className="section__container">
                  <div style={{textAlign: 'center', maxWidth: '700px', margin: '0 auto'}}>
                    <h2 className="section__title">Specialized Women's Health Expertise Available Now</h2>
                    <p className="section__subtitle">
                      Finding a provider who understands both hormones and mental health can be challenging. While other practices 
                      treat these separately, I offer integrated care specifically for women navigating mid-life transitions.
                    </p>
                    
                    <div className="availability-features">
                      <div className="availability-feature">
                        <span className="availability-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                          </svg>
                        </span>
                        <span>Evening & weekend appointments available</span>
                      </div>
                      <div className="availability-feature">
                        <span className="availability-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                          </svg>
                        </span>
                        <span>Hormone & mental health integration</span>
                      </div>
                      <div className="availability-feature">
                        <span className="availability-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                            <line x1="8" y1="21" x2="16" y2="21"/>
                            <line x1="12" y1="17" x2="12" y2="21"/>
                          </svg>
                        </span>
                        <span>Specialized women's telehealth care</span>
                      </div>
                    </div>
                    
                    <a href="#contact" className="btn btn--primary btn--large">
                      Request Appointment →
                    </a>
                    <p style={{fontSize: '14px', color: 'var(--muted)', marginTop: '16px'}}>
                      Specialized women's health consultations available • Comprehensive hormone & mental health assessments
                    </p>
                  </div>
                </div>
              </section>





                          {/* Personal Closing Section */}
              <section className="section section--personal">
                <div className="section__container">
                  <div style={{textAlign: 'center', maxWidth: '700px', margin: '0 auto'}}>
                    <div className="personal-message">
                      <p className="personal-message__text">
                        If you are experiencing mental health challenges or hormone-related symptoms, professional treatment can help. I am currently accepting new patients and am available to discuss how my services might benefit your specific situation.
                      </p>
                    </div>
                    <a href="#contact" className="btn btn--primary btn--large" aria-label="Schedule consultation with Stephanie Nichols, CNP">
                      Schedule Consultation
                    </a>
                    <p style={{fontSize: '14px', color: 'var(--muted)', marginTop: '12px'}}>
                      Accepting new patients · Ohio licensed provider · Insurance accepted
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="section section--alt">
                <div className="section__container">
                  <h2 className="section__title">Frequently Asked Questions</h2>
                  <p className="section__subtitle">
                    Quick answers to the questions I hear most often from new patients
                  </p>
                  
                  <div className="faq-grid">
                    <div className="faq-item">
                      <h4 className="faq-question">Do you take my insurance?</h4>
                      <p className="faq-answer">I accept most major insurance plans including those I worked with at Central Ohio Primary Care (Anthem, Medical Mutual, Aetna, UnitedHealthcare, and many others). During scheduling, we'll verify your specific benefits and let you know your expected costs upfront.</p>
                    </div>
                    
                    <div className="faq-item">
                      <h4 className="faq-question">How does telehealth work? Is it secure?</h4>
                      <p className="faq-answer">I use a HIPAA-compliant telehealth platform that's as secure as in-person visits. You'll receive a link before your appointment that works on any device with internet. It's like FaceTime, but completely private and secure. Most patients find it more comfortable and convenient than office visits.</p>
                    </div>
                    
                    <div className="faq-item">
                      <h4 className="faq-question">Can you prescribe medications through telehealth?</h4>
                      <p className="faq-answer">Absolutely. As a board-certified psychiatric nurse practitioner, I can prescribe all psychiatric medications, hormone therapy, and other treatments. Prescriptions are sent electronically to your pharmacy the same day when clinically appropriate.</p>
                    </div>
                    
                    <div className="faq-item">
                      <h4 className="faq-question">What if I need help between appointments?</h4>
                      <p className="faq-answer">You're never on your own. For urgent concerns between visits, you can contact me through our secure patient portal or call the office. For mental health emergencies, I provide clear crisis resources and emergency contacts. Your safety and wellbeing are my priority.</p>
                    </div>
                    
                    <div className="faq-item">
                      <h4 className="faq-question">How long are appointments?</h4>
                      <p className="faq-answer">Initial consultations are 90 minutes - enough time to really understand your concerns and create a comprehensive treatment plan. Follow-up appointments are typically 30-45 minutes. I don't rush appointments or overbook my schedule.</p>
                    </div>
                    
                    <div className="faq-item">
                      <h4 className="faq-question">Do you only treat women?</h4>
                      <p className="faq-answer">I provide mental health services for all adults. My specialty in women's hormone therapy is specifically for women going through perimenopause, postmenopause, or other hormonal transitions. Men and women are equally welcome for mental health care.</p>
                    </div>
                    
                    <div className="faq-item">
                      <h4 className="faq-question">What's different about your approach?</h4>
                      <p className="faq-answer">I believe in treating the whole person, not just symptoms. With my background in both family medicine and psychiatric care, I understand how mental health connects to your overall health. I take time to listen, explain things clearly, and involve you in all treatment decisions.</p>
                    </div>
                    
                    <div className="faq-item">
                      <h4 className="faq-question">How quickly can I be seen?</h4>
                      <p className="faq-answer">Most new patients can be seen within 1-2 weeks. I maintain limited availability to ensure quality care for each patient. If you're in crisis, I can often accommodate urgent appointments or provide appropriate emergency resources.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="section contact-section">
                <div className="section__container">
                  <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
                    <h2 className="section__title">Ready to Schedule Your Appointment?</h2>
                    <p className="section__subtitle">
                      Take the first step toward better mental health. Contact us today to schedule your consultation.
                    </p>
                    
                    <div className="contact-options">
                      <div className="contact-method">
                        <div className="contact-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                          </svg>
                        </div>
                        <h4>Call or Text</h4>
                        <p>(614) 555-0123</p>
                        <p className="contact-detail">Response within 24 hours</p>
                      </div>
                      
                      <div className="contact-method">
                        <div className="contact-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <polyline points="22,6 12,13 2,6"/>
                          </svg>
                        </div>
                        <h4>Email</h4>
                        <p>appointments@balancedcarecolumbus.com</p>
                        <p className="contact-detail">Secure patient portal available</p>
                      </div>
                      
                      <div className="contact-method primary-contact">
                        <div className="contact-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                          </svg>
                        </div>
                        <h4>Online Scheduling</h4>
                        <p>Book directly through our secure portal</p>
                        <a href="https://secure-booking-link.com" className="btn btn--primary" target="_blank" rel="noopener noreferrer">
                          Schedule Online →
                        </a>
              </div>
            </div>
            
                                        <div className="contact-assurance">
                      <p><strong>Your privacy is protected:</strong> All communications are HIPAA-compliant and confidential.</p>
                      <p><strong>Insurance verification:</strong> We'll check your benefits before your first appointment.</p>
                    </div>
                    
                    <div className="emergency-info">
                      <h4>Emergency & Crisis Support</h4>
                      <p><strong>If you're experiencing a mental health crisis:</strong></p>
                      <div className="crisis-resources">
                        <div className="crisis-item">
                          <strong>Immediate Danger:</strong> Call 911 or go to your nearest emergency room
                        </div>
                        <div className="crisis-item">
                          <strong>Crisis Text Line:</strong> Text HOME to 741741
                        </div>
                        <div className="crisis-item">
                          <strong>National Suicide Prevention Lifeline:</strong> 988
                        </div>
                        <div className="crisis-item">
                          <strong>Between Appointments:</strong> Call our office at (614) 555-0123 for urgent concerns
                        </div>
                      </div>
                      <p style={{fontSize: '14px', fontStyle: 'italic', marginTop: '16px'}}>
                        Your safety is my priority. Please don't hesitate to reach out for help.
                      </p>
            </div>
          </div>
        </div>
      </section>

              {/* Footer */}
              <footer className="footer">
                <div className="footer__container">
                  <div className="footer-content">
                    <div className="footer-section">
                      <h4>Balanced Care Columbus</h4>
                      <p>Professional mental health and wellness care designed around your needs.</p>
                      <div className="footer-credentials">
                        <span>Board Certified APRN-CNP</span>
                        <span>25+ Years Experience</span>
                        <span>Ohio Licensed Provider</span>
                      </div>
                    </div>
                    
                    <div className="footer-section">
                      <h4>Quick Links</h4>
                      <div className="footer-links-grid">
                        <a href="#patient-type" className="footer__link">New Patients</a>
                        <a href="#contact" className="footer__link">Schedule Appointment</a>
                        <a href="#privacy" className="footer__link">Privacy Notice</a>
                        <a href="#forms" className="footer__link">Patient Forms</a>
                      </div>
                    </div>
                    
                    <div className="footer-section">
                      <h4>Contact Information</h4>
                      <div className="footer-contact">
                        <p>(614) 555-0123</p>
                        <p>appointments@balancedcarecolumbus.com</p>
                        <p>Serving all of Ohio via telehealth</p>
                      </div>
                      <a href="#contact" className="btn btn--secondary btn--small">
                        Schedule Today
                      </a>
                    </div>
                  </div>
                  
                  <hr className="footer__divider" />
                  <div className="footer__bottom">
                    <p className="footer__copyright">
            © {new Date().getFullYear()} Stephanie M. Nichols, APRN-CNP. All rights reserved.
          </p>
                    <div className="footer__legal">
                      <a href="#privacy" className="footer__link">Privacy Policy</a>
                      <a href="#terms" className="footer__link">Terms of Service</a>
                      <a href="#accessibility" className="footer__link">Accessibility</a>
                    </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
