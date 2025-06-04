import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AddNewItemButton from "../components/AddNewItemButton"; // Adjust the path as needed
import Category from "../components/Category"; // Modal component for adding new item
import ViewFas from "../components/ViewFas"; // adjust the path as needed

export default function FAS() {
  const [assets, setAssets] = useState([
    { id: 1, serialNumber: "SN123456", category: "Desktop", remarks: "Turn In" },
    { id: 2, serialNumber: "SN234567", category: "Laptop", remarks: "Operational" },
    { id: 3, serialNumber: "SN345678", category: "Server", remarks: "Operational" },
    { id: 4, serialNumber: "SN456789", category: "Switch", remarks: "Turn In" },
  ]);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
const [selectedAsset, setSelectedAsset] = useState(null);


  // ✅ Function to add new asset to the list
  const handleAddAsset = (newAsset) => {
    setAssets((prevAssets) => [...prevAssets, newAsset]);
  };

  return (
    <>
      <span className="text-3xl font-bold text-gray-800 mb-4 block">
        Found At Station
      </span>

      <div className="w-full bg-white p-6 mt-5 rounded-xl shadow-md">
        <div className="text-center mb-6 text-gray-800">
          <h1 className="text-lg font-semibold uppercase">Monthly COMELEX Report</h1>
          <span className="text-lg font-semibold uppercase">
            {startDate.toLocaleString("default", { month: "long", year: "numeric" })} -{" "}
            {endDate.toLocaleString("default", { month: "long", year: "numeric" })}
          </span>
        </div>

        {/* Month Range Picker */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4 items-center">
          <div className="flex gap-2 items-center">
            <label className="text-sm font-medium text-gray-700">Start Month:</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="MMMM yyyy"
              showMonthYearPicker
              className="px-3 py-2 rounded-md bg-gray-100 text-sm text-gray-800 outline-none"
            />
          </div>
          <div className="flex gap-2 items-center">
            <label className="text-sm font-medium text-gray-700">End Month:</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="MMMM yyyy"
              showMonthYearPicker
              className="px-3 py-2 rounded-md bg-gray-100 text-sm text-gray-800 outline-none"
            />
          </div>
        </div>

        {/* Search and Export */}
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

        {/* Asset Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="py-2 px-4 text-left">Serial Number</th>
                <th className="py-2 px-4 text-left">Category</th>
                <th className="py-2 px-4 text-left">Remarks</th>
                <th className="py-2 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {assets.map((asset, index) => (
                <tr
                  key={asset.id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100`}
                >
                  <td className="py-2 px-4">{asset.serialNumber}</td>
                  <td className="py-2 px-4">{asset.category}</td>
                  <td className="py-2 px-4">{asset.remarks}</td>
                  <td className="py-2 px-4">
<button
  className="text-blue-600 hover:underline mr-2"
  onClick={() => {
    setSelectedAsset(asset);
    setViewModalOpen(true);
  }}
>
  View
</button>


                    <button className="text-red-600 hover:underline">Delete</button>
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

      {/* Add New Item Button */}
      <AddNewItemButton onClick={() => setShowModal(true)} />

      {/* Category Modal */}
      <Category
        show={showModal}
        onClose={() => setShowModal(false)}
        onAdd={handleAddAsset}
          source="FAS"

      />

      <ViewFas
  show={viewModalOpen}
  asset={selectedAsset}
  onClose={() => setViewModalOpen(false)}
/>

    </>
  );
}
