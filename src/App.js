import { Home, Renting, Membership, Chauffers, Contact } from "./Pages/index";
import { Footer, Navbar } from "./Components/index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="rent-a-car">
          <Route index element={<Renting />} />
        </Route>
        <Route path="/membership" element={<Membership />} />
        <Route path="/chauffers" element={<Chauffers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
