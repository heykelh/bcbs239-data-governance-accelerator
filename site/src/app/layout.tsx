import "./globals.css";
import type { Metadata } from "next";
import LayoutShell from "./layout-shell";

export const metadata: Metadata = {
  title: "BCBS239 Data Governance Accelerator",
  description:
    "Simulation d’un dispositif de gouvernance et de qualité des données pour une banque, avec cockpit de pilotage intégré au site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="text-slate-100 antialiased">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}