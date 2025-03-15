// import React from 'react'

import Filter from "../components/Filter";
import Navbar from "../components/navbar";
import Tables from "../components/Tables";

export function Dashboard() {
  return (
    <>
      <Navbar />
      <Filter />
      <Tables />
    </>
  );
}

export default Dashboard;
