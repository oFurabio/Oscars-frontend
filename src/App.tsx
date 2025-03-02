import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'

import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Login from './pages/login/Login'
import CategoryList from './components/categories/listCategories/CategoryList'
import NomineeList from './components/nominees/nomineeList/NomineeList'


function App() {
  return (
    <div className='bg-[url("/wallpaper.png")]'>
      <div className='flex flex-col min-h-screen bg-black/90'>
        <AuthProvider>
          <BrowserRouter>
            <Navbar />
            <div className='flex flex-grow items-center justify-center my-7'>
              <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/categories' element={<CategoryList />} />
                <Route path='/nominees/category/:id' element={<NomineeList />} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;