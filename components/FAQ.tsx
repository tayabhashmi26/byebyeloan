'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import WALink from '@/components/WALink';
import { WHATSAPP_NUMBER } from '@/lib/constants';

const FAQS = [
  {
    q: 'Smart Qarza loan kaise clear karein Pakistan mein?',
    a: 'ByeBye Loan se contact karein. Hum Smart Qarza ke saath directly negotiate karte hain aur aapka loan officially settle karte hain. Settlement ke baad aapko verified NOC milega aur koi bhi call ya SMS nahi aayega.',
  },
  {
    q: 'Kya aap Pakistan ke sab banks ke loans clear karte hain?',
    a: 'Haan, hum Pakistan ke tamam commercial banks ke loans clear karte hain jisme HBL, UBL, MCB, ABL, Meezan Bank, Bank Alfalah, Faysal Bank, Habib Metro, JS Bank, Bank Islami, Askari Bank, NBP, aur baaki sab banks shamil hain.',
  },
  {
    q: 'NOC kya hota hai aur loan clearance ke liye kyun zaruri hai?',
    a: 'NOC (No Objection Certificate) ek official document hai jo bank ya loan app is baat ki tasdiq karta hai ke aapka loan completely settle ho gaya hai aur unka koi claim nahi. Yeh document bhavishya mein aapke liye bohot zaruri hai — credit score repair, property purchase, job applications wagheera ke liye.',
  },
  {
    q: 'Loan clear hone mein kitna waqt lagta hai?',
    a: 'Zyada tar cases mein 24 se 48 ghante ke andar process complete ho jata hai. Zyada complicated cases (multiple loans, large amounts) mein 3 se 5 business days lag sakte hain. Hum aapko har step par update karte rehte hain.',
  },
  {
    q: 'Kya loan clear hone ke baad sach mein koi call ya SMS nahi aayega?',
    a: 'Bilkul guarantee. Official settlement aur NOC ke baad koi bhi bank ya loan app aapko contact karne ka haq nahi rakhta. Aur agar koi contact karta hai, humari team us issue ko bhi handle karti hai — yeh humari service mein shamil hai.',
  },
  {
    q: 'Kya yeh service Pakistan bhar mein available hai?',
    a: 'Haan. Hum Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, Quetta, Gujranwala, Sialkot aur Pakistan ke har sheher mein service dete hain. Process online aur phone par hoti hai, isliye location koi masla nahi.',
  },
  {
    q: 'Paisayaar, Foricash ya QarzMitra loan clear ho sakta hai?',
    a: 'Haan, hum Paisayaar, Foricash, QarzMitra ke alaawa LudoLoan, EasyLoan, UpLoan, PakCredit, HakeemApp, DairaApp, PaysaGhur, MoneyTab — sab 12 apps ke loans clear karte hain.',
  },
  {
    q: 'Loan app calls aur SMS kaise hamesha ke liye band hon?',
    a: 'Loan app harassment calls aur SMS band karne ka ek hi tarika hai — official loan settlement aur NOC lena. Jab hum aapka loan officially clear karte hain aur NOC milta hai, tab loan app ya bank legally aapko contact nahi kar sakta. ByeBye Loan yeh pura process handle karta hai. Calls band karna hamare service ki lifetime guarantee hai.',
  },
  {
    q: 'Loan default ho jaaye toh kya karna chahiye Pakistan mein?',
    a: 'Loan default hone par ghabrana nahi chahiye. Pehla qadam yeh hai ke hum se rabta karein. Hum aapke loan ki current status check karenge, loan app ya bank se negotiate karenge, aur best possible settlement amount par aapka loan officially close karwa denge. Default ke baad bhi settlement ho sakti hai — aur NOC mil sakta hai.',
  },
  {
    q: 'Fori Qarza, Paisa Guru ya Loan Lado ka loan clear ho sakta hai?',
    a: 'Haan, hum Fori Qarza, Paisa Guru, Loan Lado ke alaawa Pakistan ke tamam 30+ loan apps ke loans officially clear karte hain. Chahe app chhota ho ya bara, hum direct unke saath negotiate karte hain aur aapko verified NOC dilwate hain.',
  },
  {
    q: 'Is service ka kharcha kitna hai?',
    a: 'Pehli consultation bilkul FREE hai. Service charge loan ki nature aur amount par depend karta hai. Humse rabta karein aur hum aapko complete transparent estimate denge — koi chhupa hua charge nahi.',
  },
  {
    q: 'Kya meri personal information safe aur private rahegi?',
    a: 'Bilkul. Aapki tamam personal aur financial information strictly confidential hai. Hum kisi ke saath aapki details share nahi karte. Aapki privacy humari priority hai.',
  },
  {
    q: 'Kya yeh process legal hai? Koi illegal kaam toh nahi hoga?',
    a: 'Haan, hum 100% legal aur official process follow karte hain. Hum directly bank ya loan app ke saath negotiate karte hain — officially. Isliye NOC bhi milta hai. Koi fraud, koi chhupa hua kaam nahi.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIdx((prev) => (prev === i ? null : i));

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions — Loan Clearing Pakistan"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#006633] font-semibold text-sm uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Aksar Pooche Jaane Wale Sawalat
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Aapke zehan mein koi sawal hai? Yahan jawab milega. Warna seedha humse puchein.
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map(({ q, a }, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border-2 transition-all duration-200 ${
                  isOpen ? 'border-[#006633] shadow-md' : 'border-gray-100 hover:border-[#006633]/30'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-semibold text-sm sm:text-base leading-snug transition-colors duration-150 ${
                      isOpen ? 'text-[#006633]' : 'text-gray-800'
                    }`}
                  >
                    {q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 mt-0.5 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#006633]' : 'text-gray-400'
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">
            Koi aur sawal hai?{' '}
            <WALink
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Assalam o Alaikum! Mujhe kuch sawaal poochne hain.')}`}
              className="text-[#006633] font-semibold hover:underline"
            >
              Humse seedha WhatsApp par puchein →
            </WALink>
          </p>
        </div>
      </div>
    </section>
  );
}
