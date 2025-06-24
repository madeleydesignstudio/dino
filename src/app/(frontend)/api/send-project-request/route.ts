import { Resend } from 'resend';
import { ProjectRequestTemplate } from '@/components/email/project-request-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = [
      'fullName',
      'email',
      'company',
      'projectName',
      'projectDescription',
      'pageCount',
      'serviceType',
      'brandStatus',
      'websiteType',
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return Response.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Send confirmation email to the client
    const clientEmailResult = await resend.emails.send({
      from: 'Madeley Design Studio <mail@madeleydesignstudio.com>',
      to: [body.email],
      subject: 'Your Project Request Received - Madeley Design Studio',
      react: ProjectRequestTemplate({
        ...body,
        isForClient: true,
      }) as React.ReactElement,
    });

    // Send detailed project request to Daniel
    const danielEmailResult = await resend.emails.send({
      from: 'Project Requests <mail@madeleydesignstudio.com>',
      to: ['daniel@madeleydesignstudio.com'],
      subject: `New Detailed Project Request from ${body.fullName} (${body.company})`,
      react: ProjectRequestTemplate({
        ...body,
        isForClient: false,
      }) as React.ReactElement,
    });

    // Check for errors in either email
    if (clientEmailResult.error) {
      console.error('Error sending client email:', clientEmailResult.error);
      return Response.json(
        { error: 'Failed to send confirmation email' },
        { status: 500 }
      );
    }

    if (danielEmailResult.error) {
      console.error(
        'Error sending notification email:',
        danielEmailResult.error
      );
      return Response.json(
        { error: 'Failed to send notification email' },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      clientEmailId: clientEmailResult.data?.id,
      danielEmailId: danielEmailResult.data?.id,
    });
  } catch (error) {
    console.error('Project request error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
