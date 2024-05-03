import React from "react";
import Logo from "../img/logo goBali.png";
import AdminNav from "../component/adminNav"
import Sidebar from "../component/sidebarAdmin"

const AdminCont = () => {
  return (
    <section className="font-ibmflexmono flex flex-col h-screen bg-gray-100">
      <AdminNav title="GogoBali Admin"/>

      <div className="flex-1 flex flex-wrap">
        
        <Sidebar/>

        <div className="flex-1 p-4 w-full md:w-1/2">

          <div className="relative max-w-md w-full">
            <div className="absolute top-1 left-2 inline-flex items-center p-2">
              <i className="fas fa-search text-gray-400"></i>
            </div>
            <input className="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline" type="search" placeholder="Search Data..."/>
          </div>

          <div className="mt-8 bg-white p-4 shadow rounded-lg">
            <h2 className="text-gray-500 text-lg font-semibold pb-4">On Performing</h2>
            <div className="my-1"></div> 
            <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> 
            <table className="w-full table-auto text-sm">
              <thead>
                <tr className="text-sm leading-normal">
                  <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Photos</th>
                  <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Title</th>
                  <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Location</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-grey-lighter">
                  <td className="py-2 px-4 border-b border-grey-light"><img src={Logo} alt="Foto Perfil" className="rounded-full h-10 w-10"/></td>
                  <td className="py-2 px-4 border-b border-grey-light">Uluwatu Beach</td>
                  <td className="py-2 px-4 border-b border-grey-light">Pecatu,Badung</td>
                </tr>

                <tr className="hover:bg-grey-lighter">
                  <td className="py-2 px-4 border-b border-grey-light"><img src={Logo} alt="Foto Perfil" className="rounded-full h-10 w-10"/></td>
                  <td className="py-2 px-4 border-b border-grey-light">Uluwatu Beach</td>
                  <td className="py-2 px-4 border-b border-grey-light">Pecatu,Badung</td>
                </tr>

                <tr className="hover:bg-grey-lighter">
                  <td className="py-2 px-4 border-b border-grey-light"><img src={Logo} alt="Foto Perfil" className="rounded-full h-10 w-10"/></td>
                  <td className="py-2 px-4 border-b border-grey-light">Uluwatu Beach</td>
                  <td className="py-2 px-4 border-b border-grey-light">Pecatu,Badung</td>
                </tr>
                {/* Sisipkan baris tabel tambahan di sini */}
              </tbody>
            </table>
            <div className="text-right mt-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded">
                Edit Data
              </button>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default AdminCont;
