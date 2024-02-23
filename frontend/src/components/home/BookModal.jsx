import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-75 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-fill h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-500 cursor-pointer hover:text-red-800"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-pink-200 rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-blue-800">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-yellow-700" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-yellow-700" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4">What ever you wish to write</p>
        <p className="my-2">
          Lorem ipsum dolor sit amet sonsectetur adipisicing elit. All human
          beings are born free and equal in dignity and rights. They are endowed
          with reason and conscience and should act towards one another in a
          spirit of brotherhood. Everyone is entitled to all the rights and
          freedoms set forth in this Declaration, without distinction of any
          kind, such as race, colour, sex, language, religion, political or
          other opinion, national or social origin, property, birth or other
          status.
        </p>
      </div>
    </div>
  );
};

export default BookModal;
