import { Link } from 'react-router-dom';
import { ArrowRightIcon, ChartBarIcon, CurrencyDollarIcon, ShieldCheckIcon, BoltIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Yapay Zeka Destekli',
    description: 'En son teknoloji yapay zeka algoritmaları ile MEV fırsatlarını tespit eder ve değerlendirir.',
    icon: BoltIcon,
  },
  {
    name: 'Yüksek Güvenlik',
    description: 'İleri düzey güvenlik protokolleri ile varlıklarınız her zaman güvende.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Gerçek Zamanlı Analiz',
    description: 'Blockchain üzerindeki işlemleri anlık olarak analiz eder ve en karlı fırsatları yakalar.',
    icon: ChartBarIcon,
  },
  {
    name: 'Otomatik Kar Realizasyonu',
    description: 'Belirlenen kar hedeflerine ulaşıldığında otomatik olarak pozisyonları kapatır.',
    icon: CurrencyDollarIcon,
  },
];

const testimonials = [
  {
    content: 'AI MEV Bot ile trading deneyimim tamamen değişti. Artık 7/24 piyasaları takip etmeme gerek yok.',
    author: 'Mehmet Y.',
    role: 'Profesyonel Trader',
  },
  {
    content: 'Kullanımı çok kolay ve sonuçlar etkileyici. Kesinlikle tavsiye ediyorum.',
    author: 'Ayşe K.',
    role: 'Kripto Yatırımcısı',
  },
  {
    content: 'Teknik bilgim olmadan da kripto piyasalarında kazanç sağlayabiliyorum.',
    author: 'Ali R.',
    role: 'Yeni Başlayan Trader',
  },
];

export default function Home() {
  return (
    <div className="relative isolate">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Yapay Zeka Destekli MEV Bot ile Geleceğin Trading'i
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Gelişmiş yapay zeka algoritmalarımız ve MEV bot teknolojimiz ile kripto para piyasasındaki fırsatları otomatik olarak analiz eder ve değerlendirir. Makine öğrenimi destekli stratejiler ile kazançlarınızı optimize edin.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              to="/paketler"
              className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Paketleri İncele
            </Link>
            <Link to="/dashboard" className="group text-sm font-semibold leading-6 text-white">
              Dashboard'a Git <ArrowRightIcon className="inline-block h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="rounded-xl bg-white/5 p-8 ring-1 ring-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Canlı İstatistikler</h3>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-gray-400">Günlük İşlem Hacmi</p>
                  <p className="mt-2 text-3xl font-bold text-white">$2.4M</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Aktif Kullanıcılar</p>
                  <p className="mt-2 text-3xl font-bold text-white">1,240+</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Başarılı İşlemler</p>
                  <p className="mt-2 text-3xl font-bold text-white">98.9%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Toplam Kazanç</p>
                  <p className="mt-2 text-3xl font-bold text-white">$158K+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Daha Akıllı Trading</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            AI MEV Bot ile Trading'i Otomatikleştirin
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Yapay zeka destekli botumuz, blockchain üzerindeki her fırsatı değerlendirir ve sizin için en karlı işlemleri gerçekleştirir.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Kullanıcı Deneyimleri
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            AI MEV Bot kullanıcılarının başarı hikayeleri ve deneyimleri.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-sm leading-6 text-gray-300 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <blockquote className="text-gray-300">
                <p>{`"${testimonial.content}"`}</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-gray-500">{testimonial.role}</div>
                </div>
              </figcaption>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="relative isolate overflow-hidden bg-white/5 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trading'de Yeni Bir Çağ Başlıyor
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            AI MEV Bot ile tanışın ve trading deneyiminizi bir üst seviyeye taşıyın. Hemen başlayın ve fırsatları kaçırmayın.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/paketler"
              className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Hemen Başla
            </Link>
            <Link
              to="/kullanim-kosullari"
              className="text-sm font-semibold leading-6 text-white"
            >
              Daha Fazla Bilgi <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 