"use client";

import { useEffect } from "react";
import { useWebHaptics } from "web-haptics/react";
import type { HapticInput } from "web-haptics";

type HapticHint = {
  explicit?: string | null;
  isSummary?: boolean;
  isButtonSlot?: boolean;
};

const VALID_PRESETS = new Set([
  "success",
  "warning",
  "error",
  "light",
  "medium",
  "heavy",
  "soft",
  "rigid",
  "selection",
  "nudge",
  "buzz",
]);

export const resolveHapticInput = ({
  explicit,
  isSummary = false,
  isButtonSlot = false,
}: HapticHint): HapticInput | null => {
  if (explicit === "off") return null;

  if (explicit && VALID_PRESETS.has(explicit)) {
    return explicit;
  }

  if (isSummary) return "selection";
  if (isButtonSlot) return "nudge";

  return "light";
};

const INTERACTIVE_SELECTOR = [
  "[data-haptic]",
  "button",
  "a[href]",
  "summary",
  "[role='button']",
].join(", ");

export default function AppHaptics() {
  const { trigger, isSupported } = useWebHaptics({
    debug: false,
    showSwitch: false,
  });

  useEffect(() => {
    if (!isSupported) return;

    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const interactive = target?.closest<HTMLElement>(INTERACTIVE_SELECTOR);

      if (!interactive) return;
      if (
        interactive.matches(":disabled") ||
        interactive.getAttribute("aria-disabled") === "true"
      ) {
        return;
      }

      const input = resolveHapticInput({
        explicit: interactive.dataset.haptic ?? null,
        isSummary: interactive.tagName === "SUMMARY",
        isButtonSlot: interactive.getAttribute("data-slot") === "button",
      });

      if (!input) return;
      trigger(input);
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [isSupported, trigger]);

  return null;
}
