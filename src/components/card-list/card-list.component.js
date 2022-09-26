import Card from "../card/card.component";

import "./card-list.styles.css";

const CardList = ({ className, monsters }) => {
  return (
    <div className={`card-list ${className}`}>
      {monsters.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

export default CardList;
