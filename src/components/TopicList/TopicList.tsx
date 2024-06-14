import { HiPencilAlt } from 'react-icons/hi';
import Link from 'next/link';
import React from 'react';
import { RemoveBtn } from '../ui';
import { Topic } from '@/types';

interface TopicListProps {
  topics: Topic[];
}

export const TopicList: React.FC<TopicListProps> = ({ topics }) => {
  return (
    <>
      {Array.isArray(topics) && topics.length > 0 ? (
        topics.map((topic) => (
          <div
            key={topic.id}
            className="my-3 flex items-start justify-between gap-5 border border-slate-300 p-4"
          >
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">{topic.title}</h1>
              <div>{topic.description}</div>
            </div>
            <div className="flex items-center gap-2">
              <RemoveBtn />
              <Link href={`/editTopic/${topic.id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No topics available.</p>
      )}
    </>
  );
};
