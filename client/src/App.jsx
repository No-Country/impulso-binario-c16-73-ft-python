import { Route, Routes } from 'react-router-dom';
import { ProjectProvider } from './context/ProjectContext';
import { ProjectsProvider } from './context/ProjectsContext';
import { PaymentProvider } from './context/PaymentContext';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Landing from './pages/Landing';
import NavBar from './components/NavBar/NavBar';
import ProjectDetail from './pages/ProjectDetail';
import Rewards from './pages/Rewards';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Landing />}/>
        <Route
          path='/home'
          element={<ProjectsProvider><Home /></ProjectsProvider>}/>
        <Route
          path="/detail/:id"
          element={<ProjectProvider><ProjectDetail /></ProjectProvider>}/>
        <Route
          path='/project/:id/rewards'
          element={<PaymentProvider><ProjectProvider><Rewards /></ProjectProvider></PaymentProvider>}/>
        <Route
          path='/project/:id/checkout'
          element={<PaymentProvider><Checkout /></PaymentProvider>}/>
      </Routes>
    </>
  );
}

export default App;
