"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import AnimationContainer from "../global/animation-container";

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
    <AnimationContainer animation="fadeUp">
      <div className="relative my-8 group w-full">
        <div className="overflow-hidden rounded-lg border border-border bg-muted/30 transition-colors group-hover:border-border/80 w-full">
          {/* Header */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-2 border-b border-border/50">
            <span className="text-xs font-medium text-muted-foreground truncate">
              {language}
            </span>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleCopy}
              className="h-6 w-6 p-0 hover:bg-muted flex-shrink-0 ml-2"
            >
              {copied ? (
                <Check className="h-3 w-3 text-green-600" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
            </Button>
          </div>

          {/* Code */}
          <pre className="overflow-x-auto p-3 sm:p-4 text-xs sm:text-sm leading-relaxed w-full">
            <code className="text-foreground">{code}</code>
          </pre>
        </div>
      </div>
    </AnimationContainer>
  );
};

export default CodeBlock;
