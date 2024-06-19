
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  BrowserRouter, 
  Routes,
  Route
} from "react-router-dom";
import Navbar from './component/Navbar';
import ProductAll from './page/ProductAll';
import Login from './page/Login';

import PrivateRoute from './route/PrivateRoute';


//1. 전체상품페이지, 로그인, 상품상세페이지
//1-1 네비게이션 바
//2. 전체 상품페이지에서는 전체상품을 볼 수 있다.
//2-1 json server 
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
//3. 상품 디테일을 눌렀으나, 로그인이 안된 상태일 때 로그인 페이지가 먼저 나온다.
//4. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
//5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
//5. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
//6. 로그인을 하면 로그아웃이 보이고  로그아웃을 하면 로그인이 보인다.
//7. 상품을 검색 할 수 있다.

function App() {
  let [authenticate,setAuthenticate]=useState(false);//true는 로그인, false는 로그아웃
  useEffect(()=>{
    console.log("Aaaa",authenticate)
  },[authenticate])

  return (
    <BrowserRouter>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
