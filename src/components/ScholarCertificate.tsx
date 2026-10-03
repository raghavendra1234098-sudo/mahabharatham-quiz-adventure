import React from 'react';

interface CertificateProps {
  certificateUserName?: string;
  fullName?: string;
  completionDate?: string;
  certificateId?: string;
}

export const ScholarCertificate: React.FC<CertificateProps> = ({
  certificateUserName,
  fullName,
  completionDate,
  certificateId,
}) => {
  const displayName = (certificateUserName || fullName || 'Noble Scholar').trim();

  // Dynamic font scaling to guarantee perfect parchment fit
  const getFontSize = () => {
    if (displayName.length > 26) return 'clamp(1rem, 2.1vw, 1.75rem)';
    if (displayName.length > 18) return 'clamp(1.25rem, 2.8vw, 2.3rem)';
    if (displayName.length > 12) return 'clamp(1.5rem, 3.3vw, 2.85rem)';
    return 'clamp(1.75rem, 3.8vw, 3.3rem)';
  };

  return (
    <div
      id="certificate-print-zone"
      className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-[0_12px_50px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.35)] border-2 border-[#d4af37]/80 bg-[#060a14]"
    >
      {/* 3:2 Landscape Aspect Ratio Container matching 1024x682 base image */}
      <div className="relative w-full pb-[66.60%] select-none">
        {/* Approved High-Resolution Certificate Base Image */}
        <img
          src="/assets/certificates/scholar-certificate-clean.jpg"
          alt="Official Mahabharata Scholar Certificate"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        />

        {/* Dynamic Name Overlay positioned exactly at the parchment center where Raghavendra appeared */}
        <div
          className="absolute flex items-center justify-center pointer-events-none"
          style={{
            left: '50%',
            top: '44.0%',
            transform: 'translate(-50%, -50%)',
            width: '46%',
            height: '11%',
          }}
        >
          <span
            style={{
              fontFamily: "'Playfair Display', 'Cormorant Garamond', 'Alex Brush', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: getFontSize(),
              color: '#0d1e3d',
              textShadow: '0 1px 1px rgba(255, 255, 255, 0.45)',
              lineHeight: 1.1,
            }}
            className="tracking-wide text-center truncate max-w-full px-2"
          >
            {displayName}
          </span>
        </div>
      </div>
    </div>
  );
};
