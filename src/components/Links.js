import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: '🔍 Search' },
  { url: '/news', text: '📰 News' },
  { url: '/images', text: '📸 Images' },
  { url: '/videos', text: '🎥 Videos' },
];

export const Links = () => {
  return (
    <div className='flex sm:justify-around justify-between items-center mt-4 '>
      {links.map(({ url, text }, index) => (
        <NavLink
          key={index}
          className='hover:bg-sky-700 m-4 rounded-sm mb-0 text-blue-700 border-b-2 dark:text-blue-300 pb-2'
          to={url}
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};
