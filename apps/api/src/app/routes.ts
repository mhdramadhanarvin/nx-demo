import { FastifyPluginAsync } from 'fastify';
import { Todo } from '@nx-demo2/data';

const todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

export const appRoutes: FastifyPluginAsync = async (app) => {
  app.get('/api/todos', () => {
    return todos;
  })

  app.post('/api/todos', () => {
    const newTodo = {
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    };
    todos.push(newTodo);
    return newTodo;
  })

};
