import { Header } from "next/dist/lib/load-custom-routes";

const BASE_URL =
  "https://api.unsplash.com";

export function getPhotos(searchValue: string, page: number) {
    
    const responseUrl = `${BASE_URL}/search/photos?client_id=Ip0XA55zY7b7-d19osq1L5btGg-YCeDZVpnnJjXqHxs&query=${searchValue}&page=${page}`

    // console.log(responseUrl);
    
    return fetch(responseUrl, {
      method: "GET",
    });
}