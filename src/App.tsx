import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardLayout from './components/DashboardLayout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Packages from './pages/Packages';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Terms from './pages/Terms';
import ForgotPassword from './pages/ForgotPassword';
import Checkout from './pages/Checkout';
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
            <Route path="kullanim-kosullari" element={<Terms />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route element={<DashboardLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="dashboard/islemler" element={<div>İşlemler Sayfası</div>} />
              <Route path="dashboard/cuzdan" element={<div>Cüzdan Sayfası</div>} />
              <Route path="profil" element={<Profile />} />
              <Route path="ayarlar" element={<Settings />} />
            </Route>
          </Route>
          <Route path="giris" element={<Login />} />
          <Route path="kayit" element={<Register />} />
          <Route path="sifremi-unuttum" element={<ForgotPassword />} />
          <Route path="odeme" element={<Checkout />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
