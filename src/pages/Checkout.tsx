import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';

const cryptoOptions = [
  { id: 'eth', name: 'Ethereum (ETH)', address: '0x1234...5678' },
  { id: 'usdt', name: 'USDT (ERC-20)', address: '0x9876...5432' },
  { id: 'bnb', name: 'BNB (BEP-20)', address: '0x4321...8765' },
];

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCrypto, setSelectedCrypto] = useState(cryptoOptions[0]);
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'success' | 'failed'>('pending');

  // Normalde bu bilgi location.state'ten gelecek
  const packageDetails = {
    name: 'Professional',
    price: '4,999',
    features: [
      'Gelişmiş MEV Bot Erişimi',
      'Sınırsız İşlem',
      'AI Destekli Analiz',
      '7/24 Öncelikli Destek',
    ],
  };

  const handlePaymentCheck = () => {
    // TODO: Backend API entegrasyonu yapılacak
    // Şimdilik başarılı ödeme simülasyonu
    setPaymentStatus('success');
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold tracking-tight text-white">Ödeme</h1>

          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2">
            {/* Paket Detayları */}
            <div className="bg-white/5 p-6 rounded-lg shadow-xl ring-1 ring-white/10">
              <h2 className="text-xl font-semibold text-white mb-4">Paket Detayları</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white">{packageDetails.name}</h3>
                  <p className="text-2xl font-bold text-blue-500">₺{packageDetails.price}</p>
                </div>
                <ul className="space-y-2">
                  {packageDetails.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <svg
                        className="h-5 w-5 text-blue-500 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Ödeme Seçenekleri */}
            <div className="bg-white/5 p-6 rounded-lg shadow-xl ring-1 ring-white/10">
              <h2 className="text-xl font-semibold text-white mb-4">Kripto Para ile Öde</h2>
              
              {paymentStatus === 'success' ? (
                <div className="rounded-md bg-green-500 bg-opacity-10 p-4">
                  <p className="text-sm text-green-400">
                    Ödemeniz başarıyla alındı! Dashboard'a yönlendiriliyorsunuz...
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-white">Kripto Para Seçin</label>
                    <select
                      value={selectedCrypto.id}
                      onChange={(e) => 
                        setSelectedCrypto(
                          cryptoOptions.find((option) => option.id === e.target.value) || cryptoOptions[0]
                        )
                      }
                      className="mt-1 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                    >
                      {cryptoOptions.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Ödeme Adresi</label>
                    <div className="flex items-center justify-center p-4 bg-white rounded-lg">
                      <QRCodeSVG value={selectedCrypto.address} size={200} />
                    </div>
                    <div className="flex items-center justify-between bg-white/5 p-3 rounded-md">
                      <code className="text-sm text-gray-300">{selectedCrypto.address}</code>
                      <button
                        onClick={() => navigator.clipboard.writeText(selectedCrypto.address)}
                        className="text-blue-500 hover:text-blue-400 text-sm font-medium"
                      >
                        Kopyala
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-gray-400">
                      * Lütfen tam olarak <span className="text-white font-medium">₺{packageDetails.price}</span> tutarında ödeme yapın.
                    </p>
                    <p className="text-sm text-gray-400">
                      * Ödeme 3-5 dakika içinde onaylanacaktır.
                    </p>
                  </div>

                  <button
                    onClick={handlePaymentCheck}
                    className="w-full rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  >
                    Ödemeyi Kontrol Et
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 