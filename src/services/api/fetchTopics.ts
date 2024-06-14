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
    return data.topics;
  } catch (error) {
    console.error('Error fetching topics:', error);
    return [];
  }
};
