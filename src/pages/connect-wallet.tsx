'use client';
import { useState } from 'react';

const ConnectWallet = () => {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: checked,
    }));
  };

  return (
    <div className=" bg-[#E6E9F2] flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4 font-bold text-center">Choose the wallet to connect</h1>
      <div className="flex flex-row items-center gap-20 mt-8">

      <div className="flex flex-row items-center mb-2">
        <input
          type="checkbox"
          id="checkbox1"
          name="checkbox1"
          checked={checkboxes.checkbox1}
          onChange={handleCheckboxChange}
          className="mr-2 w-48 h-48 rounded"
        />
        {/* <label htmlFor="checkbox1">Checkbox 1</label> */}
      </div>
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id="checkbox2"
          name="checkbox2"
          checked={checkboxes.checkbox2}
          onChange={handleCheckboxChange}
          className="mr-2 w-48 h-48 rounded"
        />
        {/* <label htmlFor="checkbox2">Checkbox 2</label> */}
      </div>
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id="checkbox3"
          name="checkbox3"
          checked={checkboxes.checkbox3}
          onChange={handleCheckboxChange}
          className="mr-2 w-48 h-48 rounded"
        />
        {/* <label htmlFor="checkbox3">Checkbox 3</label> */}
      </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
