import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

export default function App() {
  const {
    todos,
    setTodoCompeleted,
    addTodo,
    deleteTodo,
    deleteAllCompletedTodos,
  } = useTodos();

  return (
    <main className="h-screen space-y-10 overflow-y-auto py-10">
      <h1 className="text-center text-3xl font-bold">Your Todos</h1>
      <div className="mx-auto max-w-screen-md space-y-6 rounded-md bg-slate-100 p-10">
        <AddTodoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onCompletedChange={setTodoCompeleted}
          onDelete={deleteTodo}
        />
      </div>
      <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompletedTodos} />
    </main>
  );
}
