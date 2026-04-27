import React, { useState } from "react";
import axios from "axios";

export default function Addbook() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [data, setData] = useState({
    title: "",
    author: "",
    category: "",
    isbn: "",
    totalCopies: "",
    availableCopies: "",
    status: "",
    publisher: "",
    publishYear: "",
    description: "",
  });

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setMessage("");

      const response = await axios.post(
        "http://localhost:5000/api/books/addbook",
        data
      );

      setMessage(response.data.message);

      setData({
        title: "",
        author: "",
        category: "",
        isbn: "",
        totalCopies: "",
        availableCopies: "",
        status: "",
        publisher: "",
        publishYear: "",
        description: "",
      });

      setLoading(false);
    } catch (error) {
      setLoading(false);

      setError(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f2ec] flex justify-center items-start p-8">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-[#1a3c5e] mb-6">
          Add New Book
        </h1>

        {/* Success Message */}
        {message && (
          <div className="mb-4 p-3 rounded-lg bg-green-100 text-green-700">
            {message}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-100 text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label className="block mb-2 font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={data.title}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#1a3c5e]"
              />
            </div>

            {/* Author */}
            <div>
              <label className="block mb-2 font-medium">Author</label>
              <input
                type="text"
                name="author"
                value={data.author}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#1a3c5e]"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block mb-2 font-medium">Category</label>
              <select
                name="category"
                value={data.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#1a3c5e]"
              >
                <option value="">Select Category</option>
                <option value="STORY">Story</option>
                <option value="SCIENCE">Science</option>
                <option value="NOBAL">Nobal</option>
                <option value="ACCOUNTING">Accounting</option>
                <option value="ENGINEERING">Engineering</option>
              </select>
            </div>

            {/* ISBN */}
            <div>
              <label className="block mb-2 font-medium">ISBN</label>
              <input
                type="text"
                name="isbn"
                value={data.isbn}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#1a3c5e]"
              />
            </div>

            {/* Total Copies */}
            <div>
              <label className="block mb-2 font-medium">Total Copies</label>
              <input
                type="number"
                name="totalCopies"
                value={data.totalCopies}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#1a3c5e]"
              />
            </div>

            {/* Available Copies */}
            <div>
              <label className="block mb-2 font-medium">Available Copies</label>
              <input
                type="number"
                name="availableCopies"
                value={data.availableCopies}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#1a3c5e]"
              />
            </div>

            {/* Status */}
            <div>
              <label className="block mb-2 font-medium">Status</label>
              <select
                name="status"
                value={data.status}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#1a3c5e]"
              >
                <option value="">Select Status</option>
                <option value="AVAILABLE">AVAILABLE</option>
                <option value="OUT OF STOCK">OUT OF STOCK</option>
              </select>
            </div>

            {/* Publisher */}
            <div>
              <label className="block mb-2 font-medium">Publisher</label>
              <input
                type="text"
                name="publisher"
                value={data.publisher}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#1a3c5e]"
              />
            </div>

            {/* Publish Year */}
            <div>
              <label className="block mb-2 font-medium">Publish Year</label>
              <input
                type="number"
                name="publishYear"
                value={data.publishYear}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#1a3c5e]"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-medium">Description</label>
            <textarea
              name="description"
              value={data.description}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#1a3c5e]"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#1a3c5e] text-white px-8 py-3 rounded-lg hover:bg-[#16324d] transition"
            >
              {loading ? "Adding Book..." : "Add Book"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}