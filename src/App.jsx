import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './pages/Home'
import Single from './pages/Single'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
         <Route index element={<Home/>}/>
         <Route path='/coin/:id' element={<Single/>}/>
      </Route>
    </Routes>
  )
}

export default App
