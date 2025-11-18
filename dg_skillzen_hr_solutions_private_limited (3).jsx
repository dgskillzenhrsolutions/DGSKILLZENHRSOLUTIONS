import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function HRWebsite() {
  const [contact, setContact] = useState({ name: '', email: '', company: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const services = [
    { id: 1, title: 'Talent Acquisition', desc: 'Full-cycle hiring: sourcing, screening and onboarding top talent tailored to your needs.' },
    { id: 2, title: 'Office Boy Staffing', desc: 'Reliable and trained office boys for day‑to‑day office assistance, mail handling, serving, and basic operational support.' },
    { id: 3, title: 'Cleaning & Housekeeping Staff', desc: 'Experienced cleaning and housekeeping personnel for offices, commercial spaces, and institutions with hygiene compliance.' },
    { id: 4, title: 'Clerical & Admin Support', desc: 'Skilled clerks and administrative staff for documentation, data entry, filing, and front-office operations.' },
    { id: 5, title: 'Security Guard Services', desc: 'Trained and verified security guards for corporate offices, residential complexes, commercial buildings, and events.' },
    { id: 6, title: 'Receptionist & Front Desk Staff', desc: 'Professional receptionists with excellent communication skills for front-office management and visitor handling.' },
    { id: 7, title: 'Field Executives', desc: 'Efficient field staff for collections, verification, surveys, outdoor operations, and client coordination.' },
    { id: 8, title: 'Drivers (Commercial & Personal)', desc: 'Experienced and background-verified drivers for company vehicles, logistics, and personal driving requirements.' },
    { id: 9, title: 'Pantry & Cafeteria Staff', desc: 'Well‑trained pantry boys and cafeteria helpers for beverage service, cleaning, and hospitality support.' },
    { id: 10, title: 'Data Entry Operators', desc: 'Accurate and fast operators for large‑scale data entry, digitization projects, and back‑office operations.' },
    { id: 11, title: 'HR Consulting', desc: 'Policy creation, performance frameworks, and compliance guidance that reduces risk.' },
    { id: 12, title: 'Payroll & Benefits', desc: 'Accurate payroll, statutory compliance, and benefits administration to keep teams happy.' },
    { id: 13, title: 'L&D & Training', desc: 'Upskill programs and leadership development to future-proof your workforce.' }
  ];

  const team = [
    { name: 'Asha Verma', role: 'CEO', bio: 'People-first leader with 12+ years in HR strategy.' },
    { name: 'Rohan Mehta', role: 'Head of Talent', bio: 'Expert in tech hiring and employer branding.' },
    { name: 'Neha Singh', role: 'Payroll Lead', bio: 'Payroll & compliance specialist.' }
  ];

  function validate() {
    const e = {};
    if (!contact.name.trim()) e.name = 'Name is required.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(contact.email)) e.email = 'Valid email required.';
    if (!contact.company.trim()) e.company = 'Company is required.';
    if (!contact.message.trim() || contact.message.trim().length < 10) e.message = 'Message must be at least 10 characters.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    console.log('Submitting contact', contact);
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setContact({ name: '', email: '', company: '', message: '' }); }, 1600);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">DG</div>
            <div>
              <h1 className="text-lg font-semibold">DG Skillzen HR Solutions Private Limited</h1>
              <div className="text-sm text-slate-500">Empowering HR Excellence with Skill and Innovation</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#team" className="hover:text-indigo-600">Team</a>
            <a href="#careers" className="hover:text-indigo-600">Careers</a>
            <a href="#contact" className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">Contact</a>
          </nav>
          <div className="md:hidden">
            <button aria-label="open menu" className="p-2 rounded-md bg-slate-100">☰</button>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-r from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl md:text-5xl font-extrabold leading-tight">
                Building People. Powering Businesses.
              </motion.h2>
              <p className="mt-6 text-slate-600 max-w-xl">DG Skillzen HR Solutions Private Limited helps organizations hire, retain, and nurture exceptional talent while managing HR operations with precision and care.</p>

              <div className="mt-8 flex gap-4">
                <a href="#contact" className="inline-flex items-center gap-3 px-5 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">Get a free consultation</a>
                <a href="#services" className="inline-flex items-center gap-3 px-5 py-3 border border-slate-200 rounded-lg">See services</a>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-500">
                <div className="p-4 bg-white rounded-lg shadow-sm">Trusted by 200+ companies</div>
                <div className="p-4 bg-white rounded-lg shadow-sm">Dedicated HR support and secure data handling</div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-8 -top-8 w-80 h-80 rounded-xl bg-gradient-to-br from-indigo-100 to-pink-50 opacity-70 blur-3xl" />
              <motion.div initial={{ scale: 0.98 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }} className="relative bg-white p-8 rounded-xl shadow-lg">
                <h3 className="font-semibold">Our Expertise</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li>Nationwide recruitment network</li>
                  <li>Comprehensive payroll processing</li>
                  <li>Employee engagement & L&D programs</li>
                </ul>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-slate-50 text-xs">Avg time-to-hire: 20 days</div>
                  <div className="p-3 rounded-lg bg-slate-50 text-xs">Client satisfaction: 95%</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
<section id="services" className="max-w-7xl mx-auto px-6 py-16">
  <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl font-bold">Our Services</motion.h3>
  <p className="text-slate-600 mt-2 max-w-2xl">Comprehensive manpower & HR solutions for all business needs.</p>

  <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {services.map(s => (
      <motion.article key={s.id} whileHover={{ y: -6 }} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <img src={`https://picsum.photos/seed/${encodeURIComponent(s.title)}/300/200`} alt={s.title} className="w-full h-40 object-cover rounded-md mb-4" />
        <h4 className="font-semibold text-lg">{s.title}</h4>
        <p className="text-sm text-slate-600 mt-2">{s.desc}</p>
        <a href="#contact" className="mt-4 inline-block text-sm text-indigo-600">Request service →</a>
      </motion.article>
    ))}
  </div>
</section>

{/* TEAM, CAREERS, CONTACT sections remain unchanged */}

        <footer className="bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
            <div>
              <div className="font-semibold text-lg">DG Skillzen HR Solutions Private Limited</div>
              <div className="text-sm text-slate-300 mt-2">Empowering organizations with smarter HR solutions.</div>
            </div>
            <div className="text-sm text-slate-300">
              <div className="font-medium">Products</div>
              <div className="mt-3 space-y-2">
                <div>Recruiting</div>
                <div>Payroll</div>
                <div>Learning</div>
              </div>
            </div>
            <div className="text-sm text-slate-300">
              <div className="font-medium">Contact</div>
              <div className="mt-3">dgskillzenhrsolutions@gmail.com</div>
              <div className="mt-1">+91 8077928589</div>
            </div>
          </div>
          <div className="border-t border-slate-800 text-slate-400 text-sm py-4 text-center">© {new Date().getFullYear()} DG Skillzen HR Solutions Private Limited — All rights reserved.</div>
        </footer>
      </main>
    </div>
  );
}
