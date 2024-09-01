import React from 'react';
import './popup.css';
import toast, { Toaster } from 'react-hot-toast';

const Popup = ({ estimatedPrice, setEstimatedPrice, onClose, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success('Bid Applied Successfully');

    if (onSubmit) {
      onSubmit();
    }

    setTimeout(() => {
      onClose();
    }, 1000); 
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black-1 overflow-hidden">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 max-w-md">
        <h2 className="text-xl font-bold text-orange mb-4">Place Your Bid</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="estimatedPrice">
              Estimated Bid:
            </label>
            <input
              type="text"
              id="estimatedPrice"
              value={estimatedPrice}
              onChange={(e) => setEstimatedPrice(e.target.value)}
              className="border border-gray-600 rounded w-full py-2 px-3 text-black focus:outline-none focus:ring-2 focus:ring-orange"
              required
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-700 text-white transition-colors duration-300 ease-in-out font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 hover:bg-red-700 text-white transition-colors duration-300 ease-in-out font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Close
            </button>
          </div>
        </form>
        <Toaster />
      </div>
    </div>
  );
};

export default Popup;
