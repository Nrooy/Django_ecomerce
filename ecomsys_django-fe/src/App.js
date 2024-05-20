
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register/register';
import ProductDetail from './components/detail';
import Cart from './components/cart';
import AdminHome from './components/manager/adminHome';
import EditProduct from './components/manager/editProduct';
import SignUp from './components/SignUp';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/product/:product_id' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/manager' element={<AdminHome></AdminHome>}></Route>
        <Route path='/edit' element={<EditProduct></EditProduct>}></Route>
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        draggable
        theme="light"
      />
    </BrowserRouter>
  );
}

export default App;
