import { Topic } from '@/types';

export const getTopics = async (): Promise<Topic[]> => {
  const url = `${process.env.API_URL}/api/topics`;
  try {
    const response = await fetch(url, { cache: 'no-cache' });

    if (!response.ok) {
      throw new Error('Failed to fetch topics');
    }

    const data = await response.json();
    console.log('Fetched topics from API:', data);

    // Transform the data to match the Topic interface
    const topics: Topic[] = data.topics.map(
      (topic: { _id: string; title: string; description: string }) => ({
        id: topic._id,
        title: topic.title,
        description: topic.description,
      })
    );

    return topics;
  } catch (error) {
    console.error('Error fetching topics:', error);
    return [];
  }
};
