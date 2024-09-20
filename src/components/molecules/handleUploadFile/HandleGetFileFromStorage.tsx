/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useDropzone } from 'react-dropzone';
import Heading from '../../ui/heading';
const HandleGetFileFromStorage = () => {
  const onDrop = React.useCallback((acceptedFiles: any) => {
    if (acceptedFiles) {
      setFile(acceptedFiles[0]);
    }
  }, []);
  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    maxFiles: 1,
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/jpg': [],
      'image/png': [],
    },
  });
  console.log(fileRejections);
  const [file, setFile] = React.useState<any>(null);
  return (
    <div className="size-48 mx-auto mb-10 lg:sticky top-0">
      {/* on large device the upload file stick to the top  */}
      <Heading className="text-center">Photo</Heading>
      <div
        {...getRootProps({
          className:
            'flex items-center justify-center mx-auto border-black rounded-sm shadow size-48 place-items-center ring-1 ring-gray-300  mx-auto mb-6',
        })}
      >
        <input {...getInputProps()} />
        {!file ? (
          <>
            <p>
              drag and drop or
              <br />
              click to select
            </p>
          </>
        ) : (
          <img
            className="object-fill size-full"
            src={URL.createObjectURL(file)}
          ></img>
        )}
      </div>
    </div>
  );
};

export default HandleGetFileFromStorage;
