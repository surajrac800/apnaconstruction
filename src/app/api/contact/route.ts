import { NextRequest, NextResponse } from "next/server";
import { ContactFormData, ApiResponse } from "@/types";
import { validateEmail, validatePhone } from "@/lib/utils";

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validation
    if (!body.name || !body.email || !body.phone || !body.message) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          error: "All fields are required",
        },
        { status: 400 }
      );
    }

    if (!validateEmail(body.email)) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          error: "Invalid email address",
        },
        { status: 400 }
      );
    }

    if (!validatePhone(body.phone)) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          error: "Invalid phone number",
        },
        { status: 400 }
      );
    }

    // TODO: Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM system
    // For now, we'll just log it
    console.log("Contact form submission:", body);

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json<ApiResponse>(
      {
        success: true,
        message: "Contact form submitted successfully",
        data: { id: Date.now().toString() },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}

