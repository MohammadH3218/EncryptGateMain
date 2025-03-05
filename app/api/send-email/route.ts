import { NextResponse } from 'next/server';
import AWS from 'aws-sdk';

// Add more detailed configuration
AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION || 'us-east-1',
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    // Additional config validation
    if (!process.env.ACCESS_KEY_ID || !process.env.SECRET_ACCESS_KEY) {
      throw new Error('AWS credentials are not properly configured');
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

    const result = await ses.sendEmail(params).promise();

    // Add CORS headers to the response
    const response = NextResponse.json({ 
      message: 'Email sent successfully',
      messageId: result.MessageId 
    });
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return response;
  } catch (error: any) {
    console.error('Email sending error:', error);
    const response = NextResponse.json({ 
      error: error.message,
      details: error.code || 'Unknown error' 
    }, { status: 500 });
    response.headers.set('Access-Control-Allow-Origin', '*');
    return response;
  }
}

export async function OPTIONS() {
  // Preflight request handler
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