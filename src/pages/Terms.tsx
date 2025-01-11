import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white">
            Kullanım Koşulları
          </h1>
          <div className="mt-6 space-y-6 text-base text-gray-300">
            <p>
              Bu kullanım koşulları, AI MEV Bot platformunun kullanımını düzenlemektedir. Platformu
              kullanarak bu koşulları kabul etmiş sayılırsınız.
            </p>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">1. Hizmet Kullanımı</h2>
              <p>
                AI MEV Bot platformu, kripto para piyasalarında MEV bot hizmetleri sunmaktadır.
                Platform üzerinden sunulan hizmetleri kullanırken tüm riskleri kabul etmiş
                sayılırsınız.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">2. Hesap Güvenliği</h2>
              <p>
                Hesabınızın güvenliğinden siz sorumlusunuz. Güçlü bir şifre kullanmanız ve hesap
                bilgilerinizi kimseyle paylaşmamanız önemlidir.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">3. Gizlilik</h2>
              <p>
                Kişisel verileriniz, gizlilik politikamıza uygun olarak işlenmektedir. Platform
                kullanımınız sırasında toplanan veriler, hizmet kalitesini artırmak için
                kullanılmaktadır.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">4. Ödeme ve İadeler</h2>
              <p>
                Satın alınan paketler için ödeme işlemleri güvenli ödeme sistemleri üzerinden
                gerçekleştirilir. İade politikamız, yasal düzenlemelere uygun olarak
                belirlenmektedir.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">5. Sorumluluk Reddi</h2>
              <p>
                Platform üzerinden yapılan işlemlerde oluşabilecek kayıplardan kullanıcı sorumludur.
                Kripto para piyasaları yüksek risk içermektedir.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">6. Değişiklikler</h2>
              <p>
                Bu kullanım koşulları, önceden haber verilmeksizin değiştirilebilir. Değişiklikler,
                web sitesinde yayınlandığı andan itibaren geçerli olur.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-8">
              <p className="text-sm text-gray-400">Son güncelleme: 1 Mart 2024</p>
              <Link
                to="/kayit"
                className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Kayıt Ol
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 