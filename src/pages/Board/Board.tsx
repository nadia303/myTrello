import React from 'react';
import './board.scss';
import List from './components/List/List';
import ICard from '../../common/interfaces/ICard';

// eslint-disable-next-line
interface MyProps {}

interface MyLists {
  id: number;
  title: string;
  cards: ICard[];
}

interface MyState {
  title: string;
  lists: MyLists[];
}

export default class Board extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: 'Моя тестовая доска',
      lists: [
        {
          id: 1,
          title: 'Планы',
          cards: [
            { id: 1, title: 'помыть кота' },
            { id: 2, title: 'приготовить суп' },
            { id: 3, title: 'сходить в магазин' },
          ],
        },
        {
          id: 2,
          title: 'В процессе',
          cards: [{ id: 4, title: 'посмотреть сериал' }],
        },
        {
          id: 3,
          title: 'Сделано',
          cards: [
            { id: 5, title: 'сделать домашку' },
            { id: 6, title: 'погулять с собакой' },
          ],
        },
      ],
    };
  }

  render(): JSX.Element {
    const { lists } = this.state;
    const { title } = this.state;
    // const {board_id} = this.props.match.params;
    const allLists = lists.map((oneObj) => <List id={oneObj.id} title={oneObj.title} cards={oneObj.cards} />);
    return (
      <div className="mainBoard">
        <h1 className="boardTitle">{title}</h1>
        <button className="boardsButton">Add a new card</button>
        <div className="allLists">{allLists}</div>
      </div>
    );
  }
}
