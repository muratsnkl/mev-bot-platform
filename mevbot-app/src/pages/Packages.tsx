import { CheckIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const tiers = [
  {
    name: 'Başlangıç',
    id: 'tier-basic',
    href: '/register?plan=basic',
    price: { monthly: '₺2,499' },
    description: 'Yapay zeka destekli MEV bot dünyasına giriş yapmak için ideal paket.',
    features: [
      'Temel AI arbitraj stratejileri',
      'Günlük işlem limiti: 15',
      'Standart destek',
      'Temel AI analiz araçları',
      'Tek borsa desteği',
      'Basit risk yönetimi',
      'Temel piyasa analizi',
    ],
    featured: false,
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    href: '/register?plan=pro',
    price: { monthly: '₺5,999' },
    description: 'Profesyonel trader\'lar için gelişmiş AI özellikleri.',
    features: [
      'Gelişmiş AI arbitraj stratejileri',
      'Sınırsız günlük işlem',
      'Öncelikli destek',
      'Gelişmiş AI analiz araçları',
      '3 borsa desteği',
      'AI destekli arbitraj sinyalleri',
      'Akıllı portföy yönetimi',
      'Derin öğrenme modelleri',
      'Gerçek zamanlı piyasa analizi',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '/register?plan=enterprise',
    price: { monthly: '₺12,999' },
    description: 'Kurumsal müşteriler için özel AI çözümleri.',
    features: [
      'Özel AI stratejileri',
      'Sınırsız işlem hacmi',
      '7/24 özel destek',
      'Tüm AI analiz araçları',
      'Sınırsız borsa desteği',
      'Özel API entegrasyonu',
      'AI destekli rapor ve analizler',
      'Dedicated sunucu',
      'Özel risk yönetimi',
      'Çoklu portföy optimizasyonu',
    ],
    featured: false,
  },
  {
    name: 'Ultimate AI',
    id: 'tier-ultimate',
    href: '/register?plan=ultimate',
    price: { monthly: '₺24,999' },
    description: 'En gelişmiş AI destekli MEV bot deneyimi.',
    features: [
      'Özel yapay zeka modelleri',
      'Sınırsız işlem ve hacim',
      'VIP destek hattı',
      'Özel strateji geliştirme',
      'Tüm borsalar + DEX desteği',
      'Özel API ve entegrasyonlar',
      'AI destekli gerçek zamanlı analiz',
      'Yüksek frekanslı trading',
      'Özel eğitim ve danışmanlık',
      'Gelişmiş makine öğrenimi',
      'Duygu analizi ve sosyal sinyaller',
      'Özel piyasa manipülasyon tespiti',
    ],
    featured: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Packages() {
  return (
    <div className="relative isolate pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-base font-semibold leading-7 text-blue-400">AI Destekli Paketler</h1>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Size Uygun Yapay Zeka Çözümünü Seçin
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          Her ihtiyaca uygun yapay zeka destekli MEV bot paketlerimiz ile kripto para piyasasında fark yaratın.
          İster yeni başlayan ister profesyonel olun, size uygun bir AI çözümümüz var.
        </p>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured ? 'bg-white/5 ring-2 ring-blue-500' : 'ring-1 ring-white/10',
                tierIdx === 0 ? 'lg:rounded-l-2xl' : '',
                tierIdx === tiers.length - 1 ? 'lg:rounded-r-2xl' : '',
                'rounded-2xl p-8 xl:p-10'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h2 className="text-lg font-semibold leading-8 text-white">{tier.name}</h2>
                {tier.featured && (
                  <p className="rounded-full bg-blue-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                    En Popüler
                  </p>
                )}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">{tier.price.monthly}</span>
                <span className="text-sm font-semibold leading-6 text-gray-300">/ay</span>
              </p>
              <Link
                to={tier.href}
                className={classNames(
                  tier.featured
                    ? 'bg-blue-500 text-white shadow-sm hover:bg-blue-400 focus-visible:outline-blue-500'
                    : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                Hemen Başla
              </Link>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 