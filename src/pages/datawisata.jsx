import React, { useState } from 'react';
import AdminNav from "../component/adminNav";
import SidebarAdmin from "../component/sidebarAdmin";
import Cardwisata from '../component/cardwisata';
import Formdata from '../component/formdata';

function DataWisata() {
  const [showForm, setShowForm] = useState(false);

  const handleAddData = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <section className="font-ibmflexmono flex flex-col h-screen bg-gray-100">
      <AdminNav title="Data Wisata" />

      <div className="flex-1 flex flex-wrap">
        <SidebarAdmin />

        <div className="flex-1 p-4 w-full md:w-1/2 gap-10 flex-col">
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

          <div className="flex flex-row gap-2 w-full justify-between">
            <div className="flex flex-row gap-3 mt-8 justify-end">
              <button className="text-white px-5 py-2 bg-button-bg font-bold rounded-full" onClick={handleAddData}>
                Add Data
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

          <div className="flex flex-col mt-24">
            <h1 className="font-bold">Preview Data</h1>

            <div className="flex flex-row items-center gap-4 p-4 h-auto">
              <Cardwisata />
              <Cardwisata />
              <Cardwisata />
              <Cardwisata />
            </div>
          </div>
        </div>
      </div>

      {showForm && <Formdata onClose={handleCloseForm} />}
    </section>
  );
}

export default DataWisata;
