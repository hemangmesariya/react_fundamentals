"use client";

import React, { useState } from "react";
const page = () => {
  const [counter, setcounter] = useState(0);
  const [todo, settodo] = useState([]);

  let key_val = 1;
  const increment = () => {
    setcounter(counter + 1);
  };
  const decrement = () => {
    setcounter(counter - 1);
  };

  function addTodo() {
    let newArray = [];
    for (let i = 0; i < todo.length; i++) {
      newArray.push(todo[i]);
    }

    newArray.push({
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
    });
    settodo(newArray);
  }

  return (
    <>
      <div className="bg-blue-500 text-center p-2 text-white font-bold">
        React Fundamentals
      </div>
      <div className="mx-10 py-5">
        <div className="bg-blue-50 p-3 rounded-md shadow-blue-900">
          <h2 className="text-center text-blue-950 mb-2">Counter App</h2>
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={increment}
              className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-black"
            >
              +
            </button>
            <div className="p-2 bg-gray-200 text-black px-4 py-2 rounded-md">
              {counter}
            </div>
            <button
              onClick={decrement}
              className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-black"
            >
              -
            </button>
          </div>
        </div>
      </div>
      <div className="mx-10 py-5">
        <div className="bg-blue-50 p-3 rounded-md shadow-blue-900">
          <h2 className="text-center text-blue-950 mb-2">Todo App</h2>
          <div className="flex items-center justify-center gap-2">
            <input
              className="bg-white p-2 text-black rounded-md"
              type="text"
              id="title"
              name="task"
              placeholder="Enter Task..."
            />
            <input
              className="bg-white p-2 text-black rounded-md"
              type="text"
              name="description"
              placeholder="Enter Description..."
              id="description"
            />
            <button
              onClick={addTodo}
              className="px-4  py-1.5 bg-green-500 rounded-md hover:bg-green-600"
            >
              Add Task
            </button>
          </div>
          <div className="todo-list w-[50%] mx-auto bg-white border-blue-600 text-black p-3 mt-3 rounded-md shadow-sm shadow-gray-200">
            {todo.length === 0 ? (
              <p className="text-center text-gray-500">No Task Added Yet...</p>
            ) : (
              todo.map((item) => {
                return (
                  <>
                    <div className="task-item mb-1 bg-gray-100 p-2 rounded-md">
                      <div className="">Task : {item.title}</div>
                      <div>Descritpion : {item.description}</div>
                    </div>
                  </>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
