import { render } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Board from '../../../Board/Board';
import Card from '../../../../common/interfaces/Card';

function HomeBoard(props: Card): JSX.Element {
  const { title } = props;
  const { id } = props;
  return (
    <div>
      <h3 key={id}>
        <Link to={`/board/${id}`}>{title}</Link>
      </h3>
    </div>
  );
}

export default HomeBoard;
