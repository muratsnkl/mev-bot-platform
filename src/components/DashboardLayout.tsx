import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
  HomeIcon,
  ChartBarIcon,
  WalletIcon,
  UserIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';

// Dashboard menü öğelerini tanımlıyoruz
const menuItems = [
  { name: 'Ana Panel', href: '/dashboard', icon: HomeIcon },
  { name: 'İşlemler', href: '/dashboard/islemler', icon: ChartBarIcon },
  { name: 'Cüzdan', href: '/dashboard/cuzdan', icon: WalletIcon },
  { name: 'Profil', href: '/profil', icon: UserIcon },
  { name: 'Ayarlar', href: '/ayarlar', icon: Cog6ToothIcon },
];

export default function DashboardLayout() {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Çıkış yapılırken hata oluştu:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobil menü */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between p-4 bg-white shadow">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-600 hover:text-gray-900"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="text-lg font-semibold">AI MEV Bot</span>
        </div>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75">
            <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white">
              <div className="flex items-center justify-between p-4">
                <span className="text-lg font-semibold">AI MEV Bot</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-600 hover:text-gray-900"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="px-2 py-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center px-4 py-2 mt-2 text-gray-600 rounded-lg hover:bg-gray-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="w-6 h-6 mr-3" />
                    {item.name}
                  </Link>
                ))}
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 mt-2 text-gray-600 rounded-lg hover:bg-gray-100"
                >
                  <ArrowLeftOnRectangleIcon className="w-6 h-6 mr-3" />
                  Çıkış Yap
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>

      {/* Masaüstü sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-1 min-h-0 bg-white border-r border-gray-200">
          <div className="flex items-center flex-shrink-0 h-16 px-4">
            <span className="text-xl font-semibold">AI MEV Bot</span>
          </div>
          <nav className="flex-1 px-3 py-4 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100"
              >
                <item.icon className="w-6 h-6 mr-3" />
                {item.name}
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 mt-2 text-gray-600 rounded-lg hover:bg-gray-100"
            >
              <ArrowLeftOnRectangleIcon className="w-6 h-6 mr-3" />
              Çıkış Yap
            </button>
          </nav>
        </div>
      </div>

      {/* Ana içerik */}
      <div className="lg:pl-64">
        <main className="flex-1">
          <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 