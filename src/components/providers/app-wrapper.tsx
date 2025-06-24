'use client';

import { usePathname } from 'next/navigation';
import type React from 'react';

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isDinoUiRoute = pathname === '/resources/dino-ui';

  return (
    <div
      className={`transition-all duration-1000 ease-in-out ${isDinoUiRoute ? 'mx-64' : 'mx-32'}`}
    >
      {children}
    </div>
  );
};

export default AppWrapper;
