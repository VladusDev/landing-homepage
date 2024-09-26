import CardItem from "../carditem/CardItem";
import styles from "./CardsList.module.css";

import retro from "../../assets/img/image-retro-pcs.jpg";
import laptops from "../../assets/img/image-top-laptops.jpg";
import growth from "../../assets/img/image-gaming-growth.jpg";

function CardsList() {
  return (
    <div className="container">
      <section className={styles.cards}>
        <CardItem
          img={retro}
          id="01"
          title="Reviving Retro PCs"
          subtitle="What happens when old PCs are given upgrades?"
        />
        <CardItem
          img={laptops}
          id="02"
          title="Top 10 Laptops of 2022"
          subtitle="Our best picks for various needs and budgets."
        />
        <CardItem
          img={growth}
          id="03"
          title="The Growth of Gaming"
          subtitle="How the pandemic has sparked fresh opportunities."
        />
      </section>
    </div>
  );
}

export default CardsList;
