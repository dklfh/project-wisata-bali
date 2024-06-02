import axios from "axios";
import React, { useState, useEffect } from "react";
import AdminNav from "../component/adminNav";
import SidebarAdmin from "../component/sidebarAdmin";
import Cardwisata from "../component/cardwisata";
import Formdata from "../component/formdata";
import Deletedata from "../component/deletedata";
import Filteredbutton from "../component/filteredbutton"
import Searchbar from "../component/searchbar";

function DataWisata() {
  const [showForm, setShowForm] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [wisataData, setWisataData] = useState([]);
  const [filteredWisata, setFilteredWisata] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

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

  const handleConfirmDelete = async () => {
    try {
      await axios.post("http://localhost:8800/delete", { ids: selectedIds });
      const updatedWisata = wisataData.filter(wisata => !selectedIds.includes(wisata.id));
      setWisataData(updatedWisata);
      setFilteredWisata(updatedWisata);
      setSelectedIds([]);
    } catch (err) {
      console.log(err);
    } finally {
      setShowDelete(false);
    }
  };

  const handleSelect = (id) => {
    setSelectedIds(prevSelectedIds =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter(selectedId => selectedId !== id)
        : [...prevSelectedIds, id]
    );
  };

  useEffect(() => {
    const fetchAllWisata = async () => {
      try {
        const res = await axios.get("http://localhost:8800");
        setWisataData(res.data);
        setFilteredWisata(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllWisata();
  }, []);

  const handleSearch = (query) => {
    const filteredData = wisataData.filter((wisata) =>
      wisata.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredWisata(filteredData);
  };

  const handleClose = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setWisataData(res.data);
      setFilteredWisata(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFilter = (category) => {
    const filteredData = wisataData.filter((wisata) => wisata.category === category);
    setFilteredWisata(filteredData);
  };

  const resetFilter = () => {
    setFilteredWisata(wisataData);
  };

  return (
    <section className="font-ibmflexmono flex flex-col bg-black-bg">
      <AdminNav title="Data Wisata" />

      <div className="flex-1 flex flex-wrap">
        <SidebarAdmin />
        <div className="flex-1 p-8 w-full md:w-1/2 gap-10 flex-col">
          <div className="relative max-w-md w-full">
          <Searchbar onSearch={handleSearch} onClose={handleClose} />
          </div>

          {showDelete && (
            <Deletedata onClose={handleCloseDelete} onConfirm={handleConfirmDelete} />
          )}

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
              <Filteredbutton onFilter={handleFilter} onResetFilter={resetFilter} />
            </div>
          </div>

          {showForm && <Formdata onClose={handleCloseForm} />}
          <div className="flex flex-col mt-10">
            <h1 className="font-bold text-xl ml-5 text-white">Preview Data</h1>

            <div className="flex flex-wrap justify-center p-4 gap-4">
              {filteredWisata.length > 0 ? (
                filteredWisata.map((wisata) => (
                  <Cardwisata 
                    key={wisata.id} 
                    wisata={wisata} 
                    isSelected={selectedIds.includes(wisata.id)}
                    onSelect={handleSelect}
                    showCheckbox={true}
                  />
                ))
              ) : (
                <p className="text-white">No matching results found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataWisata;
