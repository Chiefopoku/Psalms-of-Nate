import { NextResponse } from "next/server";
import { mockPsalms, mockProjects } from "@/data/mock-psalms";

export async function GET() {
  return NextResponse.json({ psalms: mockPsalms, projects: mockProjects });
}
