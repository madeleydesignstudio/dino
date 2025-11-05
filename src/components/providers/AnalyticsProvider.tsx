"use client";

import { OpenPanelComponent } from "@openpanel/nextjs";

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

/**
 * AnalyticsProvider - Client component wrapper for OpenPanel analytics
 *
 * This component ensures analytics tracking is handled on the client-side
 * and prevents hydration issues in the server-side layout component.
 *
 * Features:
 * - Screen view tracking for navigation analytics
 * - Attribute tracking for user interaction data
 * - Outgoing link tracking for external link clicks
 * - Proper client-side rendering to avoid SSR issues
 */
export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  return (
    <>
      <OpenPanelComponent
        clientId="6621cc22-a1ff-4225-a38e-cc0cec494e81"
        trackScreenViews={true}
        trackAttributes={true}
        trackOutgoingLinks={true}
      />
      {children}
    </>
  );
}
