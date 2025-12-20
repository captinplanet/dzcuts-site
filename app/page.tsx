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
          <a 
            href="tel:3211469031" 
            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-full font-medium transition-colors text-sm"
          >
            Call or Text
          </a>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[500px] flex items-center justify-center bg-stone-900 text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" 
            aria-hidden="true"
        />
        
        <div className="relative z-20 text-center px-4 max-w-2xl">
          {/* UPDATED HEADLINE HERE */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Best Lawncare in Orlando.
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-4 max-w-lg mx-auto">
            Professional mowing, edging, and cleanup. Reliable service you don't have to chase down.
          </p>
          <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-lg mx-auto">
            Contact us to see how we can help you
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="sms:3211469031" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-bold text-lg transition-transform hover:scale-105 w-52 text-center"
              >
                Call or Text
              </a>
              <a 
                href="mailto:dzcuts407@gmail.com" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-bold text-lg transition-transform hover:scale-105 w-52 text-center"
              >
                Email
              </a>
            </div>
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
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 shadow-sm">
              <div className="text-green-600 text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-2">Weekly Mowing</h3>
              <p className="text-stone-600">Consistent, reliable cuts on a schedule. We show up when we say we will.</p>
            </div>
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 shadow-sm">
              <div className="text-green-600 text-4xl mb-4">✂️</div>
              <h3 className="text-xl font-bold mb-2">Edging & Trimming</h3>
              <p className="text-stone-600">Crisp edges along driveways and sidewalks make the difference.</p>
            </div>
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 shadow-sm">
              <div className="text-green-600 text-4xl mb-4">🍂</div>
              <h3 className="text-xl font-bold mb-2">Cleanup & Mulch</h3>
              <p className="text-stone-600">Seasonal cleanup, leaf removal, and fresh mulch installation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-stone-800">What Our Neighbors Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-stone-50 p-6 rounded-2xl shadow-sm border border-stone-100">
              <div className="flex text-yellow-400 mb-4 text-xl">★★★★★</div>
              <p className="text-stone-600 mb-6 italic">"David is the only guy who actually shows up when he says he will. My lawn has never looked better. Highly recommend for anyone in Southchase."</p>
              <div className="font-bold text-stone-900">- Sarah J.</div>
            </div>
            <div className="bg-stone-50 p-6 rounded-2xl shadow-sm border border-stone-100">
              <div className="flex text-yellow-400 mb-4 text-xl">★★★★★</div>
              <p className="text-stone-600 mb-6 italic">"Great prices and he doesn't leave a mess behind. David even trimmed the hedges near the porch without me asking."</p>
              <div className="font-bold text-stone-900">- Mike T.</div>
            </div>
            <div className="bg-stone-50 p-6 rounded-2xl shadow-sm border border-stone-100">
              <div className="flex text-yellow-400 mb-4 text-xl">★★★★★</div>
              <p className="text-stone-600 mb-6 italic">"Finally found a reliable lawn guy. Setup was easy and I can just text him whenever I need an extra cut."</p>
              <div className="font-bold text-stone-900">- Amanda R.</div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="#" className="text-green-700 font-bold hover:underline">Read more on Google Reviews &rarr;</a>
          </div>
        </div>
      </section>

{/* --- GALLERY --- */}
      <section id="gallery" className="py-20 px-4 bg-stone-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-stone-800">Recent Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
             
             {/* Image 1 */}
             <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm">
               <Image 
                 src="/work1.png" 
                 alt="Perfect lawn stripes" 
                 fill 
                 className="object-cover hover:scale-110 transition-transform duration-500"
               />
             </div>

             {/* Image 2 */}
             <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm">
               <Image 
                 src="/work2.png" 
                 alt="Crisp concrete edging" 
                 fill 
                 className="object-cover hover:scale-110 transition-transform duration-500"
               />
             </div>

             {/* Image 3 */}
             <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm">
               <Image 
                 src="/work3.png" 
                 alt="Garden bed mulch" 
                 fill 
                 className="object-cover hover:scale-110 transition-transform duration-500"
               />
             </div>

             {/* Image 4 */}
             <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm">
               <Image 
                 src="/work4.png" 
                 alt="Backyard mowing" 
                 fill 
                 className="object-cover hover:scale-110 transition-transform duration-500"
               />
             </div>

             {/* Image 5 */}
             <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm">
               <Image 
                 src="/work5.png" 
                 alt="Professional equipment" 
                 fill 
                 className="object-cover hover:scale-110 transition-transform duration-500"
               />
             </div>

             {/* Image 6 */}
             <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm">
               <Image 
                 src="/work6.png" 
                 alt="Clean driveway view" 
                 fill 
                 className="object-cover hover:scale-110 transition-transform duration-500"
               />
             </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-stone-900 text-stone-400 py-12 px-4 text-center">
        <p className="font-bold text-white text-xl mb-4">DZ CUTS LAWN CARE</p>
        <p className="mb-8">Serving Southchase & Orlando</p>
        <a 
          href="sms:3211469031" 
          className="inline-block bg-white text-stone-900 px-6 py-2 rounded-full font-bold hover:bg-stone-200 transition-colors"
        >
          Text Us Now
        </a>
        <div className="mt-4">
          <a href="mailto:dzcuts407@gmail.com" className="hover:text-white transition-colors">dzcuts407@gmail.com</a>
        </div>
        <div className="mt-12 text-sm text-stone-600">
          &copy; {new Date().getFullYear()} DzCuts LLC. All rights reserved.
        </div>
      </footer>
    </div>
  );
}