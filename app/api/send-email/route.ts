import { NextResponse } from 'next/server';
import AWS from 'aws-sdk';

export async function POST(req: Request) {
  // Extensive logging for debugging
  console.log('Environment Variables:', {
    ACCESS_KEY_ID: !!process.env.ACCESS_KEY_ID,
    SECRET_ACCESS_KEY: !!process.env.SECRET_ACCESS_KEY,
    REGION: process.env.REGION,
    EMAIL_SENDER: process.env.EMAIL_SENDER
  });

  try {
    // Validate credentials with more detailed checks
    if (!process.env.ACCESS_KEY_ID) {
      console.error('Missing ACCESS_KEY_ID');
      throw new Error('ACCESS_KEY_ID is not configured');
    }
    if (!process.env.SECRET_ACCESS_KEY) {
      console.error('Missing SECRET_ACCESS_KEY');
      throw new Error('SECRET_ACCESS_KEY is not configured');
    }

    // Explicit AWS configuration with error handling
    AWS.config.update({
      accessKeyId: process.env.ACCESS_KEY_ID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
      region: process.env.REGION || 'us-east-1'
    });

    const ses = new AWS.SES({ apiVersion: '2010-12-01' });

    if (req.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    const { sender, recipient, subject, body } = await req.json();

    if (!sender || !recipient || !subject || !body) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const params = {
      Source: process.env.EMAIL_SENDER || sender,
      Destination: { ToAddresses: [recipient] },
      Message: {
        Subject: { Data: subject },
        Body: { Text: { Data: body } },
      },
      ReplyToAddresses: [sender],
    };

    // Add more detailed error logging for SES
    try {
      const result = await ses.sendEmail(params).promise();

      const response = NextResponse.json({ 
        message: 'Email sent successfully',
        messageId: result.MessageId 
      });

      // CORS headers
      response.headers.set('Access-Control-Allow-Origin', '*');
      response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

      return response;
    } catch (sesError: any) {
      console.error('SES Specific Error:', {
        code: sesError.code,
        message: sesError.message,
        originalError: sesError
      });
      throw sesError;
    }
  } catch (error: any) {
    console.error('Comprehensive Email Sending Error:', {
      message: error.message,
      code: error.code,
      stack: error.stack,
      originalError: error
    });

    const response = NextResponse.json({ 
      error: 'Failed to send email',
      details: error.message || 'Unknown error',
      code: error.code
    }, { status: 500 });

    response.headers.set('Access-Control-Allow-Origin', '*');
    return response;
  }
}

export async function OPTIONS() {
  const response = new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
  return response;
}