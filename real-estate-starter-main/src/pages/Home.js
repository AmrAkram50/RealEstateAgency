import React from 'react';
import Banner from '../components/Banner'
import HouseList from '../components/HouseList'
import Header from '../components/Header';
const Home = () => {
  return (
    <div className='min-h-[1800px]'>
      <Banner />
      <HouseList />
    </div>
  )
};

export default Home;
