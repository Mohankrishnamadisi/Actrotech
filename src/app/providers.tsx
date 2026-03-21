"use client";

import dynamic from "next/dynamic";
import { Toaster } from 'react-hot-toast';

const ThemeProvider = dynamic(() => import("next-themes").then((mod) => mod.ThemeProvider), {
  ssr: false,
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
      <Toaster />
    </ThemeProvider>
  );
}
