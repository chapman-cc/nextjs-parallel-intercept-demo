"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren } from "react";

export default function RouterBackButton({ children }: PropsWithChildren) {
  const router = useRouter();
  return <Button onClick={router.back}>{children}</Button>;
}
