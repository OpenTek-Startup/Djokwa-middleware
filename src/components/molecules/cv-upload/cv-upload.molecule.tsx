import React, { ChangeEvent, useState } from 'react';
import styles from './cvUpload.module.css';

type Props = {
  icon: React.ReactNode;
};

function CvUpload({ icon }: Props) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const MAX_FILE_SIZE = 1 * 1024 * 1024;

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.size > MAX_FILE_SIZE)
        return alert('Le fichier ne doit pas dépasser 1MB');
      else setSelectedFile(file);
    }
  };
  return (
    <div className={styles.container}>
      {/* <label htmlFor="Curriculum_Vitae ">Curriculum Vitae </label> */}
      <span
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '10px',
          border: '1px solid #676666',
          padding: '5px',
          position: 'relative',
        }}
      >
        <label
          htmlFor="CurriculumVitae"
          style={{
            height: '100%',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#676666',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {selectedFile ? (
            <div
              style={{
                width: '100%',
              }}
            >
              {selectedFile.name}
            </div>
          ) : (
            'Cliquez ici pour selectionner un fichier'
          )}
        </label>
        <span style={{ position: 'absolute', top: '10px', left: '20px' }}>
          {icon}
        </span>
        <input
          type="file"
          id="CurriculumVitae"
          onChange={handleChangeFile}
          accept="application/pdf"
          className={styles.input_image}
        />
      </span>
    </div>
  );
}

export default CvUpload;
