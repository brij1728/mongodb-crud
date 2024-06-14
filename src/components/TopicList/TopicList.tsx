// src/components/TopicList/TopicList.tsx
'use client';

import React, { useEffect, useState } from 'react';

import { HiPencilAlt } from 'react-icons/hi';
import Link from 'next/link';
import { RemoveBtn } from '../ui';
import { Topic } from '@/types';
import { getTopics } from '../../services';

export const TopicList: React.FC = () => {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTopics();
      console.log('Fetched topics in component:', data);
      if (Array.isArray(data)) {
        setTopics(data);
      } else {
        console.error('Fetched data is not an array:', data);
        setTopics([]);
      }
    };
    fetchData();
  }, []);

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
