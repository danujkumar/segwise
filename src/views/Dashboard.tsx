import Filter from "../components/Filter";
import Navbar from "../components/navbar";
import Tables from "../components/Tables";
import Modal from "./Modal";

export function Dashboard() {
  return (
    <>
      <Navbar />
      <Filter />
      <Tables />
      <Modal />
    </>
  );
}

export default Dashboard;
