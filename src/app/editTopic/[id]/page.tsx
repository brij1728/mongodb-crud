'use client';

import React, { useEffect, useState } from 'react';

import { EditTopicForm } from '@/components';
import { Topic } from '@/types';
import { getTopicById } from '@/services/api/getTopicById';
import { useParams } from 'next/navigation';

const EditTopic = () => {
  const { id } = useParams();
  const [topic, setTopic] = useState<Topic | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopic = async () => {
      try {
        const topicId = Array.isArray(id) ? id[0] : id;
        const fetchedTopic = await getTopicById(topicId);
        setTopic(fetchedTopic);
      } catch (err) {
        setError('Failed to fetch topic');
        console.error('Error fetching topic:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTopic();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return topic ? <EditTopicForm topic={topic} /> : <div>Topic not found</div>;
};

export default EditTopic;
