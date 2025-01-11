import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import {
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

// İstatistik kartları için veri
const stats = [
  { name: 'Toplam İşlem', value: '₺124,592', icon: CurrencyDollarIcon, change: '+12.3%', changeType: 'increase' },
  { name: 'Aktif İşlemler', value: '23', icon: ArrowTrendingUpIcon, change: '+5.4%', changeType: 'increase' },
  { name: 'Ortalama İşlem Süresi', value: '2.4s', icon: ClockIcon, change: '-3.2%', changeType: 'decrease' },
  { name: 'Başarı Oranı', value: '%94.5', icon: ChartBarIcon, change: '+4.1%', changeType: 'increase' },
];

// Son işlemler için örnek veri
const recentTransactions = [
  {
    id: 1,
    type: 'Alım',
    token: 'ETH/USDT',
    amount: '2.5 ETH',
    price: '₺62,450',
    status: 'Başarılı',
    date: '2 dakika önce',
  },
  {
    id: 2,
    type: 'Satım',
    token: 'BTC/USDT',
    amount: '0.15 BTC',
    price: '₺89,230',
    status: 'Başarılı',
    date: '5 dakika önce',
  },
  {
    id: 3,
    type: 'Alım',
    token: 'BNB/USDT',
    amount: '10 BNB',
    price: '₺12,450',
    status: 'İşlemde',
    date: '8 dakika önce',
  },
  {
    id: 4,
    type: 'Satım',
    token: 'ETH/USDT',
    amount: '1.8 ETH',
    price: '₺45,680',
    status: 'Başarılı',
    date: '15 dakika önce',
  },
];

export default function Dashboard() {
  const { user } = useAuth();
  const [selectedTimeRange, setSelectedTimeRange] = useState('today');

  return (
    <div className="py-6">
      {/* Başlık */}
      <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-white">Hoş Geldiniz, {user?.name}</h1>
        <p className="mt-2 text-sm text-gray-400">
          İşlemlerinizi ve performansınızı buradan takip edebilirsiniz.
        </p>
      </div>

      {/* Zaman aralığı seçici */}
      <div className="mt-6 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            >
              <option value="today">Bugün</option>
              <option value="week">Bu Hafta</option>
              <option value="month">Bu Ay</option>
              <option value="year">Bu Yıl</option>
            </select>
          </div>
        </div>
      </div>

      {/* İstatistik kartları */}
      <div className="mt-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.name}
              className="relative overflow-hidden rounded-lg bg-gray-800 px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
            >
              <dt>
                <div className="absolute rounded-md bg-blue-500 p-3">
                  <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-400">{item.name}</p>
              </dt>
              <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p
                  className={`ml-2 flex items-baseline text-sm font-semibold ${
                    item.changeType === 'increase' ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {item.change}
                </p>
              </dd>
            </div>
          ))}
        </div>
      </div>

      {/* Son işlemler tablosu */}
      <div className="mt-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-medium leading-6 text-white">Son İşlemler</h2>
        <div className="mt-4 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
              <table className="min-w-full divide-y divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">Tür</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">Token</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">Miktar</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">Fiyat</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">Durum</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">Tarih</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700 bg-gray-800">
                  {recentTransactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        <span
                          className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                            transaction.type === 'Alım'
                              ? 'bg-green-900 text-green-300'
                              : 'bg-red-900 text-red-300'
                          }`}
                        >
                          {transaction.type}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{transaction.token}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{transaction.amount}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{transaction.price}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        <span
                          className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                            transaction.status === 'Başarılı'
                              ? 'bg-green-900 text-green-300'
                              : 'bg-yellow-900 text-yellow-300'
                          }`}
                        >
                          {transaction.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{transaction.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 