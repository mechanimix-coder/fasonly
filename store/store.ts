import { create } from "zustand";

// Single interface for the API response
export interface SiteSettingsResponse {
  data: {
    id: number;
    hero_image: string;
    customer_images: string[];
    hero_objects: {
      link: string;
      image: string;
      title: string;
      description: string;
    }[];
    faqs: {
      answer: string;
      question: string;
    }[];
  };
}

interface LandingState {
  // Data
  data: SiteSettingsResponse["data"] | null;

  // Loading & error states
  isLoading: boolean;
  error: string | null;

  // Actions
  fetchLanding: () => Promise<void>;
  reset: () => void;
}

const useLanding = create<LandingState>((set) => ({
  // Initial state
  data: null,
  isLoading: false,
  error: null,

  // Fetch landing data
  fetchLanding: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetch(
        "https://fasonly-website-api-main-pk27te.laravel.cloud/api/site-settings",
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }

      const result: SiteSettingsResponse = await response.json();
      set({ data: result.data, isLoading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "Something went wrong",
        isLoading: false,
      });
    }
  },

  // Reset store to initial state
  reset: () => set({ data: null, isLoading: false, error: null }),
}));

export default useLanding;
