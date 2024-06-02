import React from "react";

function Deletedata({ onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h1>Apakah Anda yakin untuk menghapus data terpilih?</h1>
        <div className="flex justify-end gap-4 mt-4">
          <button
            className="bg-red-400 rounded-sm px-5 py-2"
            onClick={onClose}
          >
            Tidak
          </button>
          <button
            className="bg-green-400 rounded-sm px-5 py-2"
            onClick={onConfirm}
          >
            Ya
          </button>
        </div>
      </div>
    </div>
  );
}

export default Deletedata;
