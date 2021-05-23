import React, { useState } from "react";
import { TasksCollection } from "/imports/api/TaskCollection";

export const TaskForm = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) return;

    TasksCollection.insert({
      text: text.trim(),
      createdAt: new Date(),
    });

    setText("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Добавь задачу"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit" >Добавить задачу</button>
    </form>
  );
};