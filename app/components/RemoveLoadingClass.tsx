"use client";

import { useEffect } from "react";

export default function RemoveLoadingClass() {
  useEffect(() => {
    document.documentElement.classList.remove("loading");
    document.body.style.overflow = "";
  }, []);

  return null;
}
