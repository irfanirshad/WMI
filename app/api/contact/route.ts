import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations/contact';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);
    
    // In a real application, you would typically:
    // 1. Store the contact form submission in a database
    // 2. Send notification emails
    // 3. Integrate with CRM systems
    // For now, we'll just return the validated data
    
    return NextResponse.json(validatedData, { status: 201 });
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: error.errors?.[0]?.message || 'Internal Server Error' },
      { status: error.errors ? 400 : 500 }
    );
  }
}