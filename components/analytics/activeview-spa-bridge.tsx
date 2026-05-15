"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ActiveViewSPABridge() {
  const pathname = usePathname();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }

    const timer = setTimeout(() => {
      try {
        const win = window as any;
        if (win.googletag && win.googletag.pubads) {
          win.googletag.cmd.push(() => {
            win.googletag.pubads().refresh();
          });
        }
      } catch (e) {
        console.error("ActiveView SPA Bridge error:", e);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
