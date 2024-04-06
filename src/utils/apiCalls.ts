import { createClient, Photos } from 'pexels';

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const client = createClient(API_KEY);

const getImages = async (): Promise<Photos> => {
  try {
    const response = await client.photos.curated({ per_page: 8 });
    if ('photos' in response) {
      return response as Photos;
    } else {
      const errorMessage = response
      throw new Error(errorMessage.error);
    }
  } catch (error) {
    console.error("Failed to fetch curated photos:", error);
    throw error;
  }
};

export { getImages };
