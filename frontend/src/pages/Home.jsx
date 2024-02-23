import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksCard from "../components/home/BooksCard";
import BooksTable from "../components/home/BooksTable";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [displayType, setDisplayType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books`)
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-t from-cyan-700 to-slate-100">
      <div className="p-4">
        <div className="flex justify-center items-center gap-x-4">
          <button
            className="px-4 py-1 m-8 text-white bg-pink-500 hover:bg-pink-700 rounded-xl"
            onClick={() => setDisplayType("table")}
          >
            Table
          </button>
          <button
            className="px-4 py-1 m-8 text-white bg-pink-500 hover:bg-pink-700 rounded-xl"
            onClick={() => setDisplayType("card")}
          >
            Card
          </button>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8">List of Books</h1>
          <Link to="/books/create">
            <MdOutlineAddBox className="text-cyan-600 text-4xl hover:text-sky-900" />
          </Link>
        </div>
        {loading ? (
          <Spinner />
        ) : displayType === "table" ? (
          <BooksTable books={books} />
        ) : (
          <BooksCard books={books} />
        )}
      </div>
      <p className="p-4 flex justify-center">Copyright 2024 Rakin Kazi</p>
    </div>
  );
};

export default Home;
