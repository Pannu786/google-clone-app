import { Links } from './Links';

import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';

import { useResultContext } from '../context/ResultContextProvider';

export const Search = () => {
  const [text, setText] = useState('You got this');
  const { setSearchTerm } = useResultContext();

  const [debouncedValue] = useDebounce(text, 400);

  useEffect(() => {
    if (debouncedValue) {
      setSearchTerm(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <div className='relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3'>
      <input
        value={text}
        type='text'
        className='sm:w-96 w-60 h-10 dark:bg-gray-200 border rounded-md shadow-sm outline-none p-6 text-black hover:shadow-lg'
        placeholder='Search it brah...'
        onChange={(e) => setText(e.target.value)}
      />
      {text !== '' && (
        <button
          type='button'
          className='absolute top-1.5 right-4 text-2xl text-gray-500'
          onClick={() => setText('')}
        >
          x
        </button>
      )}
      <Links />
    </div>
  );
};
