"use client";

import React from "react";
import SalesModal from "./SalesModal";

interface SalesModalContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const SalesModalContext = React.createContext<SalesModalContextValue | null>(null);

export function SalesModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const open = React.useCallback(() => setIsOpen(true), []);
  const close = React.useCallback(() => setIsOpen(false), []);

  return (
    <SalesModalContext.Provider value={{ isOpen, open, close }}>
      {children}
      <SalesModal isOpen={isOpen} onClose={close} />
    </SalesModalContext.Provider>
  );
}

/** Returns { open } so any CTA can trigger the sales overlay directly. */
export function useSalesModal() {
  const ctx = React.useContext(SalesModalContext);
  if (!ctx) throw new Error("useSalesModal must be used within SalesModalProvider");
  return ctx;
}
