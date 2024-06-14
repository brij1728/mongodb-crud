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

export const GET = async () => {
  await connectMongoDB();

  try {
    const topics = await Topic.find();
    return NextResponse.json({ topics });
  } catch (error: unknown) {
    return NextResponse.json(
      { error: 'Error fetching topics' },
      { status: 500 }
    );
  }
};

export const PUT = async (req: NextRequest) => {
  await connectMongoDB();

  try {
    const body = await req.json();
    const {
      id,
      title,
      description,
    }: { id: string; title: string; description: string } = body;

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

export const DELETE = async (req: NextRequest) => {
  await connectMongoDB();

  try {
    const id = req.nextUrl.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const topic = await Topic.findByIdAndDelete(id);

    if (!topic) {
      return NextResponse.json({ error: 'Topic not found' }, { status: 404 });
    }

    return NextResponse.json(
      {
        message: 'Topic deleted successfully',
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      { error: 'Error deleting topic' },
      { status: 500 }
    );
  }
};
