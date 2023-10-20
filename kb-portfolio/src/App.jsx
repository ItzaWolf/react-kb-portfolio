import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layouts from './layouts/Layouts';
import Home from './pages/Home';
import About from './pages/About';
import ContactForm from './pages/ContactMe';


function main() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layouts />}>
      <Route index element={<Home/>}/>
      <Route path="/About" element={<About />}/>
      <Route path="/Contact-Me" element={<ContactForm />}/>
    </Route>
  ))
  return (
    <RouterProvider router={router}/>
  );
}

export default main;