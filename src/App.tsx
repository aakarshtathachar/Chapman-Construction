import { useEffect, type ComponentType } from 'react';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';
import { PAGE_TITLES } from '@/data/siteContent';
import { RouterProvider, useRouter } from '@/lib/router';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import HomePage from '@/pages/HomePage';
import HomesPage from '@/pages/HomesPage';
import NotFoundPage from '@/pages/NotFoundPage';
import PoolsPage from '@/pages/PoolsPage';
import SepticPage from '@/pages/SepticPage';

const ROUTES: Record<string, ComponentType> = {
  '/': HomePage,
  '/pools': PoolsPage,
  '/septic': SepticPage,
  '/homes': HomesPage,
  '/about': AboutPage,
  '/contact': ContactPage,
};

function CurrentPage() {
  const { path } = useRouter();
  const Page = ROUTES[path] ?? NotFoundPage;

  useEffect(() => {
    document.title = PAGE_TITLES[path] ?? `Page Not Found | ${PAGE_TITLES['/']}`;
  }, [path]);

  return <Page key={path} />;
}

function App() {
  return (
    <RouterProvider>
      <div className="flex min-h-screen flex-col bg-white font-sans text-ink-700">
        <a
          href="/contact"
          className="sr-only z-[70] rounded-full bg-brand-500 px-5 py-3 font-bold text-ink-900 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to contact form
        </a>
        <SiteHeader />
        <main className="flex-1">
          <CurrentPage />
        </main>
        <SiteFooter />
      </div>
    </RouterProvider>
  );
}

export default App;
