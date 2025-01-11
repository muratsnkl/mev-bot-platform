import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { SparklesIcon } from '@heroicons/react/24/outline';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navbar */}
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <SparklesIcon className="h-8 w-8 text-blue-500" />
                <span className="ml-2 text-xl font-bold text-white">AI MEV Bot</span>
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Ana Sayfa
                  </Link>
                  <Link
                    to="/packages"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Paketler
                  </Link>
                  <Link
                    to="/dashboard"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Dashboard
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <Link
                  to="/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Giriş Yap
                </Link>
                <Link
                  to="/register"
                  className="ml-3 inline-flex items-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  Kayıt Ol
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Ana İçerik */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="border-t border-gray-700 pt-8">
            <div className="mt-8 flex justify-between items-center">
              <p className="text-base text-gray-400">
                &copy; 2024 AI MEV Bot. Tüm hakları saklıdır.
              </p>
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-gray-400 hover:text-gray-300">
                  Gizlilik Politikası
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-gray-300">
                  Kullanım Şartları
                </Link>
                <Link to="/contact" className="text-gray-400 hover:text-gray-300">
                  İletişim
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 