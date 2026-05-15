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
        if (win.av && typeof win.av.start === "function") {
          // Destroy old slots to allow ActiveView to recreate them 
          // on the new DOM elements provided by Next.js router
          if (win.googletag && win.googletag.destroySlots) {
            win.googletag.destroySlots();
          }
          // Reset AV slots array if possible so it re-fetches
          if (win.av.slots) {
            win.av.slots = [];
          }
          // Re-evaluate script to recreate slots configuration
          const oldScript = document.getElementById("activeview-script");
          if (oldScript) oldScript.remove();
          
          const script = document.createElement("script");
          script.id = "activeview-script";
          script.src = "https://scr.actview.net/budgetbeepro.js";
          script.async = true;
          document.head.appendChild(script);
        }
      } catch (e) {
        console.error("ActiveView SPA Bridge error:", e);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
