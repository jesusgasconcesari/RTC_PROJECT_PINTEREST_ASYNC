import { createApi } from "unsplash-js";
const VITE_UNSPLASH_KEY = "l7ui4qAE8gLmDuN-LxpjpubEIOgCnZyWpafjJbKciLA";

export const unsplash = createApi({
    accessKey : VITE_UNSPLASH_KEY
})

export async function searchImages(query) {
  try {
    const result = await unsplash.search.getPhotos({ query });

    // Si la API responde pero sin datos
    if (!result.response || result.response.results.length === 0) {
        console.error("Error al buscar imágenes:", error);
      return [];
    }

    return result.response.results;

  } catch (error) {
    console.error("Error al buscar imágenes:", error);
    return [];
  }
}