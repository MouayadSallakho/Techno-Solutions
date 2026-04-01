"use client";

import Styles from "./OurPartners.module.css";
import { useLanguage } from "@/context/LanguageContext";

const partnerRows = [
  [
    "/images/partner1.png",
    "/images/partner2.png",
    "/images/partner3.png",
    "/images/partner4.png",
    "/images/partner5.png",
    "/images/partner6.png",
  ],
  [
    "/images/partner7.png",
    "/images/partner8.png",
    "/images/partner9.png",
    "/images/partner10.png",
    "/images/partner11.png",
    "/images/partner12.png",
  ],
  [
    "/images/partner13.png",
    "/images/partner14.png",
    "/images/partner15.png",
    "/images/partner16.png",
    "/images/partner17.png",
    "/images/partner18.png",
  ],
  [
    "/images/partner19.png",
    "/images/partner20.png",
    "/images/partner21.png",
    "/images/partner22.png",
    "/images/partner23.png",
    "/images/partner24.png",
  ],
];

function PartnerRow({
  images,
  direction = "left",
  duration = "28s",
  altPrefix,
}) {
  const loopImages = [...images, ...images];

  return (
    <div className={Styles.rowWrapper} dir="ltr">
      <div
        className={`${Styles.rowTrack} ${
          direction === "right" ? Styles.moveRight : Styles.moveLeft
        }`}
        style={{ "--duration": duration }}
      >
        {loopImages.map((image, index) => (
          <div className={Styles.logoCard} key={index}>
            <img
              src={image}
              alt={`${altPrefix} ${index + 1}`}
              className={Styles.logoImage}
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function OurPartners() {
  const { t, isArabic } = useLanguage();

  return (
    <section
      className={Styles.ourPartners}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="container">
        <div className={Styles.top}>
          <div className={Styles.heading}>
            <span className={Styles.dot}></span>
            <p>{t.partners.label}</p>
          </div>

          <h2 className={Styles.title}>{t.partners.title}</h2>
        </div>

        <div className={Styles.marqueeArea} dir="ltr">
          <PartnerRow
            images={partnerRows[0]}
            direction="right"
            duration="26s"
            altPrefix={t.partners.logosAltPrefix}
          />
          <PartnerRow
            images={partnerRows[1]}
            direction="left"
            duration="30s"
            altPrefix={t.partners.logosAltPrefix}
          />
          <PartnerRow
            images={partnerRows[2]}
            direction="right"
            duration="24s"
            altPrefix={t.partners.logosAltPrefix}
          />
          <PartnerRow
            images={partnerRows[3]}
            direction="left"
            duration="28s"
            altPrefix={t.partners.logosAltPrefix}
          />
        </div>
      </div>
    </section>
  );
}