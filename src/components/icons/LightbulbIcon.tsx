import React from 'react';

interface LightbulbIconProps {
  className?: string;
}

export const LightbulbIcon: React.FC<LightbulbIconProps> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12c0 2.76 1.12 5.26 2.93 7.07 1.54 1.54 3.54 2.55 5.77 2.84.46.07.3.09.3.09h2c0 0-.16-.02.3-.09 2.23-.29 4.23-1.3 5.77-2.84C20.88 17.26 22 14.76 22 12c0-5.52-4.48-10-10-10zm0 18c-.27 0-.53-.01-.79-.04-1.79-.24-3.39-1.11-4.65-2.37C5.15 16.17 4.26 14.08 4.05 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 2.08-.8 4.17-2.35 5.59-1.26 1.26-2.86 2.13-4.65 2.37-.26.03-.52.04-.79.04z" />
      <path d="M12 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-5 7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3h-2z" />
    </svg>
  );
};