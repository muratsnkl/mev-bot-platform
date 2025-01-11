import { CheckIcon } from '@heroicons/react/24/outline';

const tiers = [
  {
    name: 'Başlangıç',
    id: 'tier-basic',
    href: '#',
    priceMonthly: '₺2,999',
    description: 'MEV bot dünyasına giriş yapmak için ideal paket.',
    features: [
      'Temel MEV Bot Erişimi',
      'Günlük 100 İşlem Limiti',
      'Temel Analiz Araçları',
      'E-posta Desteği',
      'Basit Raporlama',
    ],
    featured: false,
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    href: '#',
    priceMonthly: '₺4,999',
    description: 'Profesyonel traderlar için gelişmiş özellikler.',
    features: [
      'Gelişmiş MEV Bot Erişimi',
      'Sınırsız İşlem',
      'AI Destekli Analiz',
      '7/24 Öncelikli Destek',
      'Detaylı Raporlama',
      'Özel Stratejiler',
      'Portföy Optimizasyonu',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '₺9,999',
    description: 'Kurumsal müşteriler için özel çözümler.',
    features: [
      'Full MEV Suite Erişimi',
      'Özel AI Modelleri',
      'Dedicated Sunucular',
      'VIP Destek',
      'API Erişimi',
      'Özel Entegrasyonlar',
      'Güvenlik Garantisi',
      'SLA Garantisi',
    ],
    featured: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Packages() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Fiyatlandırma</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Size Uygun Paketi Seçin
          </p>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-300">
            Her ihtiyaca uygun, ölçeklenebilir çözümler. İstediğiniz zaman paketinizi yükseltebilirsiniz.
          </p>
        </div>
      </div>
      <div className="flow-root bg-gray-900 pb-24 sm:pb-32">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-3">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className={classNames(
                    tier.featured ? 'bg-blue-500 ring-blue-500' : 'bg-white/5 ring-white/10',
                    'rounded-3xl p-8 ring-1 xl:p-10'
                  )}
                >
                  <div className="flex items-center justify-between gap-x-4">
                    <h3
                      className={classNames(
                        tier.featured ? 'text-white' : 'text-white',
                        'text-lg font-semibold leading-8'
                      )}
                    >
                      {tier.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span
                      className={classNames(
                        tier.featured ? 'text-white' : 'text-white',
                        'text-4xl font-bold tracking-tight'
                      )}
                    >
                      {tier.priceMonthly}
                    </span>
                    <span className={classNames(tier.featured ? 'text-gray-100' : 'text-gray-300', 'text-sm font-semibold leading-6')}>
                      /ay
                    </span>
                  </p>
                  <a
                    href={tier.href}
                    className={classNames(
                      tier.featured
                        ? 'bg-white text-blue-600 hover:bg-gray-100 focus-visible:outline-white'
                        : 'bg-blue-500 text-white hover:bg-blue-400 focus-visible:outline-blue-500',
                      'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                    )}
                  >
                    Paketi Seç
                  </a>
                  <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon
                          className={classNames(
                            tier.featured ? 'text-white' : 'text-gray-300',
                            'h-6 w-5 flex-none'
                          )}
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 