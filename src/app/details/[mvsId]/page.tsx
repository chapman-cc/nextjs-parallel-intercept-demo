import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ mvsId: string }>;
}) {
  const { mvsId } = await params;
  return <div>stand alone details page, mvsId: {mvsId}</div>;
}
