'use client';

import { HiOutlineTrash } from 'react-icons/hi';
import React from 'react';
import { deleteTopic } from '@/services';
import { useRouter } from 'next/navigation';

interface RemoveBtnProps {
  id: string;
  title?: string;
}

export const RemoveBtn: React.FC<RemoveBtnProps> = ({ id, title }) => {
  const router = useRouter();

  const removeTopic = async () => {
    const userConfirmed = window.confirm(
      `Are you sure you want to remove topic: ${title}?`
    );
    if (!userConfirmed) {
      return;
    }

    try {
      console.log('Deleting topic:', id);
      await deleteTopic(id);
      console.log('Deleted topic:', id);
      router.refresh();
    } catch (error) {
      console.error('Error deleting topic:', error);
    }
  };

  return (
    <button className="text-red-400" onClick={removeTopic}>
      <HiOutlineTrash size={24} />
    </button>
  );
};
