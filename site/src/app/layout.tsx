import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "BCBS239 Data Governance Accelerator",
  description:
    "Simulation d’un dispositif de gouvernance et de qualité des données pour une banque, avec cockpit de pilotage intégré au site.",
};

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/projet", label: "Le projet" },
  { href: "/governance", label: "Gouvernance des données" },
  { href: "/data-quality", label: "Qualité des données" },
  { href: "/dashboard", label: "Cockpit de pilotage" },
  { href: "/architecture", label: "Architecture" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="text-slate-100 antialiased">
        <div className="fixed inset-0 -z-20 bg-[#020617]" />
        <div className="fixed inset-0 -z-10 grid-glow opacity-80" />

        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-bold text-white shadow-lg shadow-cyan-500/10">
                DG
              </div>
              <div>
                <p className="text-sm font-semibold tracking-wide text-white">
                  BCBS239 Accelerator
                </p>
                <p className="text-xs text-slate-400">
                  Gouvernance, qualité et pilotage de la donnée
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-1.5 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-2 text-sm text-slate-300 hover:bg-white/8 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <div className="relative">{children}</div>
      </body>
    </html>
  );
}