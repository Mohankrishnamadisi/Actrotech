import axios from "axios";
import { NextResponse } from "next/server";

const GEMINI_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const userMessage = body?.message;

    if (!userMessage || typeof userMessage !== "string") {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Gemini API key missing" }, { status: 500 });
    }

    const payload = {
      contents: [
        {
          parts: [{ text: userMessage }],
        },
      ],
    };

    const response = await axios.post(`${GEMINI_URL}?key=${apiKey}`, payload, {
      headers: { "Content-Type": "application/json" },
    });

    const result = response.data;

    // Safe fallback extraction
    const text =
      result?.candidates?.[0]?.content?.[0]?.text ||
      result?.output?.[0]?.content?.[0]?.text ||
      "I’m sorry, I could not get a response from Gemini right now.";

    return NextResponse.json({ text });
  } catch (error: any) {
    console.error("Gemini API error:", error?.message || error);
    return NextResponse.json(
      { error: "Could not retrieve response. Please try again later." },
      { status: 500 }
    );
  }
}
