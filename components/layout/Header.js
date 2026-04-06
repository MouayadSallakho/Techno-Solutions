"use client";

import { useMemo, useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { useLanguage } from "@/context/LanguageContext";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const { t, language, setLanguage, isArabic } = useLanguage();
  const pathname = usePathname();

  const solutionLinks = useMemo(
    () => [
      {
        key: "strato",
        label: t.header.solutionItems.strato,
        href: "/solutions/strato-solutions",
      },
      {
        key: "power",
        label: t.header.solutionItems.power,
        href: "/solutions/power-solutions",
      },
      {
        key: "cyber",
        label: t.header.solutionItems.cyber,
        href: "/solutions/cyber-solutions",
      },
      {
        key: "smart",
        label: t.header.solutionItems.smart,
        href: "/solutions/smart-solutions",
      },
      {
        key: "graphic",
        label: t.header.solutionItems.graphic,
        href: "/solutions/graphic-solutions",
      },
    ],
    [t]
  );

  const navLinks = useMemo(
    () => [
      // { key: "home", label: t.header.links.home, href: "/" },
      { key: "projects", label: t.header.links.projects, href: "/projects" },
      { key: "contact", label: t.header.links.contact, href: "/contact" },
      { key: "about", label: t.header.links.about, href: "/about-us" },
    ],
    [t]
  );

  const handleChangeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
    setMobileSolutionsOpen(false);
  };

  const toggleMobileSolutions = () => {
    setMobileSolutionsOpen((prev) => !prev);
  };

  const isSolutionsActive =
    pathname === "/solutions" || pathname.startsWith("/solutions/");

  return (
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
              <a
                href="/"
                className={pathname === "/" ? styles.desktopActive : ""}
              >
                <span>{t.header.links.home}</span>
              </a>

              <div className={styles.desktopDropdown}>
                <a
                  href="/solutions"
                  className={isSolutionsActive ? styles.desktopActive : ""}
                >
                  <span>{t.header.links.solutions}</span>
                </a>

                <div className={styles.desktopDropdownMenu}>
                  {solutionLinks.map((link) => (
                    <a key={link.key} href={link.href}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className={pathname === link.href ? styles.desktopActive : ""}
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

          <div className={`d-lg-none ${styles.mobileNavWrapper}`}>
            <div
              className={`d-flex align-items-center justify-content-between ${styles.heroNavMobile}`}
            >
              <a href="/" className={`${styles.brand} ${styles.mobileBrand}`}>
                <img src="/images/MMainLogoSolutions.png" alt={t.header.logoAlt} />
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
                  className={`${styles.menuToggleBtn} ${
                    menuOpen ? styles.menuToggleBtnActive : ""
                  }`}
                  type="button"
                  aria-label={menuOpen ? t.header.closeMenu : t.header.openMenu}
                  aria-expanded={menuOpen}
                  aria-controls="mobile-menu"
                  onClick={handleToggleMenu}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>

            <div
              id="mobile-menu"
              className={`${styles.mobileDropdownMenu} ${
                menuOpen ? styles.mobileDropdownMenuShow : ""
              }`}
              dir={isArabic ? "rtl" : "ltr"}
            >
              <div className={styles.mobileMenuBody}>
                <nav
                  className={styles.mobileMenuLinks}
                  aria-label={t.header.mobileNavAriaLabel}
                >
                  <a
                    href="/"
                    className={pathname === "/" ? styles.mobileCurrentPage : ""}
                    onClick={handleCloseMenu}
                  >
                    {t.header.links.home}
                  </a>

                 <div
  className={`${styles.mobileSolutionsBlock} ${
    mobileSolutionsOpen ? styles.mobileSolutionsBlockOpen : ""
  }`}
>
                    <div className={styles.mobileSolutionsTopRow}>
                      <a
                        href="/solutions"
                        className={isSolutionsActive ? styles.mobileCurrentPage : ""}
                        onClick={handleCloseMenu}
                      >
                        {t.header.links.solutions}
                      </a>

                      <button
                        type="button"
                        className={styles.mobileSolutionsToggle}
                        onClick={toggleMobileSolutions}
                        aria-expanded={mobileSolutionsOpen}
                      >
                        <span
                          className={`${styles.mobileSolutionsArrow} ${
                            mobileSolutionsOpen ? styles.mobileSolutionsArrowOpen : ""
                          }`}
                        ></span>
                      </button>
                    </div>

                    <div
                      className={`${styles.mobileSolutionsSubmenu} ${
                        mobileSolutionsOpen ? styles.mobileSolutionsSubmenuOpen : ""
                      }`}
                    >
                      {solutionLinks.map((link) => (
                        <a key={link.key} href={link.href} onClick={handleCloseMenu}>
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  {navLinks.map((link) => (
                    <a
                      key={link.key}
                      href={link.href}
                      className={pathname === link.href ? styles.mobileCurrentPage : ""}
                      onClick={handleCloseMenu}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}