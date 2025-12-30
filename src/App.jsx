import Blogs from './pages/Blogs';
import MainLayout from './components/MainLayout';
import Service from './pages/Service';
import Works from './pages/Works';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/services" element={<Service />} />
            <Route path="/blogs" element={<Blogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
