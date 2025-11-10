import './globals.css';
import { Inter } from 'next/font/google';

// Import the real components and providers
import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer'; // You can create this later
import { AuthProvider } from '@/context/AuthContext';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My E-Commerce Store',
  description: 'A full-stack e-commerce site built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <AuthProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow container mx-auto px-4 py-8">
                {children}
              </main>
              {/* <Footer /> */}
            </div>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}