import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Extract UTM parameters from the request URL
  const searchParams = request.nextUrl.searchParams;
  const utmParams: string[] = [];

  // Collect any UTM parameters from the original request
  const utmKeys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ];

  utmKeys.forEach((key) => {
    const value = searchParams.get(key);
    if (value) {
      utmParams.push(`${key}=${encodeURIComponent(value)}`);
    }
  });

  // Build the redirect URL
  let redirectUrl = "/quiz";
  if (utmParams.length > 0) {
    redirectUrl += `?${utmParams.join("&")}`;
  }

  // Return a permanent redirect (301) to the quiz page
  return NextResponse.redirect(new URL(redirectUrl, request.url), {
    status: 301,
  });
}
