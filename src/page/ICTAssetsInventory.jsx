import React, { useState } from 'react';
import AddNewOffice from '../components/AddNewOfficeButton';
import NewOffice from '../components/NewOffice';

function ICTAssetsInventory() {
  const [showModal, setShowModal] = useState(false);

  const handleAddAsset = () => {
    // Add your logic to handle adding a new office
    console.log("New office added!");
  };

  return (
    <>
      <div>
        <span className='flex w-full bg-amber-400'>ICT</span>
      </div>

      <AddNewOffice onClick={() => setShowModal(true)} />

      <NewOffice
        show={showModal}
        onClose={() => setShowModal(false)}
        onAdd={handleAddAsset}
        source="NewOffice"
      />
    </>
  );
}

export default ICTAssetsInventory;
