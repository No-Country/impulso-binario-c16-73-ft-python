import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';
import ProjectDetail from './pages/ProjectDetail';
import Rewards from './pages/Rewards';
import { ProjectProvider } from './context/ProjectContext';
import { ProjectsProvider } from './context/ProjectsContext';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path='/home' element={<ProjectsProvider><Home /></ProjectsProvider>}/>
        <Route path="/detail/:id" element={<ProjectProvider><ProjectDetail /></ProjectProvider>}/>
        <Route path='/project/:id/rewards' element={<ProjectProvider><Rewards /></ProjectProvider>}/>
      </Routes>
    </>
  );
}

export default App;
