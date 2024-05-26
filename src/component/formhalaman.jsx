import React, { useState } from "react";
import axios from "axios";
import Starrating from "./starrating";
import { useParams } from "react-router-dom";

function Formhalaman() {
  const [comment, setComment] = useState({
    comment: "",
  });

  const handleChange = (e) => {
    setComment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { id } = useParams();

  // console.log(id)

  const handleSubmit = async (e) => {
    // const { id } = useParams();
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8800/comment", id, comment); // Ganti URL sesuai dengan endpoint Anda
      console.log(response.data); // Output response dari server
      // Reset form setelah berhasil menambahkan komentar
      setComment({ comment: "" });
      console.log(id, comment)
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex mt-6 justify-between">
      <img src="" alt="foto profil" className="w-10 h-10 rounded-full" />
      <form onSubmit={handleSubmit} className="flex flex-col items-end">
        <input
          className="p-3 rounded-xl text-black-bg"
          style={{ resize: "none" }}
          type="text"
          placeholder="comment comment"
          name="comment"
          value={comment.comment}
          onChange={handleChange}
        />
        <div className="flex my-3" id="star">
          <Starrating />
        </div>
        <button
          type="submit"
          className="bg-button-bg text-white font-bold px-7 py-2 rounded-xl"
        >
          Add Data
        </button>
      </form>
    </div>
  );
}
export default Formhalaman;
