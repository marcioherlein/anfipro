import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongodb";
import Lead from "../../../models/Lead";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, listingUrl, city, propertyCount, mainProblem, occupancy, revenueRange } = body;

    if (!name || !email) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const lead = await Lead.create({
      name,
      email,
      phone,
      listingUrl,
      city,
      propertyCount,
      mainProblem,
      occupancy,
      revenueRange,
    });

    return NextResponse.json(
      {
        message: "Lead saved successfully",
        lead: { id: lead._id, name: lead.name, email: lead.email },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving lead:", error);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDatabase();

    const leads = await Lead.find().sort({ createdAt: -1 }).lean();

    return NextResponse.json({ leads }, { status: 200 });
  } catch (error) {
    console.error("Error fetching leads:", error);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
