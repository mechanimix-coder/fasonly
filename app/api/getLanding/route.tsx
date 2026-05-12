import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://fasonly-website-api-main-pk27te.laravel.cloud/api/site-settings",
    );

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to fetch site settings", ctx: error.message },
      { status: 500 },
    );
  }
}
