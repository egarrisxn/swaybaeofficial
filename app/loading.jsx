import React from "react";
export default function Loading() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="px-4 py-12 bg-white">
          <div className="flex gap-10 justify-center">
            <div className="w-8 h-8 bg-indigo-700 rounded-full" />
            <div className="w-8 h-8 bg-indigo-700 rounded-full" />
            <div className="w-8 h-8 bg-indigo-700 rounded-full" />
          </div>
          <div className="flex gap-10 justify-center mt-10">
            <div className="w-8 h-8 bg-indigo-200 rounded-full animate-bounce" />
            <div className="w-8 h-8 bg-indigo-200 rounded-full animate-bounce" />
            <div className="w-8 h-8 bg-indigo-200 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </>
  );
}
