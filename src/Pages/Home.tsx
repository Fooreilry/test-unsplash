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
  
  const photoList = useRef<null | HTMLDivElement>(null);
  
  const onScroll = (e: UIEvent<HTMLElement>) => {
    
    if (!photoData) return;

    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    
    const scrollBottom = clientHeight + scrollTop === scrollHeight;
    
    if (scrollBottom && page < photoData.total_pages) {
      
      setPage(prevPage => prevPage + 1);
    }
  };
  
  useEffect(() => {
    
    if (photoList.current && photoList) {
      if (window.innerHeight - photoList.current.offsetHeight >= 0) {
        setPage(page + 1);
      }
      
    } 
    }, [photoData]);
    
    useEffect(() => {
      if (searchValue) {
        getPhotosList(searchValue, page).then((data) => {
          console.log(photoData);
          
          if (data) {
            const photosList = photoData
              ? { ...data, results: [...photoData.results, ...data.results] }
              : data;
            setPhotoData(photosList);
          }
        });
      }
        
      else {
        setPhotoData(null);
        setPage(1);
        };
        
    }, [searchValue, page]);
    
    return (
      <main className={styles.Home} onScroll={(e) => onScroll(e)}>
        <section
          className={`${styles.HomeWrapper} ${
            !searchValue && styles.HomeWrapperWithPhotoList
          }`}
        >
          <Search setSearchValue={setSearchValue} />
          {photoData && (
            <PhotoList photos={photoData.results} photoListRef={photoList}/>
          )}
        </section>
      </main>
    );
}