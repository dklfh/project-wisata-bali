import React, { useState, useEffect } from "react";
import axios from "axios";
import Starrating from "./starrating";
import { useParams } from "react-router-dom";

function Formhalaman({ onCommentAdded }) {
  const { id } = useParams();
  const [comment, setComment] = useState({
    id: id,
    comment: "",
  });

  useEffect(() => {
    setComment((prev) => ({ ...prev, id: id }));
  }, [id]);

  const handleChange = (e) => {
    setComment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8800/comment", {
        id: comment.id,
        comment: comment.comment
      });
      console.log(response.data); // Output response dari server

      // Panggil fungsi onCommentAdded setelah komentar berhasil ditambahkan
      onCommentAdded(response.data);

      // Reset form setelah berhasil menambahkan komentar
      setComment({ id: id, comment: "" });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex mt-6 justify-between">
      <img src="" alt="foto profil" className="w-10 h-10 rounded-full" />
      <form className="flex flex-col items-end" onSubmit={handleSubmit}>
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
