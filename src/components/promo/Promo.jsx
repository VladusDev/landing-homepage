import styles from "./Promo.module.css";

import promoImgDesktop from "../../assets/img/image-web-3-desktop.jpg";
import promoImgMobile from "../../assets/img/image-web-3-mobile.jpg";

function Promo() {
  const width = window.innerWidth;

  return (
    <div className="container">
      <section className={styles.promo}>
        <div className={styles.left__block}>
          <div className={styles.l__img}>
            <img
              src={width > 767 ? promoImgDesktop : promoImgMobile}
              alt="promoImg"
            />
          </div>
          <div className={styles.ld__block}>
            <div className={styles.ld__title}>
              The Bright Future of Web 3.0?
            </div>
            <div className={styles.ld__right__subtitle}>
              <div className={styles.ld__subtitle}>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </div>
              <div className={styles.ld__button}>
                <a href="#" className={styles.ld__btn__link}>
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right__block}>
          <div className={styles.r__title}>New</div>
          <div className={styles.r__content}>
            <div className={styles.r__content__title}>
              Hydrogen VS electric Cars
            </div>
            <div className={styles.r__content__subtitle}>
              Will hydrogen-fueled cars ever catch up to EVs?
            </div>
            <div className={styles.hr__line}></div>

            <div className={styles.r__content__title}>
              The Downsides of AI Artistry
            </div>
            <div className={styles.r__content__subtitle}>
              What are the possible adverse effects of on-demand AI image
              generation?
            </div>
            <div className={styles.hr__line}></div>

            <div className={styles.r__content__title}>
              Is VC Funding Drying Up?
            </div>
            <div className={styles.r__content__subtitle}>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </div>

            <div className={styles.r__content__title}>
              Is VC Funding Drying Up?
            </div>
            <div className={styles.r__content__subtitle}>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Promo;
