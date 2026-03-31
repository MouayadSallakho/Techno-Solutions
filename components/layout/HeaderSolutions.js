"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GrLanguage } from "react-icons/gr";
import { HiArrowUpRight } from "react-icons/hi2";
import styles from "./HeaderSolutions.module.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
  { label: "About Us", href: "/about-us" },
];

export default function HeaderSolutions() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className={styles.siteHeader}>
        <div className={`container ${styles.headerContainer}`}>
          <div className={styles.heroNavWrapper}>
            <div
              className={`d-none d-lg-flex align-items-center justify-content-between ${styles.heroNavDesktop}`}
            >
              <Link href="/" className={styles.brand}>
                <img
                  src="/images/MMainLogoSolutions.png"
                  alt="Techno Solutions Logo"
                />
              </Link>

              <nav
                className={styles.desktopNav}
                aria-label="Desktop navigation"
              >
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`${styles.navLink} ${
                        isActive ? styles.desktopActive : ""
                      }`}
                    >
                      {isActive ? (
                        <span className={styles.activeIcon}>
                          <HiArrowUpRight />
                        </span>
                      ) : (
                        <span className={styles.navDot}></span>
                      )}
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </nav>

              <div
                className={styles.desktopLang}
                aria-label="Language switcher"
              >
                <a href="#" className={styles.desktopLangActive}>
                  <span className={styles.langIcon}>
                    <GrLanguage />
                  </span>
                  <span>English</span>
                </a>
                <a href="#">
                  <span>AR</span>
                </a>
              </div>
            </div>

            <div
              className={`d-flex d-lg-none align-items-center justify-content-between ${styles.heroNavMobile}`}
            >
              <Link href="/" className={`${styles.brand} ${styles.mobileBrand}`}>
                <img
                  src="/images/MMainLogoSolutions.png"
                  alt="Techno Solutions Logo"
                />
              </Link>

              <div
                className={`d-flex align-items-center ${styles.mobileHeaderActions}`}
              >
                <div
                  className={styles.mobileLangSwitch}
                  aria-label="Mobile language switcher"
                >
                  <a href="#" className={styles.mobileTopLangActive}>
                    EN
                  </a>
                  <a href="#">AR</a>
                </div>

                <button
                  className={styles.menuToggleBtn}
                  type="button"
                  aria-label="Open menu"
                  onClick={() => setMenuOpen(true)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`${styles.mobileOverlay} ${
          menuOpen ? styles.mobileOverlayShow : ""
        }`}
      >
        <div
          className={`${styles.mobileOffcanvas} ${
            menuOpen ? styles.mobileOffcanvasShow : ""
          }`}
        >
          <div className={styles.mobileMenuHeader}>
            <Link href="/" className={`${styles.brand} ${styles.mobileMenuBrand}`}>
              <img
                src="/images/Logo-Techno-dark.png"
                alt="Techno Solutions Logo"
              />
            </Link>

            <button
              type="button"
              className={styles.mobileMenuClose}
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <span></span>
              <span></span>
            </button>
          </div>

          <div className={styles.mobileMenuBody}>
            <nav
              className={styles.mobileMenuLinks}
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={isActive ? styles.mobileMenuActive : ""}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className={styles.mobileMenuDivider}></div>

            <div className={styles.mobileMenuLang}>
              <span className={styles.mobileMenuLabel}>Language</span>

              <div className={styles.mobileMenuLangLinks}>
                <a href="#" className={styles.mobileMenuLangActive}>
                  <GrLanguage />
                  <span>English</span>
                </a>
                <a href="#">Arabic</a>
              </div>
            </div>
          </div>
        </div>

        <div
          className={styles.mobileBackdrop}
          onClick={() => setMenuOpen(false)}
        ></div>
      </div>
    </>
  );
}