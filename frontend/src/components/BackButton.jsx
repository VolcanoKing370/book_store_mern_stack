import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/'}) => {
  return (
    <div className='flex'>
        <Link
        to={destination}
        className='bg-green-500 text-white px-4 py-1 rounded-full w-fit hover:bg-green-700'
        >
            <BsArrowLeft className='text-2x1' />
        </Link>
    </div>
  )
}

export default BackButton