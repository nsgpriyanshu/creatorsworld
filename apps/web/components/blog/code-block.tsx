"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";

type CodeBlockProps = {
  code: string;
  language?: string;
};

const CodeBlock = ({ code, language = "javascript" }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="relative my-8 overflow-hidden rounded-2xl bg-muted border border-border -mx-4 md:mx-0">
      {/* Language badge */}
      <div className="absolute top-2 left-3 z-10 md:top-3 md:left-4">
        <span className="inline-block px-2 py-0.5 md:py-1 text-xs font-medium text-muted-foreground bg-background/50 rounded">
          {language}
        </span>
      </div>

      {/* Copy button */}
      <div className="absolute top-2 right-2 z-10 md:top-3 md:right-3">
        <Button
          size="sm"
          variant="ghost"
          onClick={handleCopy}
          className="h-8 w-8 p-0"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Code - with horizontal scroll for mobile */}
      <pre className="overflow-x-auto p-3 pt-10 md:p-5 md:pt-12 text-xs md:text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
