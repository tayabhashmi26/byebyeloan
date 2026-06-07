// ============================================================
// IMPORTANT: Replace these values with your actual details
// ============================================================

export const SITE_NAME = 'ByeBye Loan';
export const SITE_TAGLINE = 'Pakistan Ka #1 Loan Clearing Service';
export const SITE_URL = 'https://byebyeloan.online';

// Contact
export const WHATSAPP_NUMBER = '923176619813'; // Format: 92XXXXXXXXXX (no +)
export const PHONE_DISPLAY = '0317-6619813';
export const PHONE_HREF = '+923176619813';

// WhatsApp deep link with pre-filled message
export const WHATSAPP_MESSAGE =
  'Assalam o Alaikum! Mujhe apna loan clear karna hai. Please meri help karein.';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Loan apps we clear — corrected & complete list
export const LOAN_APPS = [
  // Group 1: Direct Loan Apps
  'Smart Qarza', 'Paisayaar', 'Aitemaad', 'Hakeem', 'Daira', 'Sahara',
  'Fauri Cash', 'Money Tap', 'PakCredit', 'Loan Lado', 'CashBazar',
  'PaisaGhar', 'QarzMitra',
  // Group 2: Fintech, BNPL & Digital Credit
  'Abhi', 'ZoodPay', 'ZoodMall', 'Muawin', 'Qist Bazaar', 'Tijara',
  'Edufi', 'Taleem Connect', 'Neem Paymenow', 'Nova Finance', 'Viva Finance',
  'Baadmay', 'Alif Shop',
  // Group 3: Mobile Wallets & Microfinance
  'Easypaisa', 'JazzCash', 'HBL Microfinance', 'Zindigi',
  'Konnect by HBL', 'DOST',
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
  { value: '30+', label: 'Loan Apps' },
  { value: 'All', label: 'Pakistan Banks' },
  { value: '100%', label: 'NOC Verified' },
];
