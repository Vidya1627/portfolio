import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Constact } from './pages/Contact'

function App() {

  return (
    <>
    <div className="font-nunito bg-amber-50">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Constact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
