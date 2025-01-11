import { useState } from 'react';
import {
  ArrowTrendingUpIcon,
  BoltIcon,
  ChartBarIcon,
  CpuChipIcon,
  CurrencyDollarIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-900">
      <main>
        {/* AI Performans Özeti */}
        <div className="relative isolate overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-base font-semibold leading-8 text-blue-400">AI Performans Analizi</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Yapay Zeka Destekli Trading İstatistikleriniz
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                AI MEV botunuzun performansını ve kazançlarınızı gerçek zamanlı olarak takip edin.
                Yapay zeka modellerimiz sürekli öğrenerek stratejilerinizi optimize eder.
              </p>
            </div>

            {/* İstatistikler */}
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
                  <dt className="text-sm leading-6 text-gray-300">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight">
                    {stat.value}
                    {stat.unit && <span className="text-sm text-gray-300 ml-1">{stat.unit}</span>}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* AI Analiz Grafikleri */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {/* AI Performans Grafiği */}
            <div className="bg-white/5 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-4">
                AI Trading Performansı
                <span className="ml-2 inline-flex items-center rounded-md bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-400/20">
                  +15.8% bugün
                </span>
              </h3>
              <div className="h-80 bg-gray-800/50 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">AI Performans Grafiği</p>
              </div>
            </div>

            {/* AI Risk Analizi */}
            <div className="bg-white/5 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-4">
                AI Risk Analizi
                <span className="ml-2 inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/20">
                  Düşük Risk
                </span>
              </h3>
              <div className="h-80 bg-gray-800/50 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Risk Analiz Grafiği</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Özellikler */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-blue-500">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    {feature.name}
                    {feature.status && (
                      <span className={classNames(
                        feature.status === 'active' ? 'text-green-400' : 'text-yellow-400',
                        'ml-2 text-sm'
                      )}>
                        • {feature.status === 'active' ? 'Aktif' : 'Öğreniyor'}
                      </span>
                    )}
                  </h3>
                  <p className="mt-2 text-sm text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

const stats = [
  { id: 1, name: 'AI Doğruluk Oranı', value: '99.8', unit: '%' },
  { id: 2, name: 'Günlük İşlem Sayısı', value: '2,845' },
  { id: 3, name: 'Ortalama Kar', value: '18.5', unit: '%' },
  { id: 4, name: 'Toplam Kazanç', value: '₺158,420' },
  { id: 5, name: 'Başarılı İşlemler', value: '98.9', unit: '%' },
  { id: 6, name: 'AI Öğrenme Puanı', value: '94.5', unit: '%' },
];

const features = [
  {
    name: 'AI Arbitraj Motoru',
    description: 'Yapay zeka algoritmalarımız sürekli olarak en karlı fırsatları tespit ediyor.',
    icon: CpuChipIcon,
    status: 'active',
  },
  {
    name: 'Derin Öğrenme Modeli',
    description: 'Piyasa koşullarına göre kendini sürekli geliştiren yapay zeka modeli.',
    icon: SparklesIcon,
    status: 'learning',
  },
  {
    name: 'Akıllı Risk Yönetimi',
    description: 'AI destekli risk analizi ve otomatik portföy optimizasyonu.',
    icon: ChartBarIcon,
    status: 'active',
  },
  {
    name: 'Yüksek Frekanslı Trading',
    description: 'Milisaniyeler içinde işlem yapan yapay zeka destekli sistem.',
    icon: BoltIcon,
    status: 'active',
  },
  {
    name: 'AI Piyasa Analizi',
    description: 'Gerçek zamanlı piyasa analizi ve tahmin modelleri.',
    icon: ArrowTrendingUpIcon,
    status: 'learning',
  },
  {
    name: 'Kar Optimizasyonu',
    description: 'Yapay zeka ile optimize edilmiş karlılık stratejileri.',
    icon: CurrencyDollarIcon,
    status: 'active',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
} 