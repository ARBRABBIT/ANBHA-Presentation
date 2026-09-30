"use client";

import { useLayoutEffect, type RefObject } from "react";
import { gsap } from "@/lib/gsap";

export function useGsap(
  callback: () => void,
  scope: RefObject<HTMLElement | null>,
  dependencies: React.DependencyList = [],
) {
  useLayoutEffect(() => {
    if (!scope.current) return;
    const gsapContext = gsap.context(callback, scope.current);
    return () => gsapContext.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
