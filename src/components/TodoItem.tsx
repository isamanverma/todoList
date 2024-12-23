import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({
  todo,
  onCompletedChange,
  onDelete,
}: TodoItemProps) {
  return (
    <div className="mx-auto flex max-w-lg items-center gap-5">
      <label className="flex grow cursor-pointer items-center gap-5 rounded-md border border-gray-400 bg-white p-4 hover:bg-gray-50">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
          className="scale-150"
        />

        <span className={todo.completed ? "text-gray-400 line-through" : ""}>
          {todo.title}
        </span>
      </label>
      <button className="p-2" onClick={() => onDelete(todo.id)}>
        <Trash2 size={20} className="text-gray-500" />
      </button>
    </div>
  );
}
