export const deleteTopic = async (id: string): Promise<void> => {
  const url = `${process.env.API_URL}/api/topics?id=${id}`;
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      console.error(
        `Failed to delete topic. Status: ${response.status}, Message: ${errorMessage}`
      );
      throw new Error('Failed to delete topic');
    }

    console.log('Deleted topic:', id);
  } catch (error) {
    console.error('Error deleting topic:', error);
    throw error;
  }
};
