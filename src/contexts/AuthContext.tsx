import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Sayfa yüklendiğinde localStorage'dan kullanıcı bilgisini al
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Giriş fonksiyonu
  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      // TODO: Backend API entegrasyonu yapılacak
      // Şimdilik mock bir kullanıcı oluşturuyoruz
      const mockUser = {
        id: '1',
        name: 'Test Kullanıcı',
        email: email,
      };
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Giriş hatası:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Kayıt fonksiyonu
  const register = async (name: string, email: string, password: string) => {
    try {
      setLoading(true);
      // TODO: Backend API entegrasyonu yapılacak
      // Şimdilik mock bir kullanıcı oluşturuyoruz
      const mockUser = {
        id: '1',
        name: name,
        email: email,
      };
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Kayıt hatası:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Çıkış fonksiyonu
  const logout = async () => {
    try {
      setLoading(true);
      // TODO: Backend API entegrasyonu yapılacak
      setUser(null);
      localStorage.removeItem('user');
    } catch (error) {
      console.error('Çıkış hatası:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 