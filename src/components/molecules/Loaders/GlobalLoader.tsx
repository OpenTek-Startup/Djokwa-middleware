import React from 'react';
import { Loader } from './loader';

export const GlobalLoader = () => {
  return (
    <div
      className=" text-6xl fixed inset-0 h-screen w-screen z-10
    grid place-items-center
    "
    >
      <Loader />
    </div>
  );
};
