import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import KaKaoLogin from './Components/Login_Components/KaKaoLogin';
import ListPage from './Pages/ListPage';
import SelectRegion from './Components/SelectRegion_Components/SelectRegion';
import RegionPage from './Pages/RegionPage';

//Pages 폴더로부터 컴포넌트를 가져와서 라우터 연결  
function App() {
  return (
    <Routes>  
      <Route path='/' element={<MainPage/>}/>
      <Route path='/login/oauth2/code/kakao' element={<KaKaoLogin/>}/>
      <Route path='/list' element={<ListPage/>}/>
      <Route path='/selectregion' element={<RegionPage/>}/>
    </Routes>

  );
}

export default App;
