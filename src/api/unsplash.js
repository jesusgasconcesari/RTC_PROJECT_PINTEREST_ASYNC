import { createApi } from "unsplash-js";

const VITE_UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

export const unsplash = createApi({
  accessKey: VITE_UNSPLASH_KEY
});

export async function searchImages(query) {
  try {
    const result = await unsplash.search.getPhotos({ query });

    if (!result.response || result.response.results.length === 0) {
      console.error("No se encontraron imágenes para:", query);
      return [];
    }

    return result.response.results;

  } catch (error) {
    console.error("Error al buscar imágenes:", error);
    return [];
  }
}