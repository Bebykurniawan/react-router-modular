import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <Navbar />
      <main>
        {/* Ini buat nge-render halaman sesuai route */}
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
