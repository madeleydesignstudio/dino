"use client";

import { useState, useEffect } from "react";

interface LocationTimeDisplayProps {
  className?: string;
}

/**
 * LocationTimeDisplay component shows user's location and current time
 *
 * Features:
 * - Top right: User's location (city, country)
 * - Bottom right: Current time (12-hour format)
 * - Graceful fallbacks for location/geolocation errors
 * - Real-time time updates
 * - Minimal, elegant design with xs text
 */
export const LocationTimeDisplay = ({
  className = "",
}: LocationTimeDisplayProps) => {
  const [location, setLocation] = useState<string>("Loading...");
  const [time, setTime] = useState<string>("");

  /**
   * Get user's location using browser geolocation and reverse geocoding
   */
  const getUserLocation = async () => {
    try {
      // Check if geolocation is supported
      if (!navigator.geolocation) {
        setLocation("Location unavailable");
        return;
      }

      // Get user's coordinates
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;

            // Use a free geocoding service to get location name
            // Using OpenStreetMap Nominatim (free, no API key required)
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`,
            );

            if (!response.ok) {
              throw new Error("Geocoding failed");
            }

            const data = await response.json();

            // Extract city and country from the response
            const city =
              data.address?.city ||
              data.address?.town ||
              data.address?.village ||
              data.address?.county ||
              "Unknown City";
            const country = data.address?.country || "Unknown Country";

            setLocation(`${city}, ${country}`);
          } catch (geocodingError) {
            console.error("Geocoding error:", geocodingError);
            setLocation("Location unavailable");
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          // Handle different geolocation errors
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setLocation("Location access denied");
              break;
            case error.POSITION_UNAVAILABLE:
              setLocation("Location unavailable");
              break;
            case error.TIMEOUT:
              setLocation("Location timeout");
              break;
            default:
              setLocation("Location error");
              break;
          }
        },
        {
          enableHighAccuracy: false,
          timeout: 10000,
          maximumAge: 300000, // Cache for 5 minutes
        },
      );
    } catch (error) {
      console.error("Location error:", error);
      setLocation("Location unavailable");
    }
  };

  /**
   * Update current time in 12-hour format
   */
  const updateTime = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    setTime(timeString);
  };

  /**
   * Initialize location and time on mount
   */
  useEffect(() => {
    getUserLocation();
    updateTime();

    // Update time every second
    const timeInterval = setInterval(updateTime, 1000);

    // Cleanup
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Location - Top Right (in py-6 top padding zone) */}
      <div className="absolute bottom-0 left-4 py-2 text-xs text-gray-500 font-mono tracking-wide flex items-center">
        {location}
      </div>

      {/* Time - Bottom Right (in py-6 bottom padding zone) */}
      <div className="absolute bottom-0 right-4 py-2 text-xs text-gray-500 font-mono tracking-wide flex items-center">
        {time}
      </div>
    </div>
  );
};

/**
 * Utility function to add LocationTimeDisplay to any layout
 *
 * Usage:
 * import { withLocationTime } from "@/components/universal/LocationTimeDisplay";
 *
 * export default function MyLayout({ children }) {
 *   return withLocationTime(
 *     <div className="h-screen flex items-center justify-center">
 *       <PageTransition className="w-full h-full px-4 py-6">
 *         {children}
 *       </PageTransition>
 *     </div>
 *   );
 * }
 */
export const withLocationTime = (
  children: React.ReactNode,
  className?: string,
) => {
  return (
    <>
      {children}
      <LocationTimeDisplay className={className} />
    </>
  );
};
