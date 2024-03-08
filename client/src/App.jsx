import { Route, Routes } from 'react-router-dom';
import { ProjectProvider } from './context/ProjectContext';
import { ProjectsProvider } from './context/ProjectsContext';
import { PaymentProvider } from './context/PaymentContext';
import { UserProvider } from './context/UserContext';
import Checkout from './pages/Checkout';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Landing from './pages/Landing';
import NavBar from './components/NavBar/NavBar';
import ProjectDetail from './pages/ProjectDetail';
import Rewards from './pages/Rewards';

function App() {
  return (
    <>
      <NavBar />
      <PaymentProvider>
        <UserProvider>
          <ProjectProvider>
            <ProjectsProvider>
              <Routes>
                <Route
                  path="/"
                  element={<Landing />}/>
                <Route
                  path='/home'
                  element={<Home />}/>
                <Route
                  path="/detail/:id"
                  element={<ProjectDetail />}/>
                <Route
                  path='/project/:id/rewards'
                  element={<Rewards />}/>
                <Route
                  path='/project/:id/checkout'
                  element={<Checkout />}/>
                <Route
                  path='/user/dashboard'
                  element={<Dashboard />}/>
              </Routes>
            </ProjectsProvider>
          </ProjectProvider>
        </UserProvider>
      </PaymentProvider>
    </>
  );
}

export default App;
