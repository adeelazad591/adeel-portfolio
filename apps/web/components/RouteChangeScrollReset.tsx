"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Equivalent of the old react-router `ScrollToTopOnRouteChange`: reset
// scroll position on every route change (Next.js already does this for most
// navigations, but this keeps behavior identical to the original SPA).
export function RouteChangeScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
