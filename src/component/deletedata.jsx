import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function deletedata() {
  return (
    <div className="flex  my-3 items-center justify-center">
      <div className="xl:mx-auto shadow-xl p-2 xl:w-full xl:max-w-sm 2xl:max-w-md border-2 border-white rounded-xl gap-2">
        <h1>Apakah Anda yakin Untuk Menghapus Semua Data</h1>
        <div className="flex flex-row gap-2">
          <button className="bg-red-400 rounded-sm px-5 py-2">Tidak </button>
          <button className="bg-green-400 rounded-sm px-5 py-2">Ya </button>
        </div>
      </div>
    </div>
  );
}
export default deletedata;
