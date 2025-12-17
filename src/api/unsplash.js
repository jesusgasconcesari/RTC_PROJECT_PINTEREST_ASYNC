import { createApi } from "unsplash-js";
const VITE_UNSPLASH_KEY = "l7ui4qAE8gLmDuN-LxpjpubEIOgCnZyWpafjJbKciLA";

export const unsplash = createApi({
    accessKey : VITE_UNSPLASH_KEY
})

export function searchImages(query){
    unsplash.search.getPhotos({query})
        .then(result => console.log(result));

    return unsplash.search.getPhotos({query})
        .then(result => result.response.results);
        
}