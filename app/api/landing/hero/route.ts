import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://fasonly-website-api-main-pk27te.laravel.cloud/api/site-settings",
    );

    if (!response.ok) {
      // Return a JSON error for non-200 responses
      return NextResponse.json(
        { error: `External API responded with status: ${response.status}` },
        { status: response.status },
      );
    }

    const data = await response.json();

    // Ensure we're returning a valid JSON response
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("API Proxy Error:", error.message);

    // Always return a valid JSON object for errors
    return NextResponse.json(
      {
        error: "Failed to fetch site settings",
        details: error.message,
        // Provide fallback data to prevent frontend from breaking
        data: { hero_objects: [], faqs: [] },
      },
      { status: 500 },
    );
  }
}
