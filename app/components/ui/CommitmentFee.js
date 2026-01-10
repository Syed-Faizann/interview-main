// components/CommitmentFee.js
"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

export default function CommitmentFee() {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount") || "0€";

  return <h1 className="text-base sm:text-lg md:text-xl font-bold">{amount}</h1>;
}
