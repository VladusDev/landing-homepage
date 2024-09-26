import styles from "./Header.module.css";

import burgerOpen from "../../assets/img/icon-menu.svg";
import burgerClosed from "../../assets/img/icon-menu-close.svg";
import logoImg from "../../assets/img/logo.svg";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState();

  return (
    <>
      <div
        className={
          isOpen ? styles.blur + ` ` + styles.active__blur : styles.blur
        }
      ></div>
      <div className="container">
        <header className={styles.header}>
          <div className={styles.logo}>
            <a href="/">
              <img src={logoImg} alt="Logo" />
            </a>
          </div>
          <nav
            className={
              isOpen
                ? styles.header__nav + ` ` + styles.active
                : styles.header__nav
            }
          >
            <ul className={styles.header__nav__list}>
              <li className={styles.header__nav__item}>
                <a href="#">Home</a>
              </li>
              <li className={styles.header__nav__item}>
                <a href="#">New</a>
              </li>
              <li className={styles.header__nav__item}>
                <a href="#">Popular</a>
              </li>
              <li className={styles.header__nav__item}>
                <a href="#">Trending</a>
              </li>
              <li className={styles.header__nav__item}>
                <a href="#">Categories</a>
              </li>
            </ul>
          </nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles.header__burger}
          >
            <img src={isOpen ? burgerClosed : burgerOpen} alt="Menu" />
          </button>
        </header>
      </div>
    </>
  );
}

export default Header;
