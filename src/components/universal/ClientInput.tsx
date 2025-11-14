"use client";

import { useState, useEffect, InputHTMLAttributes } from "react";

interface ClientInputProps extends InputHTMLAttributes<HTMLInputElement> {
  fallbackContent?: string;
}

/**
 * ClientInput component that only renders on the client side to prevent
 * hydration mismatches caused by browser extensions injecting attributes
 * into form inputs (like password managers, autofill extensions, etc.)
 */
export function ClientInput({
  fallbackContent = "",
  className,
  ...props
}: ClientInputProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <div className={className}>{fallbackContent}</div>;
  }

  return <input {...props} className={className} suppressHydrationWarning />;
}
