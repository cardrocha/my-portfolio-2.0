import { Route, Routes  } from 'react-router-dom'
import Home from './pages/Home'
import Status from './components/Status'
import Project from './pages/Project'
import Skills from './components/Skills'
import Quest from './components/Quest'


const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Status />} />
      <Route path="/project" element={<Project />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/quest" element={<Quest />} />
    </Routes>
  )
}

export default Rotas
