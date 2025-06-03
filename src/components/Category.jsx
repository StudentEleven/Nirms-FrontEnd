import React, { useState } from "react";
import { X } from "lucide-react";

const categories = ["Desktop", "Laptop", "Server", "Switch", "Camera", "UPS", "Printer"];

export default function Category({ show, onClose, onAdd, source }) {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState("");

  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [dateIssued, setDateIssued] = useState("");
  const [msOfficeVersion, setMsOfficeVersion] = useState("");
  const [msOfficeStatus, setMsOfficeStatus] = useState("");
  const [osVersion, setOsVersion] = useState("");
  const [osStatus, setOsStatus] = useState("");
  const [disposition, setDisposition] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);

    // Reset fields conditionally excluded by category
    if (["Server", "Switch", "UPS", "Printer", "Camera"].includes(value)) {
      setMsOfficeVersion("");
      setMsOfficeStatus("");
    }
    if (["Switch", "UPS", "Printer", "Camera"].includes(value)) {
      setOsVersion("");
      setOsStatus("");
    }
    if (value === "UPS") {
      setSerialNumber("");
    }
  };

  const handleCategoryNext = () => {
    if (category) setStep(2);
  };

  const handleCancel = () => {
    // Reset everything
    setStep(1);
    setCategory("");
    setType("");
    setQuantity("");
    setSerialNumber("");
    setDateIssued("");
    setMsOfficeVersion("");
    setMsOfficeStatus("");
    setOsVersion("");
    setOsStatus("");
    setDisposition("");
    setRemarks("");
    onClose();
  };

  const handleSave = () => {
    onAdd({
      id: Date.now(),
      category,
      type,
      quantity,
      serialNumber,
      dateIssued,
      msOffice: { version: msOfficeVersion, status: msOfficeStatus },
      operatingSystem: { version: osVersion, status: osStatus },
      disposition,
      remarks,
    });

    // Reset all fields
    handleCancel();
  };

  if (!show) return null;

  console.log("Category opened from:", source);


  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6 relative">
        {/* Removed top-right close button */}

        {step === 1 && (
          <>
            <h2 className="text-lg font-semibold mb-4">Select Category {source}</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  value={category}
                  onChange={handleCategoryChange}
                  className="w-full px-3 py-2 border rounded-md text-sm text-gray-800"
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end space-x-2 mt-4">
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 rounded bg-gray-300 text-sm hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCategoryNext}
                  disabled={!category}
                  className="px-4 py-2 rounded bg-blue-600 text-white text-sm hover:bg-blue-700 disabled:bg-gray-400"
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-lg font-semibold mb-4">Asset Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Type of Equipment</label>
                <input
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md text-sm"
                  required
                />
              </div>

          

              {/* Serial Number (excluded for UPS) */}
              {category !== "UPS" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Serial Number</label>
                  <input
                    value={serialNumber}
                    onChange={(e) => setSerialNumber(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md text-sm"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700">Date Issued</label>
                <input
                  type="date"
                  value={dateIssued}
                  onChange={(e) => setDateIssued(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md text-sm"
                />
              </div>

             {/* MS Office (excluded for Server, Switch, UPS, Printer, Camera) */}
{!["Server", "Switch", "UPS", "Printer", "Camera"].includes(category) && (
  <>
    <div>
      <label className="block text-sm font-medium text-gray-700">MS Office Version</label>
      <select
        value={msOfficeVersion}
        onChange={(e) => setMsOfficeVersion(e.target.value)}
        className="w-full px-3 py-2 border rounded-md text-sm"
      >
        <option value="" disabled>Select version</option>
        <option value="Office 2016">Office 2016</option>
        <option value="Office 2019">Office 2019</option>
        <option value="Office 2021">Office 2021</option>
        <option value="Office 365">Office 365</option>
        <option value="Office 365">None</option>
      </select>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700">MS Office Status</label>
      <select
        value={msOfficeStatus}
        onChange={(e) => setMsOfficeStatus(e.target.value)}
        className="w-full px-3 py-2 border rounded-md text-sm"
      >
        <option value="" disabled>Select status</option>
        <option value="Licensed">Licensed</option>
        <option value="Unlicensed">Unlicensed</option>
        <option value="Unlicensed">None</option>

      </select>
    </div>
  </>
)}


              {/* Operating System (excluded for Switch, UPS, Printer, Camera) */}
              {!["Switch", "UPS", "Printer", "Camera"].includes(category) && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">OS Version</label>
                    <select
        value={osVersion}
        onChange={(e) => setOsVersion(e.target.value)}
        className="w-full px-3 py-2 border rounded-md text-sm"
      >
        <option value="" disabled>Select status</option>
        <option value="Licensed">Linux</option>
        <option value="Unlicensed">Windows Server 2019</option>
                <option value="Unlicensed">Mac</option>

        <option value="Unlicensed">None</option>

      </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">OS Status</label>
                    <select
        value={osStatus}
        onChange={(e) => setOsStatus(e.target.value)}
        className="w-full px-3 py-2 border rounded-md text-sm"
      >
        <option value="" disabled>Select status</option>
        <option value="Licensed">Licensed</option>
        <option value="Unlicensed">Unlicensed</option>

      </select>
                  </div>
                </>
              )}

              <div>
               

                <label className="block text-sm font-medium text-gray-700">Remarks</label>
  <select
    value={remarks}
    onChange={(e) => setRemarks(e.target.value)}
    className="w-full px-3 py-2 border rounded-md text-sm"
  >
    <option value="">Select remarks</option>
    <option value="Operational">Operational</option>
    <option value="For Turn Un">Turn In</option>
  </select>
              </div>

              <div className="md:col-span-2">
  <label className="block text-sm font-medium text-gray-700">Disposition</label>
                <input
                  value={disposition}
                  onChange={(e) => setDisposition(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md text-sm"
                />
</div>

            </div>

            <div className="flex justify-end gap-3 mt-6">
             
              <button
                onClick={handleCancel}
                className="px-4 py-2 rounded bg-gray-300 text-sm hover:bg-gray-400"
              >
                Cancel
              </button>
               <button
                onClick={() => setStep(1)}
                className="px-4 py-2 rounded bg-gray-300 text-sm hover:bg-gray-400"
              >
                Back
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded bg-blue-600 text-white text-sm hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
