"use client";

import { PhotoList } from "@/components/PhotoList/PhotoList";
import { Search } from "@/components/Search/Search";
import { UIEvent, useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import { getPhotos } from "@/api";

const getPhotosList = async (
  searchValue: string,
  page: number
):  Promise<PhotoResponseData | undefined > => {

  try {
    const response = await getPhotos(searchValue, page);

    if (!response.ok) {
      return;
    }

    return await response.json();
  } catch (error) {
    console.log((error as Error).message);
  }
};

export default function HomePage() {

    const [photoData, setPhotoData] = useState<null | PhotoResponseData>(null);
    const [searchValue, setSearchValue] = useState("");
    const [page, setPage] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const lastItemRef = useRef<null | HTMLDivElement>(null);
  const observer = useRef<undefined | IntersectionObserver>();

  useEffect(() => {
    
    if (!lastItemRef.current || !photoData) return;
    
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && page < photoData.total_pages) {
        setPage(page + 1);
      }
      
    });
    observer.current.observe(lastItemRef.current);
  }, [photoData]);
  
    
  useEffect(() => {
    setIsLoading(true);
      if (searchValue) {
        getPhotosList(searchValue, page).then((data) => {
          
          if (data) {
            setPhotoData(data);
            setPage(1);
          }
        });
      }
        
      else {
        setPhotoData(null);
        setPage(1);
    };

    setIsLoading(false);
    }, [searchValue]);
  
  useEffect(() => {
    setIsLoading(true);
    
      if (searchValue) {
        getPhotosList(searchValue, page).then((data) => {
          
          if (data) {
            const photosList = { ...data, results: [...photoData.results, ...data.results] }
            setPhotoData(photosList);
          }
        });
      }
      
      setIsLoading(false);
    }, [page]);
    
    return (
      <main className={styles.Home}>
        <section
          className={`${styles.HomeWrapper} ${
            !searchValue && styles.HomeWrapperWithPhotoList
          }`}
        >
          <Search setSearchValue={setSearchValue} searchValue={searchValue} />
          {photoData && (
            <PhotoList
              photos={photoData.results}
              lastItemRef={lastItemRef}
              isLoading={isLoading}
            />
          )}
        </section>
      </main>
    );
}