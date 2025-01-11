import { useState } from 'react';

export default function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    darkMode: true,
    language: 'tr',
    timezone: 'Europe/Istanbul',
  });

  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Backend API entegrasyonu yapılacak
    setSuccess('Ayarlarınız başarıyla güncellendi');
    setTimeout(() => setSuccess(''), 3000);
  };

  return (
    <div className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-white">Ayarlar</h1>
        <div className="mt-4">
          <div className="space-y-6 bg-white/5 p-6 rounded-lg shadow-xl ring-1 ring-white/10">
            {success && (
              <div className="rounded-md bg-green-500 bg-opacity-10 p-4">
                <p className="text-sm text-green-400">{success}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-lg font-medium text-white">Bildirimler</h2>
                <div className="flex items-center justify-between">
                  <div>
                    <label htmlFor="emailNotifications" className="text-sm text-gray-300">
                      E-posta Bildirimleri
                    </label>
                    <p className="text-xs text-gray-500">İşlem ve güncelleme bildirimleri</p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setSettings({ ...settings, emailNotifications: !settings.emailNotifications })
                    }
                    className={`${
                      settings.emailNotifications ? 'bg-blue-500' : 'bg-gray-700'
                    } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none`}
                  >
                    <span
                      className={`${
                        settings.emailNotifications ? 'translate-x-5' : 'translate-x-0'
                      } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <label htmlFor="smsNotifications" className="text-sm text-gray-300">
                      SMS Bildirimleri
                    </label>
                    <p className="text-xs text-gray-500">Önemli güvenlik bildirimleri</p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setSettings({ ...settings, smsNotifications: !settings.smsNotifications })
                    }
                    className={`${
                      settings.smsNotifications ? 'bg-blue-500' : 'bg-gray-700'
                    } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none`}
                  >
                    <span
                      className={`${
                        settings.smsNotifications ? 'translate-x-5' : 'translate-x-0'
                      } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                    />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-medium text-white">Görünüm</h2>
                <div className="flex items-center justify-between">
                  <div>
                    <label htmlFor="darkMode" className="text-sm text-gray-300">
                      Karanlık Mod
                    </label>
                    <p className="text-xs text-gray-500">Koyu tema kullan</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSettings({ ...settings, darkMode: !settings.darkMode })}
                    className={`${
                      settings.darkMode ? 'bg-blue-500' : 'bg-gray-700'
                    } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none`}
                  >
                    <span
                      className={`${
                        settings.darkMode ? 'translate-x-5' : 'translate-x-0'
                      } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                    />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-medium text-white">Bölgesel</h2>
                <div>
                  <label htmlFor="language" className="block text-sm font-medium text-gray-300">
                    Dil
                  </label>
                  <select
                    id="language"
                    name="language"
                    value={settings.language}
                    onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                    className="mt-1 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                  >
                    <option value="tr">Türkçe</option>
                    <option value="en">English</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timezone" className="block text-sm font-medium text-gray-300">
                    Saat Dilimi
                  </label>
                  <select
                    id="timezone"
                    name="timezone"
                    value={settings.timezone}
                    onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
                    className="mt-1 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                  >
                    <option value="Europe/Istanbul">İstanbul (UTC+3)</option>
                    <option value="Europe/London">Londra (UTC+0)</option>
                    <option value="America/New_York">New York (UTC-5)</option>
                  </select>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  Ayarları Kaydet
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 