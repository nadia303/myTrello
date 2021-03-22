import React from 'react';
import './list.scss';
import ICard from '../../../../common/interfaces/ICard';
import Card from '../Card/Card';

interface MyProps {
  id: number;
  title: string;
  cards: ICard[];
}

export default function List(props: MyProps): JSX.Element {
  const { cards } = props;
  const { title } = props;
  const allCards = cards.map((card) => <Card id={card.id} title={card.title} />);
  return (
    <div className="list">
      <p className="listTitle">{title}</p>
      <div className="allTasks">{allCards}</div>
      <button className="listButton">Add a new task</button>
    </div>
  );
}
