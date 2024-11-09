import { NextResponse } from 'next/server';
import { handleGetTest, handlePostTest } from '../../../controllers/testController';

export async function GET() {
  // Panggil controller untuk menangani GET request
  const result = handleGetTest();
  return NextResponse.json(result);
}

export async function POST(request) {
  // Ambil data dari body request
  const { name } = await request.json();

  // Panggil controller untuk menangani POST request
  const result = handlePostTest(name);
  const status = result.success ? 200 : 400;
  return NextResponse.json(result, { status });
}
