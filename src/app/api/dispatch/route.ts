import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    let bodyData: Record<string, any> = {};

    if (contentType.includes('application/json')) {
      bodyData = await request.json();
    } else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      formData.forEach((val, key) => {
        bodyData[key] = val;
      });
    }

    const dispatchRef = `SAT-ET-${Math.floor(100000 + Math.random() * 900000)}`;

    return NextResponse.json({
      success: true,
      dispatchRef,
      message: 'Dispatch intake logged successfully.',
      timestamp: new Date().toISOString(),
      intake: bodyData,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to process dispatch intake.' },
      { status: 500 }
    );
  }
}
