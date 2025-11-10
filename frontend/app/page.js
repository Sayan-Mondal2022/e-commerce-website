import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 font-sans dark:bg-zinc-900">
      <main className="w-full max-w-6xl px-6 py-20 text-center sm:px-12">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
            alt="ShopEase Logo"
            width={100}
            height={100}
            className="mb-6"
          />
          <h1 className="text-4xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl">
            Discover the Future of Online Shopping
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Welcome to <span className="font-semibold text-indigo-600">ShopEase</span> — 
            your one-stop destination for fashion, electronics, beauty, and lifestyle products.  
            Experience a seamless shopping journey powered by speed, personalization, and trust.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/shop"
              className="rounded-full bg-indigo-600 px-8 py-3 text-white font-medium hover:bg-indigo-700 transition-all"
            >
              Start Shopping
            </a>
            <a
              href="/about"
              className="rounded-full border border-gray-400 px-8 py-3 text-gray-700 hover:bg-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-800 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Features Section */}
        <section className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/3468/3468377.png"
              alt="Fast Delivery"
              width={60}
              height={60}
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              Fast & Secure Delivery
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Get your orders delivered safely and quickly with our trusted partners.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
              alt="Best Deals"
              width={60}
              height={60}
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              Best Deals & Offers
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Enjoy exclusive discounts, festival sales, and loyalty rewards.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
              alt="24/7 Support"
              width={60}
              height={60}
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              24/7 Customer Support
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              We're here to help you anytime — from product queries to returns.
            </p>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {/* Product 1 */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition">
              <Image
                src="https://images.unsplash.com/photo-1585386959984-a4155223f9d6?w=600"
                alt="Wireless Headphones"
                width={400}
                height={300}
                className="rounded-lg"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Wireless Headphones
              </h3>
              <p className="text-gray-600 dark:text-gray-400">$79.99</p>
              <button className="mt-3 w-full rounded-md bg-indigo-600 text-white py-2 font-medium hover:bg-indigo-700 transition">
                Add to Cart
              </button>
            </div>

            {/* Product 2 */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition">
              <Image
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600"
                alt="Smartwatch"
                width={400}
                height={300}
                className="rounded-lg"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Smartwatch Series X
              </h3>
              <p className="text-gray-600 dark:text-gray-400">$129.99</p>
              <button className="mt-3 w-full rounded-md bg-indigo-600 text-white py-2 font-medium hover:bg-indigo-700 transition">
                Add to Cart
              </button>
            </div>

            {/* Product 3 */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition">
              <Image
                src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=600"
                alt="Sneakers"
                width={400}
                height={300}
                className="rounded-lg"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Men's Sneakers
              </h3>
              <p className="text-gray-600 dark:text-gray-400">$59.99</p>
              <button className="mt-3 w-full rounded-md bg-indigo-600 text-white py-2 font-medium hover:bg-indigo-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 border-t border-gray-300 dark:border-gray-700 pt-8 text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} ShopEase. All rights reserved.</p>
          <p className="text-sm mt-2">Built with ❤️ using Next.js & Tailwind CSS</p>
        </footer>
      </main>
    </div>
  );
}
