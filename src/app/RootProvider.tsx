"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { DataIntializer } from "./DataInitializer";

const queryClient = new QueryClient();

export const RootProvider = React.memo(
  ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <QueryClientProvider client={queryClient}>
          {children}
          <DataIntializer />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </>
    );
  }
);

RootProvider.displayName = "RootProvider";
