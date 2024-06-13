import { HiPencilAlt } from 'react-icons/hi';
import Link from 'next/link';
import React from 'react';
import { RemoveBtn } from '../ui';

export const TopicList = () => {
  return (
    <>
      <div className="my-3 flex items-start justify-between gap-5 border border-slate-300 p-4">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Topics</h1>
          <div>description</div>
        </div>
        <div className="flex items-center gap-2">
          <RemoveBtn />
          <Link href="/editTopic/123">
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </>
  );
};
