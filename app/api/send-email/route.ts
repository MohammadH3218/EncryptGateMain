import { NextResponse } from 'next/server';
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const ses = new AWS.SES();

export async function POST(req: Request) {
  try {
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

    await ses.sendEmail(params).promise();

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
