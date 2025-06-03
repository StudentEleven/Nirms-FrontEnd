import React, { useState, useEffect } from "react";

export default function ViewFas({ show, asset, onClose }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedAsset, setEditedAsset] = useState({});

  useEffect(() => {
    if (asset) {
      setEditedAsset({ ...asset });
    }
  }, [asset]);

  if (!show || !asset) return null;

  const handleInputChange = (field, value) => {
    setEditedAsset((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Saved Asset:", editedAsset);
    setIsEditing(false);
  };

  editedAsset.activityLog = [
    { name: "John Doe", activity: "Created the asset", date: "2025-06-01" },
    { name: "Jane Smith", activity: "Updated status to Operational", date: "2025-06-02" },
  ];

  const msOfficeVersions = ["Office 2016", "Office 2019", "Office 365"];
  const osVersions = ["Windows 10", "Windows 11", "macOS Ventura"];
  const statusOptions = ["Installed", "Not Installed", "Pending"];

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-5xl w-full flex flex-col md:flex-row gap-6">
        {/* Left: Asset Info */}
        <div className="md:w-2/3">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Asset Details</h2>

          {/* Image */}
          <div className="flex justify-center mb-4">
            <img
              src={editedAsset.imageUrl || "/placeholder-image.png"}
              alt="Asset"
              className="h-32 object-contain"
            />
          </div>

          <div className="space-y-2 text-sm text-gray-700">
            {[
              { label: "Type of Equipment", key: "typeOfEquipment" },
              { label: "Serial Number", key: "serialNumber" },
              { label: "Date Issued", key: "dateIssued", type: "date" },
              { label: "MS Office Version", key: "msOfficeVersion", type: "select", options: msOfficeVersions },
              { label: "MS Office Status", key: "msOfficeStatus", type: "select", options: statusOptions },
              { label: "OS Version", key: "osVersion", type: "select", options: osVersions },
              { label: "OS Status", key: "osStatus", type: "select", options: statusOptions },
              { label: "Remarks", key: "remarks" },
              { label: "Disposition", key: "disposition" },
            ].map(({ label, key, type, options }) => {
              const readOnlyFields = ["typeOfEquipment", "serialNumber", "dateIssued"];
              const isReadOnly = readOnlyFields.includes(key);

              return (
                <p key={key}>
                  <strong>{label}:</strong>{" "}
                  {isEditing && !isReadOnly ? (
                    type === "select" ? (
                      <select
                        value={editedAsset[key] || ""}
                        onChange={(e) => handleInputChange(key, e.target.value)}
                        className="border rounded px-2 py-1 w-full mt-1 text-gray-800"
                      >
                        <option value="">Select {label}</option>
                        {options.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    ) : type === "date" ? (
                      <input
                        type="date"
                        value={editedAsset[key] || ""}
                        onChange={(e) => handleInputChange(key, e.target.value)}
                        className="border rounded px-2 py-1 w-full mt-1 text-gray-800"
                      />
                    ) : (
                      <input
                        type="text"
                        value={editedAsset[key] || ""}
                        onChange={(e) => handleInputChange(key, e.target.value)}
                        className="border rounded px-2 py-1 w-full mt-1 text-gray-800"
                      />
                    )
                  ) : (
                    editedAsset[key] || "—"
                  )}
                </p>
              );
            })}
          </div>
        </div>

        {/* Right: Activity Log */}
        <div className="md:w-1/2 border-l pl-4">
          <h3 className="text-md font-semibold mb-2 text-gray-800">Activity Log</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            {editedAsset.activityLog && editedAsset.activityLog.length > 0 ? (
              editedAsset.activityLog.map((entry, index) => (
                <li key={index} className="border-b pb-2">
                  <p>
                    <strong>{entry.name}</strong> {entry.activity}. {entry.date}
                  </p>
                </li>
              ))
            ) : (
              <li>No activity recorded.</li>
            )}
          </ul>
        </div>

        {/* Buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          {isEditing ? (
            <button
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
              onClick={handleSave}
            >
              Save
            </button>
          ) : (
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          )}
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
