import HeaderSolutions from "@/components/layout/HeaderSolutions";
import SolutionsList from "@/components/solutionsCom/SolutionsList";
import styles from "./page.module.css";
import Footer from "@/components/footer/Footer";
import ContactSection from "@/components/contactSection/ContactSection";

export default function SolutionsPage() {
  return (
    <main>
      <HeaderSolutions />

      <section className={styles.solutionsHero}>
        <div className={styles.bgGlowOne}></div>
        <div className={styles.bgGlowTwo}></div>
        <div className={styles.bgGlowThree}></div>
        <div className={styles.bgGlowFour}></div>

        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.topTag}>
              <span></span>
              <p>SOLUTIONS</p>
            </div>

            <h1 className={styles.heroTitle}>
              <span>Design That</span>
              <span>Delivers Meaning.</span>
            </h1>
          </div>
        </div>
      </section>

      <SolutionsList />

      <ContactSection/>

      <Footer/>
    </main>
  );
}