import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dzcutslawncare.com'),
  title: "Dz Cuts Lawn Care | Best Lawncare in Orlando & Southchase",
  description: "Professional lawn mowing, edging, and cleanup services in Orlando and Southchase. Reliable, affordable, and high-quality lawn care.",
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  const serviceAreas = [
    "Orlando",
    "Southchase",
    "SoDo District",
    "Conway",
    "Lake Nona",
    "Belle Isle",
    "Hunter’s Creek",
    "International Drive",
    "Millenia",
  ];

  // We map the string array to objects for better Schema compliance
  const areaServedSchema = serviceAreas.map(area => ({
    "@type": "Place",
    "name": area
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Dz Cuts Lawn Care",
    "url": "https://www.dzcutslawncare.com",
    "image": "https://www.dzcutslawncare.com/work1.png",
    "description": "Professional lawn care, mowing, edging, and landscaping services in Orlando.",
    "areaServed": areaServedSchema, // Updated to use the object array
    "telephone": "321-469-0131",
    "email": "dzcuts407@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Orlando",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
      <section
        className="relative h-[500px] flex items-center justify-center bg-stone-900 text-white overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero-bg.avif')",
        }}
      >
        <div className="relative z-20 text-center px-4 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-md tracking-tight mb-4">
            Best Lawncare in Orlando.
          </h1>
          {/* FIXED: Added &apos; to don't */}
          <p className="text-lg md:text-xl font-medium text-white drop-shadow-sm mb-4 max-w-lg mx-auto">
            Professional mowing, edging, and cleanup. Reliable service you don&apos;t have to chase down.
          </p>
          <a 
            href="tel:3211469031" 
            className="inline-block mb-8 bg-white/90 text-green-800 font-extrabold rounded-full px-6 py-2 shadow-lg hover:scale-105 transition-transform text-3xl md:text-4xl"
          >
            <span className="block md:inline md:mr-2 mb-1 md:mb-0">Call or Text:</span>
            <span className="block md:inline whitespace-nowrap">321-469-0131</span>
          </a>
          <div className="flex gap-4 justify-center">
            <a 
              href="mailto:dzcuts407@gmail.com" 
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold text-lg transition-all hover:bg-white hover:text-green-800 hover:scale-105"
            >
              Email
            </a>
            <a 
              href="#gallery" 
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold text-lg transition-all hover:bg-white hover:text-green-800 hover:scale-105"
            >
              See Our Work
            </a>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section className="pt-20 pb-8 px-4 bg-stone-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-stone-800">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-white border border-stone-100 shadow-md">
              <div className="text-green-600 text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-2">Weekly Mowing</h3>
              <p className="text-stone-600">Consistent, reliable cuts on a schedule. We show up when we say we will.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-stone-100 shadow-md">
              <div className="text-green-600 text-4xl mb-4">✂️</div>
              <h3 className="text-xl font-bold mb-2">Edging & Trimming</h3>
              <p className="text-stone-600">Crisp edges along driveways and sidewalks make the difference.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-stone-100 shadow-md">
              <div className="text-green-600 text-4xl mb-4">🍂</div>
              <h3 className="text-xl font-bold mb-2">Cleanup & Mulch</h3>
              <p className="text-stone-600">Seasonal cleanup, leaf removal, and fresh mulch installation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT THE OWNER --- */}
      <section className="pt-0 pb-12 px-4 bg-stone-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-stone-700 mb-3">Local. Reliable. Family Owned.</h2>
          <p className="text-base text-[#333333] max-w-2xl mx-auto">
            DZ Cuts is family-owned and operated right here in the community. David has been a part of this area his whole life and has spent over a decade coaching local kids in baseball and soccer. When you hire us, you aren’t just getting a lawn service—you’re hiring a neighbor who cares about the neighborhood.
          </p>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-stone-800">What Our Neighbors Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-2xl shadow-sm border border-green-100">
              <div className="flex text-yellow-400 mb-4 text-xl">★★★★★</div>
              <p className="text-stone-600 mb-6 italic">&quot;David is the only guy who actually shows up when he says he will. My lawn has never looked better. Highly recommend for anyone in South Orlando.&quot;</p>
              <div className="font-bold text-stone-900">- Russ K.</div>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl shadow-sm border border-green-100">
              <div className="flex text-yellow-400 mb-4 text-xl">★★★★★</div>
              {/* FIXED: Added &apos; to doesn't */}
              <p className="text-stone-600 mb-6 italic">&quot;Great prices and he doesn&apos;t leave a mess behind. David even trimmed the hedges near the porch without me asking.&quot;</p>
              <div className="font-bold text-stone-900">- Mike T.</div>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl shadow-sm border border-green-100">
              <div className="flex text-yellow-400 mb-4 text-xl">★★★★★</div>
              <p className="text-stone-600 mb-6 italic">&quot;Finally found a reliable lawn guy. Setup was easy and I can just text him whenever I need an extra cut.&quot;</p>
              <div className="font-bold text-stone-900">- Amanda R.</div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="#" className="text-green-700 font-bold hover:underline">Read more on Google Reviews &rarr;</a>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-stone-800">Common Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-green-800 mb-3">How do I pay?</h3>
              <p className="text-stone-600 leading-relaxed">We accept Cash, Zelle, and Venmo after the job is done.</p>
            </div>
            <div>
              <h3 className="font-bold text-green-800 mb-3">Do I have to be home?</h3>
              <p className="text-stone-600 leading-relaxed">No. Just leave the gate unlocked and we handle the rest.</p>
            </div>
            <div>
              <h3 className="font-bold text-green-800 mb-3">Is there a contract?</h3>
              <p className="text-stone-600 leading-relaxed">No contracts. We earn your business with every single cut.</p>
            </div>
            <div>
              <h3 className="font-bold text-green-800 mb-3">What about rain?</h3>
              <p className="text-stone-600 leading-relaxed">We track the weather and automatically reschedule for dry days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- GALLERY --- */}
      <section id="gallery" className="py-20 px-4 bg-stone-100 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-stone-800">Recent Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
             {/* Image 1 */}
             <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm">
               <Image 
                 src="/work1.png" 
                 alt="Perfect lawn stripes" 
                 fill 
                 sizes="(max-width: 768px) 50vw, 33vw"
                 className="object-cover hover:scale-110 transition-transform duration-500"
               />
             </div>
             {/* Image 2 */}
             <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm">
               <Image 
                 src="/work2.png" 
                 alt="Crisp concrete edging" 
                 fill 
                 sizes="(max-width: 768px) 50vw, 33vw"
                 className="object-cover hover:scale-110 transition-transform duration-500"
               />
             </div>
             {/* Image 3 */}
             <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm">
               <Image 
                 src="/work3.png" 
                 alt="Garden bed mulch" 
                 fill 
                 sizes="(max-width: 768px) 50vw, 33vw"
                 className="object-cover hover:scale-110 transition-transform duration-500"
               />
             </div>
             {/* Image 4 */}
             <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm">
               <Image 
                 src="/work4.png" 
                 alt="Backyard mowing" 
                 fill 
                 sizes="(max-width: 768px) 50vw, 33vw"
                 className="object-cover hover:scale-110 transition-transform duration-500"
               />
             </div>
             {/* Image 5 */}
             <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm">
               <Image 
                 src="/work5.png" 
                 alt="Professional equipment" 
                 fill 
                 sizes="(max-width: 768px) 50vw, 33vw"
                 className="object-cover hover:scale-110 transition-transform duration-500"
               />
             </div>
             {/* Image 6 */}
             <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm">
               <Image 
                 src="/work6.png" 
                 alt="Clean driveway view" 
                 fill 
                 sizes="(max-width: 768px) 50vw, 33vw"
                 className="object-cover hover:scale-110 transition-transform duration-500"
               />
             </div>
          </div>
        </div>
      </section>

      {/* --- SERVICE AREA --- */}
      <section className="py-16 px-4 bg-white border-t border-stone-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-stone-800 mb-6">Serving Our Community</h2>
          <p className="text-lg text-stone-600 leading-relaxed mb-8">
            We proudly serve homeowners and businesses across the following areas:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span key={area} className="bg-green-100 text-green-800 font-medium px-4 py-2 rounded-full text-sm">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-stone-900 text-stone-400 py-12 px-4 text-center">
        <p className="font-bold text-white text-xl mb-4">DZ CUTS LAWN CARE</p>
        <p className="text-stone-500 text-sm mb-8">Mon - Fri: 8am - 6pm | Accepting Zelle, Venmo & Cash</p>
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