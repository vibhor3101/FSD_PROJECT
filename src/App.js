import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import "./App.css";
//import AddRoom from "./components/rooms/AddRoom";
import ExistingRooms from "./components/rooms/ExistingRooms.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import EditRoom from "./components/rooms/EditRoom.jsx";
import AddRoom from "./components/rooms/AddRoom.jsx";
import NavBar from "./components/layout/NavBar.jsx";
import Footer from "./components/layout/Footer.jsx";
import RoomListing from "./components/rooms/RoomListing.jsx";
import Admin from "./components/admin/Admin.jsx";
import Checkout from "./components/booking/Checkout.jsx";
function App() {
  return (
    <>
      <main>
        <Router>
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit-room/:roomId" element={<EditRoom />} />
            <Route path="/existing-rooms" element={<ExistingRooms />} />
            <Route path="/add-room" element={<AddRoom />} />
            <Route path="/book-room/:roomId" element={<Checkout />} />

            <Route path="/browse-all-rooms" element={<RoomListing />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Router>
        <Footer />
      </main>
    </>
  );
}

export default App;
