import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './Footer';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
