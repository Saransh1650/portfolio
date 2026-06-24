"use client";

import { PostHogProvider as PHProvider } from "posthog-js/react";

const key = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN ?? "";
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

export default function PostHogProvider({ children }: { children: React.ReactNode }) {
  if (!key) return <>{children}</>;

  return (
    <PHProvider
      apiKey={key}
      options={{
        api_host: host,
        capture_pageview: true,
        capture_pageleave: true,
        debug: process.env.NODE_ENV === "development",
      }}
    >
      {children}
    </PHProvider>
  );
}
