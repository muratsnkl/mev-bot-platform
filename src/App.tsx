import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Packages from './pages/Packages';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="paketler" element={<Packages />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="giris" element={<Login />} />
          <Route path="kayit" element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
