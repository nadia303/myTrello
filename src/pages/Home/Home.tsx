import React from 'react';
import { Link } from 'react-router-dom';
import HomeBoard from './components/Board/HomeBoard';
import Card from '../../common/interfaces/Card';
// eslint-disable-next-line
interface MyProps {}

interface MyState {
  boards: Card[];
}

class Home extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      boards: [
        { id: 1, title: 'покупки' },
        { id: 2, title: 'подготовка к свадьбе' },
        { id: 3, title: 'разработка интернет-магазина' },
        { id: 4, title: 'курс по продвижению в соцсетях' },
      ],
    };
  }

  render(): JSX.Element {
    const { boards } = this.state;
    const homeBoards = boards.map((board) => <HomeBoard id={board.id} title={board.title} />);
    return (
      <div>
        <h3>Мои доски</h3>
        <div>{homeBoards}</div>
      </div>
    );
  }
}

export default Home;
