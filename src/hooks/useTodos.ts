import { useEffect, useState } from "react";
import { Todo } from "../types/todo";

export default function useTodos() {
  const [todos, setTodos] = useState(() => {
    const savedTodos: Todo[] = JSON.parse(
      localStorage.getItem("todos") || "[]",
    );
    return savedTodos;
  });

  // use effect hook
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const setTodoCompeleted = (id: number, completed: boolean) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => (todo.id === id ? { ...todo, completed } : todo)),
    );
  };

  const addTodo = (title: string) => {
    setTodos((prevTodo) => [
      {
        id: Date.now(),
        title,
        completed: false,
      },
      ...prevTodo,
    ]);
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  const deleteAllCompletedTodos = () => {
    setTodos((prevTodo) => prevTodo.filter((todo) => !todo.completed));
  };

  return {
    todos,
    setTodoCompeleted,
    addTodo,
    deleteTodo,
    deleteAllCompletedTodos,
  };
}
