import { Topic, TopicInput } from '@/types';

export const addTopic = async (topic: TopicInput): Promise<Topic> => {
  const url = `${process.env.API_URL}/api/topics`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(topic),
    });

    if (!response.ok) {
      throw new Error('Failed to add topic');
    }

    const data = await response.json();
    console.log('Added topic:', data);

    return {
      id: data.topic._id,
      title: data.topic.title,
      description: data.topic.description,
    };
  } catch (error) {
    console.error('Error adding topic:', error);
    throw error;
  }
};
