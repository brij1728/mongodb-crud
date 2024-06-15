'use client';

import React, { useState } from 'react';

import { addTopic } from '@/services/api/addTopics';
import { useRouter } from 'next/navigation';

export const AddTopicForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');

    if (!title || !description) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      await addTopic({ title, description });
      console.log('Topic added successfully');
    } catch (error) {
      console.error('Error adding topic:', error);
      alert('There was an error adding the topic. Please try again.');
      return;
    }

    // Redirect to the homepage
    router.push('/');
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        className="rounded border border-slate-500 px-8 py-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Topic Title"
      />
      <input
        className="rounded border border-slate-500 px-8 py-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Topic Description"
      />

      <button
        className="text-bold w-full rounded bg-slate-700 px-5 py-3 text-white"
        type="submit"
      >
        Add Topic
      </button>
    </form>
  );
};
