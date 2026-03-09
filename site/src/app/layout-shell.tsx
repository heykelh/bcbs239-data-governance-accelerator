"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/projet", label: "Le projet" },
  { href: "/governance", label: "Gouvernance des données" },
  { href: "/data-quality", label: "Qualité des données" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/architecture", label: "Architecture" },
];

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed inset-0 -z-20 bg-[#020617]" />
      <div className="fixed inset-0 -z-10 grid-glow opacity-80" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
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

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-slate-950/95">
            <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6 lg:px-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200 hover:bg-white/[0.08] hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <div className="relative">{children}</div>
    </>
  );
}