import { Toaster } from "react-hot-toast"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CustomerLayout from "./pages/customer/layouts/CustomerLayout";
import Home from "./pages/customer/Home";
import Movies from "./pages/customer/movie/Movies";
import AdminLayout from "./pages/admin/layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Member from "./pages/customer/Member";
import MovieDetails from "./pages/customer/movie/MovieDetails";
import Auth from "./pages/customer/Auth";
import NotFound from "./pages/error/NotFound";
import MovieManagement from "./pages/admin/MovieManagement";
import UserManagement from "./pages/admin/UserManagement";
import AccessDenied from "./pages/error/AccessDenied";
import FoodManagement from "./pages/admin/FoodManagement";
import CinemaManagement from "./pages/admin/CinemaManagement";
import FAQ from "./pages/admin/FAQ";
import Contact from "./pages/admin/Contact";
import TicketPrice from "./pages/customer/TicketPrice";
import Cinema from "./pages/customer/Cinema";
import Promotion from "./pages/customer/Promotion";
import Setting from "./pages/admin/Setting";

function App() {

  return (
    <>
      <Toaster position="top-center" reverseOrder={false}/>
      <BrowserRouter>
        <Routes>
          {/* Customer Routes */}
          <Route path="/" element={<CustomerLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/phim" element={<Movies/>}/>
            <Route path="/chi-tiet-phim/:movieId" element={<MovieDetails/>}/>
            <Route path="/rap-chieu" element={<Cinema/>}/>
            <Route path="/gia-ve" element={<TicketPrice/>}/>
            <Route path="/uu-dai" element={<Promotion/>}/>
            <Route path="/thanh-vien" element={<Member/>}/>
            <Route path="/login" element={<Auth/>}/>
          </Route>
          {/* Admin Routes */}
          <Route path="/" element={<AdminLayout/>}>
            <Route path="/admin" element={<Dashboard/>}/>
            <Route path="/admin/movies" element={<MovieManagement/>}/>
            <Route path="/admin/users" element={<UserManagement/>}/>
            <Route path="/admin/cinemas" element={<CinemaManagement/>}/>
            <Route path="/admin/foods" element={<FoodManagement/>}/>
            <Route path="/admin/setting" element={<Setting/>}/>
            <Route path="/admin/contact" element={<Contact/>}/>
            <Route path="/admin/faq" element={<FAQ/>}/>
          </Route>
          {/* Error */}
          <Route path="/">
            <Route path="/not-found" element={<NotFound />}/>
            <Route path="/access-denied" element={<AccessDenied />}/>
          </Route>
          <Route path="*" element={<Navigate to="/not-found" />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
