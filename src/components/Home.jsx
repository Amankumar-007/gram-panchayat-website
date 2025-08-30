// src/components/Home.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fade = { hidden:{opacity:0, y:16}, show:{opacity:1, y:0, transition:{duration:.5}} };

export default function Home(){
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-10">
        <motion.img
          initial={{opacity:0, scale:.96}}
          animate={{opacity:1, scale:1, transition:{duration:.6}}}
          src="/assets/front.png"
          alt="Village development works"
          className="rounded-2xl border border-slate-200 shadow-sm"
        />
        <motion.div variants={fade} initial="hidden" animate="show" className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Smart Village Initiative</p>
          <h1 className="mt-2 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Bright, accessible, and citizen‑first Gram Panchayat portal
          </h1>
          <p className="mt-3 text-slate-700">
            Content reflects key initiatives: CCTV network, road upgrades, girls’ school classrooms, a modern bus stand, and cleanliness drives. (From PDF details) 
          </p>
          <div className="mt-5 flex gap-3">
            <Link to="/news" className="rounded-full bg-blue-600 px-5 py-2.5 text-white shadow hover:bg-blue-700">Latest Updates</Link>
            <Link to="/gallery" className="rounded-full px-5 py-2.5 ring-1 ring-slate-300 hover:bg-slate-50">Explore Gallery</Link>
          </div>
        </motion.div>
      </section>

      {/* Alternating info sections from PDF copy */}
      {/* 1. CCTV network (Left image, Right text) */}
      <section className="bg-blue-50/60 py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-2">
          <img src="/assets/cctv.png" alt="CCTV coverage" className="rounded-xl border border-blue-200"/>
          <div>
            <h2 className="text-2xl font-bold text-blue-900">35 CCTV cameras deployed</h2>
            <p className="mt-2 text-blue-900/80">
              Cameras installed at schools, health center, service centers, library, veterinary clinic, and key junctions help deter crime and aid investigations. (PDF: “लोंगवाला में पंचायत ने लगवाए 35 सीसीटीवी कैमरे…”) 
            </p>
            <ul className="mt-3 list-disc pl-5 text-blue-900/80">
              <li>Police appreciated the initiative; multiple incidents solved using footage.</li>
              <li>Coverage to be expanded to more locations.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. Road upgrade (Right image, Left text) */}
      <section className="py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold text-slate-900">Road upgrade worth ₹1.25 Cr</h2>
            <p className="mt-2 text-slate-700">
              The Longwala–Chak LGW road was upgraded with new surfacing, reducing distance to Hanumangarh district HQ by ~12 km. (PDF: “करीब 1 करोड़ 25 लाख रुपये… 12 किलोमीटर दूरी कम…”) 
            </p>
          </div>
          <img src="/assets/road.png" alt="Road upgrades" className="order-1 rounded-xl border border-slate-200 shadow-sm md:order-2"/>
        </div>
      </section>

      {/* 3. Girls’ school classrooms (Left image, Right text) */}
      <section className="bg-emerald-50/60 py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-2">
          <img src="/assets/girl.png" alt="Girls school new rooms" className="rounded-xl border border-emerald-200"/>
          <div>
            <h2 className="text-2xl font-bold text-emerald-900">Two new rooms for Girls’ School</h2>
            <p className="mt-2 text-emerald-900/80">
              Foundation laid for two classrooms at the Government Girls Upper Primary School, improving capacity and learning conditions. (PDF: “राजकीय कन्या उच्च प्राथमिक विद्यालय… दो कमरों…”)
            </p>
          </div>
        </div>
      </section>

      {/* 4. Modern bus stand (Right image, Left text) */}
      <section className="py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold text-slate-900">Clean, modern village bus stand</h2>
            <p className="mt-2 text-slate-700">
              The bus stand, designed to city standards, provides a welcoming public space and better commuter comfort. (PDF: “ये कोई शहर का नहीं बल्कि ग्राम पंचायत लोंगवाला का बस स्टैंड है…”) 
            </p>
          </div>
          <img src="/assets/bus.png" alt="Bus stand" className="order-1 rounded-xl border border-slate-200 shadow-sm md:order-2"/>
        </div>
      </section>

      {/* 5. Cleanliness & bird-saving drive (Left image, Right text) */}
      <section className="bg-amber-50/60 py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-2">
          <img src="/assets/birds.png" alt="Cleanliness drive" className="rounded-xl border border-amber-200"/>
          <div>
            <h2 className="text-2xl font-bold text-amber-900">Swachhta & Bird‑Saving Campaign</h2>
            <p className="mt-2 text-amber-900/80">
              Regular cleanliness drives and a “पंछी बचाओ महाअभियान” encourage homes to keep grain/water pots and tie nests on trees—building civic habits for future generations. (PDF: campaign poster text) 
            </p>
          </div>
        </div>
      </section>

      {/* PDF snapshot callout */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid items-center gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:grid-cols-2">
          <img src="/assets/development.png" alt="PDF snapshot" className="rounded-xl border border-slate-200"/>
          <div>
            <h3 className="text-xl font-semibold">View PDF Highlights</h3>
            <p className="mt-2 text-slate-700">Visual summary exported from the reference PDF for transparency and archiving.</p>
            <a className="mt-4 inline-block rounded-full bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700" href="/assets/pdf-snap.jpg" target="_blank" rel="noreferrer">Open snapshot</a>
          </div>
        </div>
      </section>
    </div>
  );
}
