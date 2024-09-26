import styles from "./CardItem.module.css";

function CardItem({ img, id, title, subtitle }) {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={img} alt="Retro Pc" />
      </div>

      <div className={styles.card__content}>
        <div className={styles.card__number}>{id}</div>
        <div className={styles.card__title}>{title}</div>
        <div className={styles.card__subtitle}>{subtitle}</div>
      </div>
    </div>
  );
}

export default CardItem;
