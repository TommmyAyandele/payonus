"use client";

import React from "react";
import SalesModal from "./SalesModal";

interface SalesModalOpenContext {
  pageIndustry?: string;
  formName?: string;
}

interface SalesModalContextValue {
  isOpen: boolean;
  open: (ctx?: SalesModalOpenContext) => void;
  close: () => void;
}

const SalesModalContext = React.createContext<SalesModalContextValue | null>(null);

export function SalesModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [openContext, setOpenContext] = React.useState<SalesModalOpenContext>({});
  const open = React.useCallback((ctx?: SalesModalOpenContext) => { setOpenContext(ctx ?? {}); setIsOpen(true); }, []);
  const close = React.useCallback(() => setIsOpen(false), []);

  return (
    <SalesModalContext.Provider value={{ isOpen, open, close }}>
      {children}
      <SalesModal isOpen={isOpen} onClose={close} pageIndustry={openContext.pageIndustry} formName={openContext.formName} />
    </SalesModalContext.Provider>
  );
}

/** Returns { open } so any CTA can trigger the sales overlay directly. */
export function useSalesModal() {
  const ctx = React.useContext(SalesModalContext);
  if (!ctx) throw new Error("useSalesModal must be used within SalesModalProvider");
  return ctx;
}
