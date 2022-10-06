import { useEffect, useState } from 'react';
import { Todo } from '@nx-demo2/data';
import { Todos } from '@nx-demo2/ui';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todos')
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  function addTodo() {
    fetch('/api/todos', {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  }

  return (
    <>
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
      <h1>Todos</h1>
      <Todos todos={todos} />
    </>
  );
};

export default App;
