import { NextRequest, NextResponse } from 'next/server';

import { Topic } from '../../../../models';
import { Topic as TopicType } from '../../../types';
import { connectMongoDB } from '../../../../libs';

export const POST = async (req: NextRequest) => {
  await connectMongoDB();

  try {
    const body = await req.json();
    const { title, description }: TopicType = body;

    if (!title || !description) {
      return NextResponse.json(
        { error: 'Title and description are required' },
        { status: 400 }
      );
    }

    const topic = await Topic.create({ title, description });
    return NextResponse.json(
      {
        message: 'Topic created successfully',
        topic,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      { error: 'Error creating topic' },
      { status: 500 }
    );
  }
};
