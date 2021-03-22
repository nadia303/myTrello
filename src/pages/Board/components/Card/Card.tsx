import React from 'react';
import './card.scss';

interface MyProps {
  id: number;
  title: string;
}

class Card extends React.Component<MyProps> {
  constructor(props: MyProps) {
    super(props);
    this.state = {};
  }

  render(): JSX.Element {
    const { title } = this.props;
    return <p className="cardsTitle">{title}</p>;
  }
}

export default Card;
