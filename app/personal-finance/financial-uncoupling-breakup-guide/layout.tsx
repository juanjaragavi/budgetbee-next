import type { ReactNode } from "react";
import { JsonLd } from "@/components/seo/json-ld";
import { createRouteStructuredData } from "@/lib/seo";

const routePath = "/personal-finance/financial-uncoupling-breakup-guide";

export default function RouteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <JsonLd data={createRouteStructuredData(routePath)} />
    </>
  );
}
