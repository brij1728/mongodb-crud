import { HiOutlineTrash } from 'react-icons/hi';
import React from 'react';

export const RemoveBtn = () => {
  return (
    <button className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
};
