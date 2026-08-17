"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { Toaster, SonnerToaster } from "@adeel-portfolio/ui";

import { RouteChangeScrollReset } from "./RouteChangeScrollReset";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <SonnerToaster />
        <RouteChangeScrollReset />
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  );
}
