import { Topic } from '@/types';

export const editTopic = async (topic: Topic): Promise<Topic> => {
  const url = `${process.env.API_URL}/api/topics/${topic.id}`;
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: topic.title,
        description: topic.description,
      }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      console.error(
        `Failed to edit topic. Status: ${response.status}, Message: ${errorMessage}`
      );
      throw new Error(`Failed to edit topic. Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Edited topic:', data);

    return {
      id: data.topic._id,
      title: data.topic.title,
      description: data.topic.description,
    };
  } catch (error) {
    console.error('Error editing topic:', error);
    throw error;
  }
};
