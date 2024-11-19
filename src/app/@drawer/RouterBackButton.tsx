"use client";

import { useRouter } from "next/navigation";
import React, { PropsWithChildren } from "react";

export default function RouterBackButton({ children }: PropsWithChildren) {
  const router = useRouter();
  return <div onClick={router.back}>{children}</div>;
}
