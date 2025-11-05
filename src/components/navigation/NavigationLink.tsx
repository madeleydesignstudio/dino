"use client";

import Link from 'next/link';
import { useNavigation } from './NavigationContext';
import { ReactNode, MouseEvent } from 'react';

interface NavigationLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const NavigationLink = ({
  href,
  children,
  className,
  onClick,
  ...props
}: NavigationLinkProps) => {
  const { currentSection } = useNavigation();

  // Extract the main section from the href
  const getSectionFromPath = (path: string): string => {
    const segments = path.split('/').filter(Boolean);
    if (segments.length === 0) return 'home';
    return segments[0];
  };

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const targetSection = getSectionFromPath(href);
    const currentSectionName = currentSection;

    // If we're navigating to a different section, let the NavigationContext handle the transition
    // If we're staying within the same section, proceed normally without transition

    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      href={href}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
};
