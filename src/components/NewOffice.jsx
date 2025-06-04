import React, { useState } from 'react';

function NewOffice({ show, onClose, onAdd, source }) {
  const [officeName, setOfficeName] = useState('');
  const [personnelName, setPersonnelName] = useState('');
  const [position, setPosition] = useState('');
  const [code, setCode] = useState('');

  if (!show) return null;

  const handleAdd = () => {
    if (onAdd) {
      onAdd({
        officeName,
        personnelName,
        position,
        code
      });
    }
    onClose();
    // Optional: reset form
    setOfficeName('');
    setPersonnelName('');
    setPosition('');
    setCode('');
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6 relative">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Add New Office
        </h2>

        {/* Form inputs */}
        <div className="space-y-4">
          
                <div>
                  <label className="block text-sm font-medium text-gray-700">Office Name</label>
                  <input
                    type="text"
                    value={officeName}
                    onChange={(e) => setOfficeName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Code</label>
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md text-sm"
                  />
                </div>
         
 <div>
                  <label className="block text-sm font-medium text-gray-700">Personnel Name</label>
                  <input
                    type="text"
                    value={personnelName}
                    onChange={(e) => setPersonnelName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md text-sm"
                  />
                </div>
         
 <div>
                  <label className="block text-sm font-medium text-gray-700">Position</label>
                  <input
                    type="text"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md text-sm"
                  />
                </div>
          
        </div>

        {/* Action buttons */}
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="mr-2 px-4 py-2 rounded bg-gray-300 text-sm hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            disabled={!officeName || !personnelName || !position}
            className="px-4 py-2 rounded bg-blue-600 text-white text-sm hover:bg-blue-700 disabled:bg-gray-400"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewOffice;
