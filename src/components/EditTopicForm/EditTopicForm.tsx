'use client';

import React, { useEffect, useState } from 'react';

import { Topic } from '@/types';
import { editTopic } from '@/services/api/editTopic';
import { useRouter } from 'next/router';

interface EditTopicFormProps {
  topic: Topic | undefined;
}

export const EditTopicForm: React.FC<EditTopicFormProps> = ({ topic }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (topic) {
      setTitle(topic.title);
      setDescription(topic.description);
    }
  }, [topic]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!topic) {
      console.error('Topic is undefined');
      return;
    }

    const updatedTopic = { id: topic.id, title, description };

    try {
      await editTopic(updatedTopic);
      console.log('Topic updated:', updatedTopic);
      router.push('/');
    } catch (error) {
      console.error('Error updating topic:', error);
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        className="rounded border border-slate-500 px-4 py-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Topic Title"
      />
      <textarea
        className="h-32 resize-none rounded border border-slate-500 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Topic Description"
      />
      <button
        className="text-bold w-full rounded bg-blue-600 px-5 py-3 text-white transition duration-300 hover:bg-blue-700"
        type="submit"
      >
        Update Topic
      </button>
    </form>
  );
};
