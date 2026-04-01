"use client";

import Styles from "./Footer.module.css";
import { FaArrowRight, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, isArabic } = useLanguage();

  return (
    <footer className={Styles.footer}>
      <div className="container">
        <div className={Styles.topTag}>
          <span className={Styles.dot}></span>
          <p>{t.footer.tag}</p>
        </div>

        <div className={`row g-5 ${Styles.myRow}`}z>
          <div className="col-lg-5">
            <div className={Styles.left}>
              <h3 className={Styles.newsTitle}>{t.footer.newsletterTitle}</h3>

              <form className={Styles.subscribeForm}>
                <input
                  type="email"
                  placeholder={t.footer.emailPlaceholder}
                  className={Styles.input}
                />
                <button type="submit" className={Styles.submitBtn}>
                  <FaArrowRight />
                </button>
              </form>

              <div className={Styles.mapWrapper}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39329.60889758414!2d5.7063137939108!3d51.96859154248507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7ab5ede805457%3A0x5a05400d519f4782!2z2YHYp9iu2YrZhtmK2YbYrNmG!5e0!3m2!1sar!2snl!4v1773664864406!5m2!1sar!2snl"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t.footer.mapTitle}
                ></iframe>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className={Styles.right}>
              <div className="row g-5">
                <div className="col-6 col-md-4 col-lg-4">
                  <div className={Styles.linkGroup}>
                    <h4>{t.footer.groups.quickLinks}</h4>
                    <ul>
                      <li>
                        <a href="#">{t.footer.links.home}</a>
                      </li>
                      <li>
                        <a href="#">{t.footer.links.about}</a>
                      </li>
                      <li>
                        <a href="#">{t.footer.links.solutions}</a>
                      </li>
                      <li>
                        <a href="#">{t.footer.links.contact}</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-4">
                  <div className={Styles.linkGroup}>
                    <h4>{t.footer.groups.followUs}</h4>
                    <ul>
                      <li>
                        <a href="#">
                          <FaInstagram /> {t.footer.social.instagram}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FiDribbble /> {t.footer.social.dribbble}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaLinkedinIn /> {t.footer.social.linkedin}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-4">
                  <div className={Styles.linkGroup}>
                    <h4>{t.footer.groups.contactUs}</h4>
                    <ul>
                      <li>
                        <a href="#">{t.footer.contact.address}</a>
                      </li>
                      <li>
                        <a href="tel:+12345678910">{t.footer.contact.phone}</a>
                      </li>
                      <li>
                        <a href="mailto:hello@opalhaus.com">
                          {t.footer.contact.email}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={Styles.bottom}>
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}