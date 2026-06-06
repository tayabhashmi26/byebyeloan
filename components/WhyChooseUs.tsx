import { CheckCircle, Shield, Clock, Lock, Users, Award, Phone, Banknote } from 'lucide-react';

const REASONS = [
  {
    icon: Award,
    title: '100% Official NOC',
    desc: 'Har clearance ke baad verified, legally valid NOC certificate milta hai.',
  },
  {
    icon: Phone,
    title: 'Calls & SMS Forever Band',
    desc: 'Clearance ke baad koi bhi bank ya loan app contact nahi karega — lifetime guarantee.',
  },
  {
    icon: Shield,
    title: 'Legal & Verified Process',
    desc: 'Hum officially aur legally kaam karte hain. Koi fraud nahi, koi chhupa hua charge nahi.',
  },
  {
    icon: Users,
    title: '5,000+ Satisfied Clients',
    desc: 'Pakistan bhar mein hazaron clients apna loan clear kara chuke hain.',
  },
  {
    icon: Clock,
    title: '24-48 Hour Processing',
    desc: 'Zyada tar cases 1-2 din mein complete ho jate hain. Fast aur efficient service.',
  },
  {
    icon: Banknote,
    title: 'All Banks of Pakistan',
    desc: 'HBL, UBL, MCB, Meezan aur sab commercial banks — hum sab cover karte hain.',
  },
  {
    icon: Lock,
    title: '100% Confidential',
    desc: 'Aapki personal aur financial information completely private aur secure rehti hai.',
  },
  {
    icon: CheckCircle,
    title: 'Free First Consultation',
    desc: 'Pehli baat bilkul free hai. Jab tak aap satisfied na hon, koi charge nahi.',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      aria-label="Why Choose ByeBye Loan Pakistan"
      className="py-20"
      style={{ background: 'linear-gradient(150deg, #003d1a 0%, #006633 60%, #007a40 100%)' }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#F5A623] font-semibold text-sm uppercase tracking-widest mb-3">
            Kyun Chunen Hum Ko?
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Pakistan Ka Sabse Bharosemand Loan Clearing Service
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Hazaron Pakistanion ne humpar bharosa kiya — aur nataij khud bolte hain.
          </p>
          <div className="w-16 h-1 bg-[#F5A623] rounded mx-auto mt-6" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {REASONS.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/20 hover:border-white/30 transition-all duration-200 group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#F5A623]/20 flex items-center justify-center mb-4 group-hover:bg-[#F5A623]/30 transition-colors duration-200">
                <Icon size={22} className="text-[#F5A623]" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">{title}</h3>
              <p className="text-white/65 text-sm leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
