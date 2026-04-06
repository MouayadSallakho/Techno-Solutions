"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GrLanguage } from "react-icons/gr";
import { HiArrowUpRight } from "react-icons/hi2";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./HeaderSolutions.module.css";

export default function HeaderSolutions() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const pathname = usePathname();
  const { t, language, setLanguage, isArabic } = useLanguage();

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
      { key: "home", label: t.header.links.home, href: "/" },
      { key: "projects", label: t.header.links.projects, href: "/projects" },
      { key: "contact", label: t.header.links.contact, href: "/contact" },
      { key: "about", label: t.header.links.about, href: "/about-us" },
    ],
    [t]
  );

  const isActiveLink = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isSolutionsActive =
    pathname === "/solutions" || pathname.startsWith("/solutions/");

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

  const renderDesktopIndicator = (isActive) => {
    if (isActive) {
      return (
        <span className={styles.activeIcon}>
          <HiArrowUpRight />
        </span>
      );
    }

    return (
      <span className={styles.navIndicator}>
        <span className={styles.navDot}></span>
        <span className={styles.hoverIcon}>
          <HiArrowUpRight />
        </span>
      </span>
    );
  };

  return (
    <header className={styles.siteHeader}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.heroNavWrapper}>
          <div
            className={`d-none d-lg-flex align-items-center justify-content-between ${styles.heroNavDesktop}`}
          >
            <Link href="/" className={styles.brand}>
              <img
                src="/images/MMainLogoSolutions.png"
                alt={t.header.logoAlt}
              />
            </Link>

            <nav
              className={styles.desktopNav}
              aria-label={t.header.navAriaLabel}
            >
              <Link
                href="/"
                className={`${styles.navLink} ${
                  pathname === "/" ? styles.desktopActive : ""
                }`}
              >
                {renderDesktopIndicator(pathname === "/")}
                <span>{t.header.links.home}</span>
              </Link>

              <div className={styles.desktopDropdown}>
                <Link
                  href="/solutions"
                  className={`${styles.navLink} ${
                    isSolutionsActive ? styles.desktopActive : ""
                  }`}
                >
                  {renderDesktopIndicator(isSolutionsActive)}
                  <span>{t.header.links.solutions}</span>
                </Link>

                <div className={styles.desktopDropdownMenu}>
                  {solutionLinks.map((link) => (
                    <Link key={link.key} href={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {navLinks
                .filter((link) => link.key !== "home")
                .map((link) => {
                  const isActive = isActiveLink(link.href);

                  return (
                    <Link
                      key={link.key}
                      href={link.href}
                      className={`${styles.navLink} ${
                        isActive ? styles.desktopActive : ""
                      }`}
                    >
                      {renderDesktopIndicator(isActive)}
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
                <span>{t.common.switchToArabic}</span>
              </button>
            </div>
          </div>

          <div className={`d-lg-none ${styles.mobileNavWrapper}`}>
            <div
              className={`d-flex align-items-center justify-content-between ${styles.heroNavMobile}`}
            >
              <Link href="/" className={`${styles.brand} ${styles.mobileBrand}`}>
                <img
                  src="/images/MMainLogoSolutions.png"
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
                  <Link
                    href="/"
                    className={pathname === "/" ? styles.mobileCurrentPage : ""}
                    onClick={handleCloseMenu}
                  >
                    {t.header.links.home}
                  </Link>

                  <div
                    className={`${styles.mobileSolutionsBlock} ${
                      mobileSolutionsOpen ? styles.mobileSolutionsBlockOpen : ""
                    }`}
                  >
                    <div className={styles.mobileSolutionsTopRow}>
                      <Link
                        href="/solutions"
                        className={isSolutionsActive ? styles.mobileCurrentPage : ""}
                        onClick={handleCloseMenu}
                      >
                        {t.header.links.solutions}
                      </Link>

                      <button
                        type="button"
                        className={styles.mobileSolutionsToggle}
                        onClick={toggleMobileSolutions}
                        aria-expanded={mobileSolutionsOpen}
                      >
                        <span
                          className={`${styles.mobileSolutionsArrow} ${
                            mobileSolutionsOpen
                              ? styles.mobileSolutionsArrowOpen
                              : ""
                          }`}
                        ></span>
                      </button>
                    </div>

                    <div
                      className={`${styles.mobileSolutionsSubmenu} ${
                        mobileSolutionsOpen
                          ? styles.mobileSolutionsSubmenuOpen
                          : ""
                      }`}
                    >
                      {solutionLinks.map((link) => (
                        <Link key={link.key} href={link.href} onClick={handleCloseMenu}>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {navLinks
                    .filter((link) => link.key !== "home")
                    .map((link) => {
                      const isActive = isActiveLink(link.href);

                      return (
                        <Link
                          key={link.key}
                          href={link.href}
                          className={isActive ? styles.mobileCurrentPage : ""}
                          onClick={handleCloseMenu}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}