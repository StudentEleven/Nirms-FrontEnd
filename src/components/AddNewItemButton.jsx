// AddNewItemButton.jsx
import React from "react";

export default function AddNewItemButton({ onClick }) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={onClick}
        className="px-5 py-3 bg-blue-600 text-white rounded-full text-sm shadow-lg hover:bg-blue-500 transition duration-200"
      >
        + Add New Item
      </button>
    </div>
  );
}
