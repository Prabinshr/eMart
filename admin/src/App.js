import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";

import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux';

function App() {
  // const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  // const currentUser = user && JSON.parse(user).currentUser;
  // const admin = currentUser?.isAdmin;
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);
  console.log(admin)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/users" element={<UserList />}></Route>
        <Route path="/user/:userId" element={<User />}></Route>
        <Route path="/newUser" element={<NewUser />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/product/:productId" element={<Product />}></Route>
        <Route path="/newproduct" element={<NewProduct />}></Route>
        <Route path="/login" element={admin ? <Home/> : <Login />}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
