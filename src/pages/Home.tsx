import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="relative isolate pt-14">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Yapay Zeka Destekli MEV Bot ile Geleceğin Trading'i
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Gelişmiş yapay zeka algoritmalarımız ve MEV bot teknolojimiz ile kripto para piyasasındaki fırsatları 
            otomatik olarak analiz eder ve değerlendirir. Makine öğrenimi destekli stratejiler ile kazançlarınızı optimize edin.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/packages"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Paketleri İncele
              <ArrowRightIcon className="ml-2 -mr-1 h-4 w-4 inline-block" />
            </Link>
            <Link to="#features" className="text-sm font-semibold leading-6 text-white">
              Daha Fazla Bilgi <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Özellikler Bölümü */}
      <div id="features" className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Neden AI MEV Bot?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Yapay Zeka ile Güçlendirilmiş Trading Çözümleri
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            En son yapay zeka teknolojileri ve blockchain analizi ile geliştirilen botumuz, 
            piyasadaki her fırsatı değerlendirmenizi sağlar. Derin öğrenme modelleri ile sürekli kendini geliştiren sistemimiz,
            trading stratejilerinizi optimize eder.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* İstatistikler Bölümü */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Yapay Zeka ile Kanıtlanmış Başarı
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              AI MEV Bot ile binlerce kullanıcı maksimum verimlilik elde ediyor
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    name: 'AI Destekli Arbitraj',
    description: 'Yapay zeka algoritmalarımız, farklı borsalar arasındaki fiyat farklarını gerçek zamanlı analiz eder ve en karlı işlemleri otomatik olarak gerçekleştirir.',
    icon: function ChartIcon(props: any) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      );
    },
  },
  {
    name: 'Akıllı Risk Yönetimi',
    description: 'Makine öğrenimi modelleri, risk faktörlerini sürekli analiz eder ve portföyünüzü optimize eder. Gelişmiş güvenlik protokolleri ile varlıklarınız her zaman güvende.',
    icon: function ShieldIcon(props: any) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      );
    },
  },
  {
    name: 'Öğrenen Stratejiler',
    description: 'Derin öğrenme modelleri, piyasa koşullarına sürekli adapte olur ve stratejileri otomatik olarak optimize eder. 7/24 teknik destek ekibimiz size yardımcı olmaya hazır.',
    icon: function SupportIcon(props: any) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
      );
    },
  },
];

const stats = [
  { id: 1, name: 'AI İşlem Doğruluğu', value: '%99.8' },
  { id: 2, name: 'Toplam İşlem Hacmi', value: '$750M+' },
  { id: 3, name: 'Başarılı İşlem', value: '2.5M+' },
  { id: 4, name: 'Ortalama Kar Oranı', value: '%18.5' },
]; 