import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactPlayer } from 'react-player';

import { useResultContext } from '../context/ResultContextProvider';
import { Loading } from './Loading';

export const Results = () => {
  const { getResults, results, isLoading, setSearchTerm, searchTerm } =
    useResultContext();
  const location = useLocation(); // get the current pathname from the router (e.g. /news,/images,/videos,/search)

  if (isLoading) return <Loading />;

  return (
    <div>Re</div>
  )
};
