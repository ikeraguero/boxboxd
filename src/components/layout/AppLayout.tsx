import type React from "react";
import { Navbar } from "../Navbar";

type AppLayoutProps = {
  children: React.ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="max-w-[1400px]">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
