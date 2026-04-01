"use client";

import { useMemo, useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, language, setLanguage, isArabic } = useLanguage();

  const navLinks = useMemo(
    () => [
      { key: "home", label: t.header.links.home, href: "/" },
      { key: "solutions", label: t.header.links.solutions, href: "/solutions" },
      { key: "projects", label: t.header.links.projects, href: "#" },
      { key: "contact", label: t.header.links.contact, href: "#" },
      { key: "about", label: t.header.links.about, href: "#" },
    ],
    [t]
  );

  const handleChangeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <>
      <header data-aos="fade-down" className={styles.siteHeader}>
        <div className={`container ${styles.headerContainer}`}>
          <div className={styles.heroNavWrapper}>
            <div
              className={`d-none d-lg-flex align-items-center justify-content-between ${styles.heroNavDesktop}`}
            >
              <a href="/" className={styles.brand}>
                <img src="/images/MMAinLogo.png" alt={t.header.logoAlt} />
              </a>

              <nav
                className={styles.desktopNav}
                aria-label={t.header.navAriaLabel}
              >
                {navLinks.map((link, index) => (
                  <a
                    key={link.key}
                    href={link.href}
                    className={index === 0 ? styles.desktopActive : ""}
                  >
                    <span>{link.label}</span>
                  </a>
                ))}
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
                >
                  <span>{t.common.switchToArabic}</span>
                </button>
              </div>
            </div>

            <div
              className={`d-flex d-lg-none align-items-center justify-content-between ${styles.heroNavMobile}`}
            >
              <a href="/" className={`${styles.brand} ${styles.mobileBrand}`}>
                <img src="/images/Logo-Techno.png" alt={t.header.logoAlt} />
              </a>

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
                  >
                    {t.common.switchToEnglish}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleChangeLanguage("ar")}
                    className={`${styles.mobileLangBtn} ${
                      language === "ar" ? styles.mobileTopLangActive : ""
                    }`}
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
            <a href="/" className={`${styles.brand} ${styles.mobileMenuBrand}`}>
              <img src="/images/Logo-Techno.png" alt={t.header.logoAlt} />
            </a>

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
              {navLinks.map((link, index) => (
                <a
                  key={link.key}
                  href={link.href}
                  className={index === 0 ? styles.mobileMenuActive : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
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
                >
                  {t.header.languages.english}
                </button>

                <button
                  type="button"
                  onClick={() => handleChangeLanguage("ar")}
                  className={`${styles.mobileMenuLangBtn} ${
                    language === "ar" ? styles.mobileMenuLangActive : ""
                  }`}
                >
                  {t.header.languages.arabic}
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