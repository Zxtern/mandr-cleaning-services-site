import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { fullName, email, phone, service, message } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "M&R Cleaning Website <quotes@marcoandruthcleaning.com>",
      to: [process.env.BUSINESS_EMAIL!],
      replyTo: email,
      subject: `New Quote Request - ${service || "General Inquiry"}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service:</strong> ${service || "Not selected"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        { error: "Unable to send quote request." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Quote request sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}