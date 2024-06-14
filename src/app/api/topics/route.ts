import { NextRequest, NextResponse } from 'next/server';

import { Topic } from '../../../../models';
import { TopicInput } from '@/types';
import { connectMongoDB } from '../../../../libs/mongodb';

// Middleware to handle CORS
const cors = async (req: NextRequest) => {
  const headers = new Headers({
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': '*', // Replace with specific origin if needed
    'Access-Control-Allow-Methods': 'GET,OPTIONS,POST,DELETE',
    'Access-Control-Allow-Headers':
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  });

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers });
  }
  return null;
};

export const POST = async (req: NextRequest) => {
  await connectMongoDB();
  const corsResponse = await cors(req);
  if (corsResponse) return corsResponse;

  try {
    const body = await req.json();
    const { title, description }: TopicInput = body;

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

export const GET = async (req: NextRequest) => {
  await connectMongoDB();
  const corsResponse = await cors(req);
  if (corsResponse) return corsResponse;

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

export const DELETE = async (req: NextRequest) => {
  await connectMongoDB();
  const corsResponse = await cors(req);
  if (corsResponse) return corsResponse;

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
