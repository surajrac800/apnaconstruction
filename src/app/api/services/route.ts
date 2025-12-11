import { NextResponse } from "next/server";
import { ApiResponse, Service } from "@/types";
import { HOME_SERVICES, CONSTRUCTION_SERVICES } from "@/lib/constants";

export async function GET() {
  try {
    // Combine home services and construction services
    const allServices: Service[] = [
      ...HOME_SERVICES.map((service) => ({
        id: service.id,
        title: service.title,
        description: service.description,
        icon: service.icon,
      })),
      ...CONSTRUCTION_SERVICES.map((service) => ({
        id: service.id,
        title: service.title,
        description: service.description,
        icon: service.icon,
      })),
    ];

    return NextResponse.json<ApiResponse<Service[]>>(
      {
        success: true,
        data: allServices,
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

