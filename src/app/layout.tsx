import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zeviewer - AI Model Review Platform | Rate & Review AI Models",
  description: "Zeviewer is an open AI model review platform. Browse, rate, and review the latest AI models from OpenAI, Google, Anthropic, Meta, DeepSeek and more. No login required. 158+ models including GPT-5, Claude Opus 4.6, Gemini 3, Llama 4, DeepSeek R2.",
  keywords: "AI model reviews, ChatGPT reviews, Claude reviews, Gemini reviews, AI ratings, machine learning reviews, OpenAI, Anthropic, Google DeepMind, Meta AI, DeepSeek, Llama, Qwen, review AI models, rate AI models",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
