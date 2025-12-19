import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight text-green-800">
            DZ CUTS <span className="font-light text-stone-600">Lawn Care</span>
          </div>
          <Link 
            href="tel:5551234567" 
            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-full font-medium transition-colors text-sm"
          >
            Call or Text
          </Link>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[500px] flex items-center justify-center bg-stone-900 text-white">
        {/* Placeholder for Hero Image - Opacity added for text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" 
            aria-hidden="true"
        />
        
        <div className="relative z-20 text-center px-4 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Best Stripes in Southchase.
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-lg mx-auto">
            Professional mowing, edging, and cleanup. Reliable service you don't have to chase down.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="sms:5551234567" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-bold text-lg transition-transform hover:scale-105"
            >
              Text for a Quote
            </Link>
            <Link 
              href="#gallery" 
              className="bg-white text-stone-900 hover:bg-stone-100 px-8 py-3 rounded-md font-bold text-lg"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-stone-800">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Service 1 */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 shadow-sm">
              <div className="text-green-600 text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-2">Weekly Mowing</h3>
              <p className="text-stone-600">Consistent, reliable cuts on a schedule. We show up when we say we will.</p>
            </div>
            {/* Service 2 */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 shadow-sm">
              <div className="text-green-600 text-4xl mb-4">✂️</div>
              <h3 className="text-xl font-bold mb-2">Edging & Trimming</h3>
              <p className="text-stone-600">Crisp edges along driveways and sidewalks make the difference.</p>
            </div>
            {/* Service 3 */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 shadow-sm">
              <div className="text-green-600 text-4xl mb-4">🍂</div>
              <h3 className="text-xl font-bold mb-2">Cleanup & Mulch</h3>
              <p className="text-stone-600">Seasonal cleanup, leaf removal, and fresh mulch installation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- GALLERY (Placeholder Grid) --- */}
      <section id="gallery" className="py-20 px-4 bg-stone-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-stone-800">Recent Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
             {/* Replace these divs with <Image /> components once you have real photos */}
             <div className="aspect-square bg-stone-300 rounded-lg flex items-center justify-center text-stone-500 font-medium">Photo 1</div>
             <div className="aspect-square bg-stone-300 rounded-lg flex items-center justify-center text-stone-500 font-medium">Photo 2</div>
             <div className="aspect-square bg-stone-300 rounded-lg flex items-center justify-center text-stone-500 font-medium">Photo 3</div>
             <div className="aspect-square bg-stone-300 rounded-lg flex items-center justify-center text-stone-500 font-medium">Photo 4</div>
             <div className="aspect-square bg-stone-300 rounded-lg flex items-center justify-center text-stone-500 font-medium">Photo 5</div>
             <div className="aspect-square bg-stone-300 rounded-lg flex items-center justify-center text-stone-500 font-medium">Photo 6</div>
          </div>
          <div className="text-center mt-12">
            <a href="#" className="text-green-700 font-bold hover:underline">See more on Google Reviews &rarr;</a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-stone-900 text-stone-400 py-12 px-4 text-center">
        <p className="font-bold text-white text-xl mb-4">DZ CUTS LAWN CARE</p>
        <p className="mb-8">Serving Southchase & Orlando</p>
        <Link 
          href="sms:5551234567" 
          className="inline-block bg-white text-stone-900 px-6 py-2 rounded-full font-bold hover:bg-stone-200 transition-colors"
        >
          Text Us Now
        </Link>
        <div className="mt-12 text-sm text-stone-600">
          &copy; {new Date().getFullYear()} DzCuts420 LLC. All rights reserved.
        </div>
      </footer>
    </div>
  );
}