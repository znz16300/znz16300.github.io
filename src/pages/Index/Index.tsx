import { getMaterials } from '@/api/getMaterials';
import { MaterialItem } from '@/type/material';
import { User } from '@/type/auth';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import HeroSection from './HeroSection';
import InfoBlocksSection from './InfoBlocksSection';
import Navbar from '../../components/Navbar';
import ProductsCarouselSection from './ProductsCarouselSection';
import SchoolShowcaseSection from './SchoolShowcaseSection';
import StatsSection from './StatsSection';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<MaterialItem[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMaterials({ type: 'products', limit: 100 });
      if (result) setProducts(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      const authService = await import('../../api/authService');
      setIsAuthenticated(authService.default.isAuthenticated());
    };
    checkAuth();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      if (isAuthenticated) {
        const authService = await import('../../api/authService');
        const userProfile = await authService.default.getProfile();
        setUser(userProfile);
      }
    };
    fetchUser();
  }, [isAuthenticated]);

  if (loading) {
    return <p className="py-10 text-center text-gray-500">Завантаження...</p>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar isAuthenticated={isAuthenticated} user={user} />

      <HeroSection />
      <SchoolShowcaseSection />
      <InfoBlocksSection />
      <ProductsCarouselSection products={products} />
      <StatsSection />

      <Footer isAuthenticated={isAuthenticated} user={user} />
    </div>
  );
};

export default Index;
