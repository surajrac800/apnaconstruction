import { NextResponse } from "next/server";
import { ApiResponse, Project } from "@/types";

// Sample projects data - replace with database query
const SAMPLE_PROJECTS: Project[] = [
  {
    id: "1",
    title: "Modern Residential Complex",
    description: "A beautiful 50-unit residential complex with modern amenities",
    image: "/api/placeholder/600/400",
    category: "Residential",
    location: "Downtown",
    year: "2024",
  },
  {
    id: "2",
    title: "Commercial Office Building",
    description: "10-story office building with state-of-the-art facilities",
    image: "/api/placeholder/600/400",
    category: "Commercial",
    location: "Business District",
    year: "2023",
  },
];

export async function GET() {
  try {
    // TODO: Replace with actual database query
    const projects: Project[] = SAMPLE_PROJECTS;

    return NextResponse.json<ApiResponse<Project[]>>(
      {
        success: true,
        data: projects,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}

