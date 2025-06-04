import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Pencil, X } from "lucide-react";

function Readiness() {
  const [tableData, setTableData] = useState([
    { id: "01", desc: "Camera, DLSR", required: 1 },
    { id: "02", desc: "Camera, Document", required: 1 },
    { id: "03", desc: "Camera, HD Video Recorder", required: 1 },
    { id: "04", desc: "CCTV Set", required: 2 },
    { id: "05", desc: "Computer Desktop", required: 12 },
    { id: "06", desc: "Computer Laptop", required: 2 },
    { id: "07", desc: "Digital Voice Recorder", required: 1 },
    { id: "08", desc: "Facsimile Machine", required: 1 },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleSave = () => {
    // Save logic can be implemented here
    closeModal();
  };

  return (
    <>
      <span className="text-3xl font-bold text-gray-800">Readiness</span>
      <div className="w-full bg-white p-6 mt-5 rounded-xl shadow-md">
        {/* Header */}
        <div className="text-center mb-6 text-gray-800">
          <h1 className="text-lg font-semibold uppercase">Volume I</h1>
          <p className="text-sm">Section III. Equipment Allowances</p>
          <p className="text-sm">A. Major Commodity Managership Allowances</p>
          <p className="text-sm font-medium">Military Intelligence Group 27</p>
        </div>

        {/* Search + Export */}
        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <input
            type="text"
            placeholder="Search here..."
            className="px-3 py-2 rounded-md bg-gray-100 text-sm text-gray-800 outline-none placeholder-gray-500"
          />
          <button className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-700">
            Export
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100 text-gray-700 text-sm">
              <tr>
                <th className="px-4 py-3 text-left">Serial Number</th>
                <th className="px-4 py-3 text-left">Description</th>
                <th className="px-4 py-3 text-left">Quantity</th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {tableData.map((row, index) => (
                <tr
                  key={row.id}
                  className={`text-sm ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="px-4 py-2">{row.id}</td>
                  <td className="px-4 py-2">{row.desc}</td>
                  <td className="px-4 py-2">{row.required}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => openModal(row)}
                      className="text-blue-600 hover:underline flex items-center gap-1"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
          <button className="flex items-center gap-1 hover:text-black">
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>
          <button className="bg-gray-800 text-white px-3 py-1 rounded">1</button>
          <button className="hover:text-black">2</button>
          <button className="hover:text-black">3</button>
          <span>...</span>
          <button className="hover:text-black">67</button>
          <button className="hover:text-black">68</button>
          <button className="flex items-center gap-1 hover:text-black">
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 d bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Edit Item</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <input
                type="text"
                value={selectedItem.desc}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantity
              </label>
              <input
                type="number"
                value={selectedItem.required}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-sm text-gray-700 hover:text-black"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Readiness;
