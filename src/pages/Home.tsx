import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
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
    </div>
  );
} 