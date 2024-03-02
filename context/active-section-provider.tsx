"use client";
import { links } from "@/lib/Data";
import { createContext, useContext, useState } from "react";

type sectionType = (typeof links)[number]["name"];
export type sectionContextType = {
  activeSection: sectionType;
  setActiveSection: React.Dispatch<React.SetStateAction<sectionType>>;
  setLastTimeClick: React.Dispatch<React.SetStateAction<number>>;
  lastTimeClick: number;
};
type ContextChildType = {
  children: React.ReactNode;
};

export const ActiveSectionContext = createContext<sectionContextType | null>(
  null
);

export default function ActiveSectionProvider({ children }: ContextChildType) {
  const [activeSection, setActiveSection] = useState<sectionType>("Home");
  const [lastTimeClick, setLastTimeClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        lastTimeClick,
        setLastTimeClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
