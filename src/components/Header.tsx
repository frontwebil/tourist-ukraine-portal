"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Головна" },
  { href: "/about", label: "Про сайт" },
  { href: "/gallery", label: "Галерея" },
  { href: "/news", label: "Новини" },
  { href: "/contacts", label: "Контакти" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="logo">
            <span className="logo-icon">🇺🇦</span>
            <span>TouristUA</span>
          </Link>

          <nav>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={pathname === item.href ? "active" : ""}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="burger"
            onClick={() => setMenuOpen(true)}
            aria-label="Відкрити меню"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Мобільне меню */}
      <div
        className={`mobile-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button
          className="mobile-menu-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Закрити меню"
        >
          ✕
        </button>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
