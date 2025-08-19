import { createContext, useContext } from "react";
import type { UseFunnelResults } from "@use-funnel/react-router-dom";

type FunnelSteps = {
  home: {};
  income: {};
  welfare: {};
  benefit: {};
  voice: {};
  harumi: {};
  analyze: {};
};

type ReactRouterDomRouteOption = {
  replace?: boolean;
};

export type FunnelType = UseFunnelResults<FunnelSteps, ReactRouterDomRouteOption>;

export const FunnelContext = createContext<FunnelType | null>(null);

export function useFunnelContext() {
  const ctx = useContext(FunnelContext);
  if (!ctx) throw new Error("FunnelContext not found");
  return ctx;
}
