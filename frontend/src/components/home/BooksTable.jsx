import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-800 rounded-tl-lg bg-slate-200">
            Book Index
          </th>
          <th className="border border-slate-800 rounded-none bg-slate-200">
            Title
          </th>
          <th className="border border-slate-800 rounded-none max-md:hidden bg-slate-200">
            Author
          </th>
          <th className="border border-slate-800 rounded-none max-md:hidden bg-slate-200">
            Year Published
          </th>
          <th className="border border-slate-800 rounded-tr-lg bg-slate-200">
            Operations
          </th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, idx) => (
          <tr key={book._id} className="h-8">
            <td className="border border-slate-800 rounded-lg text-center bg-slate-100">
              {idx + 1}
            </td>
            <td className="border border-slate-800 rounded-lg text-center bg-slate-100">
              {book.title}
            </td>
            <td className="border border-slate-800 rounded-lg text-center max-md:hidden bg-slate-100">
              {book.author}
            </td>
            <td className="border border-slate-800 rounded-lg text-center max-md:hidden bg-slate-100">
              {book.publishYear}
            </td>
            <td className="border border-slate-800 rounded-none text-center bg-slate-100">
              <div className="flex justify-center gap-x-4">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="text-2xl text-cyan-600 hover:text-blue-700" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-500 hover:text-yellow-700" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-400 hover:text-red-700" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
