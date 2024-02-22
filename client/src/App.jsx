import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import NavBar from './components/NavBar/NavBar';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/detail/" element={<ProjectDetail />}/>
      </Routes>
    </>
  );
}

export default App;
