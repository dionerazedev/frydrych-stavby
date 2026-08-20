"use client";

import { useLayoutEffect } from "react";

export function DirectionContract({ value }: { value: string }) {
  useLayoutEffect(() => {
    const existing = Array.from(document.body.childNodes).find(
      (node) => node.nodeType === Node.COMMENT_NODE && node.nodeValue?.includes("REF-FS-724X2172"),
    );

    if (existing) return;

    const comment = document.createComment(`\n${value}\n`);
    document.body.insertBefore(comment, document.body.firstChild);

    return () => comment.remove();
  }, [value]);

  return null;
}
