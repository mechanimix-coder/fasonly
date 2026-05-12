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
