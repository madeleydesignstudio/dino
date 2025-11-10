"use client";

import { useEffect, useState, ReactNode } from "react";

interface NoSSRProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * NoSSR component prevents hydration mismatches by only rendering children on the client side.
 * This is useful for components that might be affected by browser extensions or other
 * client-side modifications that occur after server rendering.
 */
export function NoSSR({ children, fallback = null }: NoSSRProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
