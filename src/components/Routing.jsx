import { Route, Routes, Navigate } from 'react-router-dom';
import { Results } from './Results';

export const Routing = () => (
  <div className='p-4'>
    {/* using version-6 routing */}

    <Routes>
      <Route path='/' element={<Navigate to='/search' />} />

      {/* this is a shorter way */}
      {['news', 'images', 'videos', 'search'].map((path, index) => (
        <Route key={index} path={path} element={<Results />} />
      ))}

      {/* this is a long way of doing same thing above*/}
   
      {/* <Route path='/news' element={<Results />} />
        <Route path='/images' element={<Results />} />
        <Route path='/videos' element={<Results />} />
         <Routes path='/search' element={<Results />} /> */}
    </Routes>
  </div>
);
