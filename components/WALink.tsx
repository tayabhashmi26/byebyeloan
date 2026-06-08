'use client';

import { WHATSAPP_LINK } from '@/lib/constants';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

interface WALinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  children: React.ReactNode;
}

export default function WALink({ href = WHATSAPP_LINK, children, onClick, ...props }: WALinkProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    window.gtag?.('event', 'conversion', {
      send_to: 'AW-18223083898/cnRmCNH-nLscEPriuPFD',
      value: 1.0,
      currency: 'PKR',
    });
    window.fbq?.('track', 'Contact');
    onClick?.(e);
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
