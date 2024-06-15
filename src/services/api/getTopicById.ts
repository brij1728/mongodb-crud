import { Topic } from '@/types';

export const getTopicById = async (id: string): Promise<Topic> => {
  const url = `${process.env.API_URL}/api/topics/${id}`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      console.error(
        `Failed to get topic by id. Status: ${response.status}, Message: ${errorMessage}`
      );
      throw new Error(`Failed to get topic by id. Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Fetched topic:', data);

    return {
      id: data.topic._id,
      title: data.topic.title,
      description: data.topic.description,
    };
  } catch (error) {
    console.error('Error getting topic by id:', error);
    throw error;
  }
};
