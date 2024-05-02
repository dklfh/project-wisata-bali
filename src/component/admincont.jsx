import React from 'react';

const AdminCont = () => {
  return (
    <section className="font-ibmflexmono gap-16 flex flex-col p-10 items-center bg-black-bg">
      <h1 className="text-4xl text-white font-bold">Dashboard Admin</h1>
      <div className="flex flex-col items-center justify-center h-screen dark">
        <div className="w-full max-w-md bg-transparent border-2 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-200 mb-4 text-center">Input Data Wisata</h2>

          <form className="flex flex-col">
            <input
              placeholder="Nama Tempat Wisata"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
            />
            <input
              placeholder="Lokasi Tempat Wisata"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
            />
            <textarea
              placeholder="Deskripsi"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              name="cover_letter"
            ></textarea>
            <input
              placeholder="Resume"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="file"
            />

            <button
              className="bg-gradient-to-r from-orange-200 to-orange-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-orange-500 hover:to-orange-800 transition ease-in-out duration-150"
              type="submit"
            >
              Kirim Data
            </button>
          </form>
        </div>
      </div>

      <div class="flex flex-row gap-3">
        
      </div>
    </section>
  );
};

export default AdminCont;
