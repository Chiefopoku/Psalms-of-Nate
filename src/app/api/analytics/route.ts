import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ downloads: 0, pdfViews: 0, streamingClicks: 0 });
}
