import React, { useState } from "react";

interface AddTodoFormProps {
  onSubmit: (title: string) => void;
}

export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSubmit(input);
    setInput("");
  };

  return (
    <form className="mx-auto flex max-w-lg" onSubmit={handleSubmit}>
      <input
        className="grow rounded-s-md border-b border-l border-t border-gray-400 p-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="What needs to be done?"
      />
      <button
        className="w-16 rounded-e-md bg-slate-900 text-white transition-colors hover:bg-slate-800"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}
