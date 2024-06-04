import React, { useState, useEffect } from "react";
import axios from "axios";
import StarRating from "./starrating"; // Pastikan nama impor sesuai dengan komponen yang diekspor
import { useParams } from "react-router-dom";

function Formhalaman({ onCommentAdded }) {
  const { id } = useParams();
  const [comment, setComment] = useState({
    id: id,
    comment: "",
    nama: "",
    rating: "" // Tambah state untuk menyimpan nilai rating
  });
  const [error, setError] = useState("");
  const [ratingReset, setRatingReset] = useState(null); // Callback untuk reset rating

  useEffect(() => {
    setComment((prev) => ({ ...prev, id: id }));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment((prev) => ({ ...prev, [name]: value }));
    setError(""); // Reset error ketika pengguna mulai mengetik
  };

  const handleRatingChange = (rating) => {
    setComment((prev) => ({ ...prev, rating: rating }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.comment.trim() === "" || comment.nama.trim() === "" || comment.rating === "") {
      setError("Nama, Komentar, dan Rating tidak boleh kosong");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8800/comment", {
        id: comment.id,
        comment: comment.comment,
        nama: comment.nama,
        rating: comment.rating // Sertakan nilai rating
      });
      console.log(response.data); // Output response dari server

      // Panggil fungsi onCommentAdded setelah komentar berhasil ditambahkan
      onCommentAdded(response.data);

      // Reset form setelah berhasil menambahkan komentar
      setComment({ id: id, comment: "", nama: "", rating: "" });
      if (ratingReset) {
        ratingReset(); // Reset rating
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-between flex-col gap-y-5 sm:flex-row">
      <form className="flex flex-col items-start w-full" onSubmit={handleSubmit}>
        <input
          className="rounded-xl w-full p-3 text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
          type="text"
          placeholder="Nama..."
          name="nama"
          value={comment.nama}
          onChange={handleChange}
        />
        <textarea
          className="p-3 w-full min-h-[100px] max-h-[300px] rounded-xl text-black bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{ resize: "vertical" }}
          type="text"
          placeholder="Comment..."
          name="comment"
          value={comment.comment}
          onChange={handleChange}
        />
        <div className="flex my-3" id="star">
          <StarRating onRatingChange={handleRatingChange} onRatingReset={setRatingReset} />
        </div>
        <button
          type="submit"
          className="bg-button-bg text-white font-bold px-7 py-2 rounded-xl"
        >
          Add Data
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}

export default Formhalaman;
