'use client';

import React, { useEffect, useState } from 'react';

import { Loader } from '../Loader';
import { Topic } from '@/types';
import { TopicList } from '../TopicList';
import { getTopics } from '@/services';

export const TopicsContainer: React.FC = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getTopics();
      console.log('Fetched topics in component:', data);
      if (Array.isArray(data)) {
        setTopics(data);
      } else {
        console.error('Fetched data is not an array:', data);
        setTopics([]);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return <TopicList topics={topics} />;
};
