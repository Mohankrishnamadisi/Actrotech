"use client";

import dynamic from "next/dynamic";
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

const ThemeProvider = dynamic(() => import("next-themes").then((mod) => mod.ThemeProvider), {
  ssr: false,
});

function ScrollAnimator() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-animate]'));
    elements.forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
      <ScrollAnimator />
      <Toaster
        toastOptions={{
          duration: 5000,
          style: {
            background: '#111827',
            color: '#ffffff',
            border:'1px solid #4a6cf7',
            borderRadius: '12px',
            boxShadow: '0 10px 24px rgba(0,0,0,0.28)',
            fontWeight: 600,
          },
        }}
      />
    </ThemeProvider>
  );
}
