import { Link } from 'react-router-dom';
import { Search } from './Search';

export const Navbar = ({ setDarkTheme, darkTheme }) => (
  <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
    <div className='flex justify-between items-center space-x-2 w-screen'>
      <Link to='/'>
        <p className='text-2xl decoration-orange-500 overline hover:underline bg-blue-500 font-bold text-white py-1 px-3 rounded-lg dark:bg-gray-200 dark:text-gray-900'>
          G👀gle
        </p>
      </Link>
      <button
        className='hover:bg-sky-700 hover:shadow-lg rounded-lg p-1 text-xl dark:text-gray-900 dark:bg-gray-500 bg-white'
        type='button'
        onClick={() => setDarkTheme(!darkTheme)}
      >
        {darkTheme ? 'Light 🌞' : 'Dark 🌚'}
      </button>
      <Search />
    </div>
  </div>
);
