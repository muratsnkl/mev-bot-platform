import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Geçerli bir e-posta adresi giriniz');
      return;
    }

    try {
      setError('');
      // TODO: Backend API entegrasyonu yapılacak
      setSuccess(true);
    } catch (err) {
      setError('Şifre sıfırlama bağlantısı gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
          Şifrenizi mi Unuttunuz?
        </h2>
        <p className="mt-2 text-center text-sm text-gray-400">
          E-posta adresinizi girin, size şifre sıfırlama bağlantısı gönderelim.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white/5 py-8 px-4 shadow-xl ring-1 ring-white/10 sm:rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 rounded-md bg-red-500 bg-opacity-10 p-4">
              <p className="text-sm text-red-400">{error}</p>
            </div>
          )}
          {success ? (
            <div className="rounded-md bg-green-500 bg-opacity-10 p-4">
              <p className="text-sm text-green-400">
                Şifre sıfırlama bağlantısı e-posta adresinize gönderildi. Lütfen e-postanızı kontrol edin.
              </p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  E-posta Adresi
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  Şifre Sıfırlama Bağlantısı Gönder
                </button>
              </div>
            </form>
          )}
          <div className="mt-6 text-center">
            <Link to="/giris" className="text-sm font-medium text-blue-500 hover:text-blue-400">
              Giriş sayfasına dön
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 