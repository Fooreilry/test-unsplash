'use client';

import Image from "next/image";
import styles from "./PhotoList.module.css";
import { LegacyRef, useState } from "react";
import { Popup } from "@/ui/Popup/Popup";
import { createPortal } from "react-dom";

const PhotoList = ({
  photos,
  lastItemRef,
  isLoading,
}: {
  photos: PhotoItem[];
  lastItemRef: LegacyRef<HTMLDivElement> | undefined;
  isLoading: boolean;
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<null | PhotoItem>(null);

  const [openPopup, setOpenPopup] = useState<boolean>(false);

  const onPickPhoto = (photo: PhotoItem) => {
    setSelectedPhoto(photo);
    setOpenPopup(true);
  };

  return (
    <div className={styles.PhotoList}>
      {Boolean(photos.length) ? (
        <div className={styles.PhotoListWrapper}>
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={styles.PhotoItem}
              onClick={() => onPickPhoto(photo)}
            >
              <img src={photo.urls.regular} alt={photo.alt_description} />
            </div>
          ))}
          {isLoading &&
            Array(10)
              .fill(0)
              .map((_, index) => (
                <div
                  key={`render-item-${index}`}
                  className={styles.PhotoItem}
                />
              ))}
        </div>
      ) : (
        <p className={styles.Message}>К сожалению, поиск не дал результатов</p>
      )}
      <div ref={lastItemRef} />
      {createPortal(
        <Popup isOpen={openPopup} setOpenPopup={setOpenPopup}>
          <img
            src={selectedPhoto?.urls.regular}
            alt={selectedPhoto?.alt_description}
          />
        </Popup>,
        document.body
      )}
    </div>
  );
};   

export { PhotoList };