import { NextResponse } from "next/server";
import { ApiResponse, Service } from "@/types";
import { SERVICES } from "@/lib/constants";

export async function GET() {
  try {
    const services: Service[] = SERVICES.map((service) => ({
      id: service.id,
      title: service.title,
      description: service.description,
    }));

    return NextResponse.json<ApiResponse<Service[]>>(
      {
        success: true,
        data: services,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}

