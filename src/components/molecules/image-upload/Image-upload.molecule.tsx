import React, { ChangeEvent, useState } from 'react';
import styles from './image-upload.module.css';
// type Props = {}, {}: Props y

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

  const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    const images = event.target.files;
    if (images && images.length > 0) {
      const file = images[0];
      if (file.size > MAX_IMAGE_SIZE)
        return alert('L&aposimage ne doit pas dépasser 5MB');
      else setSelectedImage(file);
    }
  };
  return (
    <div className={styles.container}>
      <label htmlFor="photo">Photo</label>
      <span
        style={{
          width: '10rem',
          height: '197px',
          borderRadius: '10px',
          border: '1px solid #676666',
          padding: '5px',
        }}
      >
        <label
          htmlFor="image"
          style={{
            width: '10rem',
            height: '197px',
            borderRadius: '10px',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#676666',
            display: 'flex',
            alignItems: 'center',
            padding: '5px',
          }}
        >
          {selectedImage ? (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          ) : (
            'Cliquez ici pour selectionner une image'
          )}
        </label>
        <input
          type="file"
          id="image"
          onChange={handleChangeImage}
          accept="image"
          className={styles.input_image}
        />
      </span>
    </div>
  );
}

export default ImageUpload;
