import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SparklesIcon, BoltIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemleri
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <SparklesIcon className="h-12 w-12 text-blue-500" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
          AI MEV Bot'a Giriş Yapın
        </h2>
        <p className="mt-2 text-center text-sm text-gray-400">
          Yapay zeka destekli trading deneyiminize devam edin.{' '}
          <Link to="/register" className="font-medium text-blue-500 hover:text-blue-400">
            Henüz hesabınız yok mu?
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                E-posta Adresi
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-700 bg-gray-700 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm text-white"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Şifre
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-700 bg-gray-700 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm text-white"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Beni Hatırla
                </label>
              </div>

              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-blue-500 hover:text-blue-400">
                  Şifremi Unuttum
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Giriş Yap
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-gray-800 px-2 text-gray-400">AI Trading Avantajları</span>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <SparklesIcon className="h-5 w-5 text-blue-500" />
                <p className="ml-3 text-sm text-gray-300">
                  %99.8 AI işlem doğruluğu ile maksimum kazanç
                </p>
              </div>
              <div className="flex items-center">
                <BoltIcon className="h-5 w-5 text-blue-500" />
                <p className="ml-3 text-sm text-gray-300">
                  Milisaniyeler içinde AI destekli kararlar
                </p>
              </div>
              <div className="flex items-center">
                <ChartBarIcon className="h-5 w-5 text-blue-500" />
                <p className="ml-3 text-sm text-gray-300">
                  Derin öğrenme ile sürekli gelişen stratejiler
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 