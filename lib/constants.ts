// ============================================================
// IMPORTANT: Replace these values with your actual details
// ============================================================

export const SITE_NAME = 'ByeBye Loan';
export const SITE_TAGLINE = 'Pakistan Ka #1 Loan Clearing Service';
export const SITE_URL = 'https://byebayeloan.pk'; // Replace with your domain

// Contact — REPLACE with your real numbers
export const WHATSAPP_NUMBER = '923001234567'; // Format: 92XXXXXXXXXX (no +)
export const PHONE_DISPLAY = '0300-1234567';
export const PHONE_HREF = '+923001234567';

// WhatsApp deep link with pre-filled message
export const WHATSAPP_MESSAGE =
  'Assalam o Alaikum! Mujhe apna loan clear karna hai. Please meri help karein.';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Loan apps we clear
export const LOAN_APPS = [
  { name: 'Smart Qarza', color: '#006633' },
  { name: 'Paisayaar', color: '#007a40' },
  { name: 'Foricash', color: '#004d26' },
  { name: 'QarzMitra', color: '#006633' },
  { name: 'LudoLoan', color: '#007a40' },
  { name: 'EasyLoan', color: '#004d26' },
  { name: 'UpLoan', color: '#006633' },
  { name: 'PakCredit', color: '#007a40' },
  { name: 'HakeemApp', color: '#004d26' },
  { name: 'DairaApp', color: '#006633' },
  { name: 'PaysaGhur', color: '#007a40' },
  { name: 'MoneyTab', color: '#004d26' },
];

// Pakistani banks we cover
export const BANKS = [
  'HBL', 'UBL', 'MCB', 'ABL', 'Meezan Bank',
  'Bank Alfalah', 'Faysal Bank', 'Habib Metro',
  'JS Bank', 'Bank Islami', 'Askari Bank', 'Silkbank',
  'Soneri Bank', 'Standard Chartered', 'NBP',
];

// Stats
export const STATS = [
  { value: '5,000+', label: 'Loans Cleared' },
  { value: '12+', label: 'Loan Apps' },
  { value: 'All', label: 'Pakistan Banks' },
  { value: '100%', label: 'NOC Verified' },
];
