interface Task {
  id: number;
  title: string;
}

interface ICard {
  id: number;
  title: string;
  cards: Task[];
}

export default Task;
