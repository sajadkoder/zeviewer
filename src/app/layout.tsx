import type { Metadata } from "next";
import { Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zeviewer - AI Model Review Platform | Rate & Review AI Models",
  description: "Zeviewer is an open AI model review platform. Browse, rate, and review the latest AI models from OpenAI, Google, Anthropic, Meta, DeepSeek and more. No login required. 158+ models including GPT-5, Claude Opus 4.6, Gemini 3, Llama 4, DeepSeek R2.",
  keywords: "AI model reviews, ChatGPT reviews, Claude reviews, Gemini reviews, AI ratings, machine learning reviews, OpenAI, Anthropic, Google DeepMind, Meta AI, DeepSeek, Llama, Qwen, review AI models, rate AI models",
  other: {
    "cache-control": "public, max-age=3600, s-maxage=86400",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${instrumentSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
