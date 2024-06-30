'use client';

import Image from "next/image";
import styles from "./PhotoList.module.css";
import { LegacyRef, useState } from "react";
import { Popup } from "@/ui/Popup/Popup";

const PhotoList = ({
  photos,
  photoListRef,
}: {
  photos: PhotoItem[];
  photoListRef: LegacyRef<HTMLDivElement> | undefined;
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<null | PhotoItem>(null);

  const [openPopup, setOpenPopup] = useState<boolean>(false);

  const onPickPhoto = (photo: PhotoItem) => {
    setSelectedPhoto(photo);
    setOpenPopup(true);
  };

  return (
    <div className={styles.PhotoList} ref={photoListRef}>
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
        </div>
      ) : (
        <p className={styles.Message}>К сожалению, поиск не дал результатов</p>
      )}
      <Popup isOpen={openPopup} setOpenPopup={setOpenPopup}>
        <img
          src={selectedPhoto?.urls.full}
          alt={selectedPhoto?.alt_description}
        />
      </Popup>
    </div>
  );
};   

export { PhotoList };