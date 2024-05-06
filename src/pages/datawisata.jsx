import React, { useState } from "react";
import AdminNav from "../component/adminNav";
import SidebarAdmin from "../component/sidebarAdmin";
import Cardwisata from "../component/cardwisata";
import Formdata from "../component/formdata";
import Deletedata from "../component/deletedata";

function DataWisata() {
  const [showForm, setShowForm] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleAddData = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleDeleteData = () => {
    setShowDelete(true);
  };

  const handleCloseDelete = () => {
    setShowDelete(false);
  };

  return (
    <section className="font-ibmflexmono flex flex-col bg-black-bg">
      <AdminNav title="Data Wisata" />

      <div className="flex-1 flex flex-wrap">
        <SidebarAdmin />
        <div className="flex-1 p-8 w-full md:w-1/2 gap-10 flex-col">

          <div className="relative max-w-md w-full">
            <div className="absolute top-1 left-2 inline-flex items-center p-2">
              <i className="fas fa-search text-gray-400"></i>
            </div>
            <input
              className="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline"
              type="search"
              placeholder="Search Data..."
            />
          </div>

          {showDelete && <Deletedata onClose={handleCloseDelete} />}

          <div className="flex flex-row gap-2 w-full justify-between">
            <div className="flex flex-row gap-3 mt-8 justify-end">
              <button
                className="text-white px-5 py-2 bg-button-bg font-bold rounded-full"
                onClick={handleAddData}
              >
                Add Data
              </button>
              <button
                className="text-white px-5 py-2 bg-button-bg font-bold rounded-full"
                onClick={handleDeleteData}
              >
                Delete Data
              </button>
            </div>
            <div className="flex flex-row gap-3 mt-8 justify-end">
              <button className="text-white px-5 py-2 bg-button-bg font-bold rounded-full">
                Beach
              </button>
              <button className="text-white px-5 py-2 bg-button-bg font-bold rounded-full">
                Mountain
              </button>
              <button className="text-white px-5 py-2 bg-button-bg font-bold rounded-full">
                Club
              </button>
            </div>
          </div>

          {showForm && <Formdata onClose={handleCloseForm} />}
          <div className="flex flex-col mt-10">
            <h1 className="font-bold text-xl ml-5 text-white">Preview Data</h1>

            <div className="flex flex-auto items-center gap-4 p-4 h-auto">
              <Cardwisata />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataWisata;
