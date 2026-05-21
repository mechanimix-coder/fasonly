import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://fasonly-website-api-main-pk27te.laravel.cloud/api/articles",
      { next: { revalidate: 3600 } }, // Optional: Revalidate data every hour
    );

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();

    // Return the data in a consistent format
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    // Return a fallback response to prevent the frontend from crashing
    return NextResponse.json(
      {
        data: [],
        error: "Failed to fetch blog posts. Please try again later.",
      },
      { status: 500 },
    );
  }
}
