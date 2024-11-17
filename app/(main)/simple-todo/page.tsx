"use client";

import { NextPage } from "next";
import { useSimpleTodoText } from "./customHook";

const SimpleTodo: NextPage = () => {
  const { memo, textAreaRef, handleMemo, completeMemo, deleteMemo } = useSimpleTodoText();

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <div className="flex justify-center">
        <div className="flex flex-col items-center p-8 bg-slate-500 shadow-2xl rounded-xl">
          <h1 className="text-4xl font-mono text-slate-100 mb-4">Simple Todo</h1>
          <textarea
            ref={textAreaRef}
            className="resize-none w-80 h-24 border-2 border-blue-400 rounded-lg text-center p-5 focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-inner transition-all duration-300"
            placeholder="useRefを使用したTodoアプリ"
          />
          <div className="mt-6">
            <button
              type="button"
              onClick={handleMemo}
              className="border border-green-500 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              送信
            </button>
          </div>
          <div className="w-full max-w-md mt-8">
            <ul className="space-y-4">
              {memo.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center bg-gradient-to-r from-orange-200 to-orange-300 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <span className={`flex-1 text-gray-800 ${item.isComplete ? "line-through" : ""}`}>
                    {item.isComplete ? "✔️ " : ""}
                    {item.text}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      onClick={() => completeMemo(item.id)}
                      className="border border-blue-500 bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md transform hover:scale-110"
                    >
                      完了
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteMemo(item.id)}
                      className="border border-red-500 bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-md transform hover:scale-110"
                    >
                      削除
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleTodo;
