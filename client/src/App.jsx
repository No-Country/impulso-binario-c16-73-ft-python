import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/detail/:id" element={<ProjectDetail />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </>
  );
}

export default App;
