import { NextRequest, NextResponse } from 'next/server';

import { Topic } from '../../../../../models';
import { Topic as TopicType } from '../../../../types';
import { connectMongoDB } from '../../../../../libs';

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  await connectMongoDB();

  const { id } = params;

  try {
    const body: TopicType & { id: string } = await req.json();
    const { title, description } = body;

    if (!id || !title || !description) {
      return NextResponse.json(
        { error: 'ID, title, and description are required' },
        { status: 400 }
      );
    }

    const topic = await Topic.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );

    if (!topic) {
      return NextResponse.json({ error: 'Topic not found' }, { status: 404 });
    }

    return NextResponse.json(
      {
        message: 'Topic updated successfully',
        topic,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      { error: 'Error updating topic' },
      { status: 500 }
    );
  }
};

export default PUT;
