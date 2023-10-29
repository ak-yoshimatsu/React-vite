import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import AppNavi from "./AppNavi";
import Index from "../pages/books/Index";
import Detail from "../pages/books/Detail";
import NotFound from "../pages/errors/NotFound";
import InvalidParams from "../pages/errors/InvalidParams";

const routesElements = createRoutesFromElements(
  <Route path="/" element={<AppNavi />}>
    <Route index element={<Home />}></Route>
    <Route path="about" element={<About />}></Route>
    <Route path="contact" element={<Contact />}></Route>
    {/* Books */}
    <Route path="/books">
      <Route index element={<Index />}></Route>
      <Route
        path=":isbn"
        element={<Detail />}
        errorElement={<InvalidParams/>}
      ></Route>
    </Route>
    {/* Not Found */}
    <Route path="*" element={<NotFound />}></Route>
  </Route>
)

const routing = createBrowserRouter(routesElements)

export default routing