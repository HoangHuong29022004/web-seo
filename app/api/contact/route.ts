import { NextRequest, NextResponse } from 'next/server';

/**
 * API Route: POST /api/contact
 * Nhận form liên hệ từ khách hàng
 * Performance: Rate limiting nên implement trong production
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json({
        success: false,
        error: 'All fields are required',
      }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({
        success: false,
        error: 'Invalid email format',
      }, { status: 400 });
    }

    // TODO: Send email notification
    // await sendEmail({
    //   to: 'contact@autosale.vn',
    //   subject: `Liên hệ từ ${name}`,
    //   html: `
    //     <h2>Liên hệ mới từ website</h2>
    //     <p><strong>Tên:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Điện thoại:</strong> ${phone}</p>
    //     <p><strong>Tin nhắn:</strong> ${message}</p>
    //   `
    // });

    // TODO: Lưu vào database
    // await db.contacts.create(body);

    return NextResponse.json({
      success: true,
      message: 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong vòng 24h.',
    }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({
      success: false,
      error: 'Internal Server Error',
    }, { status: 500 });
  }
}

