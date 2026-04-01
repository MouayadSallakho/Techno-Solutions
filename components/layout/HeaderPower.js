"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GrLanguage } from "react-icons/gr";
import { HiArrowUpRight } from "react-icons/hi2";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./HeaderPower.module.css";

export default function HeaderPower() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, language, setLanguage, isArabic } = useLanguage();

  const navLinks = useMemo(
    () => [
      { key: "home", label: t.header.links.home, href: "/" },
      { key: "solutions", label: t.header.links.solutions, href: "/solutions" },
      { key: "projects", label: t.header.links.projects, href: "/projects" },
      { key: "contact", label: t.header.links.contact, href: "/contact" },
      { key: "about", label: t.header.links.about, href: "/about-us" },
    ],
    [t]
  );

  const isLinkActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const handleChangeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

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
                  src="/images/MMainLogoPower.png"
                  alt={t.header.logoAlt}
                />
              </Link>

              <nav
                className={styles.desktopNav}
                aria-label={t.header.navAriaLabel}
              >
                {navLinks.map((link) => {
                  const isActive = isLinkActive(link.href);

                  return (
                    <Link
                      key={link.key}
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
                aria-label={t.header.languageSwitcherAriaLabel}
              >
                <button
                  type="button"
                  onClick={() => handleChangeLanguage("en")}
                  className={`${styles.langBtn} ${
                    language === "en" ? styles.desktopLangActive : ""
                  }`}
                  aria-pressed={language === "en"}
                >
                  <span className={styles.langIcon}>
                    <GrLanguage />
                  </span>
                  <span>{t.header.languages.english}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleChangeLanguage("ar")}
                  className={`${styles.langBtn} ${
                    language === "ar" ? styles.desktopLangActive : ""
                  }`}
                  aria-pressed={language === "ar"}
                >
                  <span>{t.header.languages.arabic}</span>
                </button>
              </div>
            </div>

            <div
              className={`d-flex d-lg-none align-items-center justify-content-between ${styles.heroNavMobile}`}
            >
              <Link href="/" className={`${styles.brand} ${styles.mobileBrand}`}>
                <img
                  src="/images/Logo-Power.png"
                  alt={t.header.logoAlt}
                />
              </Link>

              <div
                className={`d-flex align-items-center ${styles.mobileHeaderActions}`}
              >
                <div
                  className={styles.mobileLangSwitch}
                  aria-label={t.header.mobileLanguageSwitcherAriaLabel}
                >
                  <button
                    type="button"
                    onClick={() => handleChangeLanguage("en")}
                    className={`${styles.mobileLangBtn} ${
                      language === "en" ? styles.mobileTopLangActive : ""
                    }`}
                    aria-pressed={language === "en"}
                  >
                    {t.common.switchToEnglish}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleChangeLanguage("ar")}
                    className={`${styles.mobileLangBtn} ${
                      language === "ar" ? styles.mobileTopLangActive : ""
                    }`}
                    aria-pressed={language === "ar"}
                  >
                    {t.common.switchToArabic}
                  </button>
                </div>

                <button
                  className={styles.menuToggleBtn}
                  type="button"
                  aria-label={t.header.openMenu}
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
          dir={isArabic ? "rtl" : "ltr"}
        >
          <div className={styles.mobileMenuHeader}>
            <Link href="/" className={`${styles.brand} ${styles.mobileMenuBrand}`}>
              <img
                src="/images/Logo-Power.png"
                alt={t.header.logoAlt}
              />
            </Link>

            <button
              type="button"
              className={styles.mobileMenuClose}
              aria-label={t.header.closeMenu}
              onClick={() => setMenuOpen(false)}
            >
              <span></span>
              <span></span>
            </button>
          </div>

          <div className={styles.mobileMenuBody}>
            <nav
              className={styles.mobileMenuLinks}
              aria-label={t.header.mobileNavAriaLabel}
            >
              {navLinks.map((link) => {
                const isActive = isLinkActive(link.href);

                return (
                  <Link
                    key={link.key}
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
              <span className={styles.mobileMenuLabel}>
                {t.common.language}
              </span>

              <div className={styles.mobileMenuLangLinks}>
                <button
                  type="button"
                  onClick={() => handleChangeLanguage("en")}
                  className={`${styles.mobileMenuLangBtn} ${
                    language === "en" ? styles.mobileMenuLangActive : ""
                  }`}
                  aria-pressed={language === "en"}
                >
                  <GrLanguage />
                  <span>{t.header.languages.english}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleChangeLanguage("ar")}
                  className={`${styles.mobileMenuLangBtn} ${
                    language === "ar" ? styles.mobileMenuLangActive : ""
                  }`}
                  aria-pressed={language === "ar"}
                >
                  <span>{t.header.languages.arabic}</span>
                </button>
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