import { NextRequest, NextResponse } from "next/server";

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent";
const API_KEY = process.env.GOOGLE_API_KEY;

export async function POST(request: NextRequest) {
  try {
    if (!API_KEY) {
      console.log("Missing GOOGLE_API_KEY")
      return NextResponse.json({ success: false, reply: "AI service is unavailable." }, { status: 500 });
    }

    const body = await request.json();
    const prompt = body.message || "";

    const response = await fetch(`${GEMINI_API_URL}?key=${API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: {
          text: prompt,
        },
        temperature: 0.7,
        maxOutputTokens: 512,
      }),
    });

    const textBody = await response.text();
    console.log("Gemini API status", response.status);
    console.log("Gemini API body", textBody);

    let data;
    try {
      data = JSON.parse(textBody);
    } catch (error) {
      console.log("Failed to parse Gemini response", error);
      return NextResponse.json({ success: false, reply: "Unable to parse AI response." }, { status: 500 });
    }

    const extracted = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!extracted) {
      console.log("Gemini response missing content, data", data);
      return NextResponse.json({ success: false, reply: "AI did not return a valid reply." }, { status: 500 });
    }

    return NextResponse.json({ success: true, reply: extracted });
  } catch (error) {
    console.log("Gemini API request error", error);
    return NextResponse.json({ success: false, reply: "AI service is currently unavailable." }, { status: 500 });
  }
}
