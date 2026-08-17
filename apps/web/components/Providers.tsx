"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster, SonnerToaster } from "@adeel-portfolio/ui";

import { RouteChangeScrollReset } from "./RouteChangeScrollReset";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <SonnerToaster />
      <RouteChangeScrollReset />
      {children}
    </QueryClientProvider>
  );
}
