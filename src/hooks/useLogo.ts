import { useQuery } from "@tanstack/react-query";
import { getLogoById } from "@/actions/get-logo";
import type { Media } from "@/payload-types";

interface UseLogoResult {
  logo: Media | undefined;
  isLoading: boolean;
  error: Error | null;
  isError: boolean;
}

export function useLogo(id: number = 6): UseLogoResult {
  const {
    data,
    isLoading,
    error,
    isError
  } = useQuery({
    queryKey: ["logo", id],
    queryFn: async () => {
      const result = await getLogoById(id);
      if (!result.success) {
        throw new Error(result.error || "Failed to fetch logo");
      }
      return result.logo;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes - logos don't change often
    gcTime: 10 * 60 * 1000, // 10 minutes cache time
    retry: 2,
    refetchOnWindowFocus: false, // Don't refetch when window regains focus
  });

  return {
    logo: data,
    isLoading,
    error: error as Error | null,
    isError,
  };
}
