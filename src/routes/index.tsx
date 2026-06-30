import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { Leaf, Factory, Truck, ShieldCheck, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import blogDessert from "@/assets/blog-dessert.jpg";
import blogBreakfast from "@/assets/blog-breakfast.jpg";
import blogTips from "@/assets/blog-tips.jpg";
import heroBackground from "@/assets/reference/hero-background-generated.png";
import heroProductsCutout from "@/assets/reference/hero-products-cutout.png";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { PRODUCTS, formatProductName, formatProductSize, getProductAnchor } from "@/lib/products";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DAYMILK — Tabiiy va sifatli sut mahsulotlari" },
      {
        name: "description",
        content:
          "Har kuni yangi, ishonchli va mazali sut mahsulotlari oilangiz va biznesingiz uchun.",
      },
      { property: "og:title", content: "DAYMILK — Tabiiy va sifatli sut mahsulotlari" },
      {
        property: "og:description",
        content: "Har kuni yangi, ishonchli va mazali sut mahsulotlari.",
      },
    ],
  }),
  component: Index,
});

const FEATURES = [
  { icon: Leaf, t: "feat.1.t", d: "feat.1.d" },
  { icon: Factory, t: "feat.2.t", d: "feat.2.d" },
  { icon: Truck, t: "feat.3.t", d: "feat.3.d" },
  { icon: ShieldCheck, t: "feat.4.t", d: "feat.4.d" },
];

const BLOG = [
  { img: blogDessert, t: "blog.1.t", d: "blog.1.d" },
  { img: blogBreakfast, t: "blog.2.t", d: "blog.2.d" },
  { img: blogTips, t: "blog.3.t", d: "blog.3.d" },
];

const CATALOG_FEATURED = [
  { name: "Qatiq 2,0%", size: "900 g" },
  { name: "Kefir 2,5%", size: "900 g" },
  { name: "Ayron 2,5%", size: "1 litr" },
  { name: "Qaymoq 45%", size: "500 g" },
  { name: "Smetana 20%", size: "500 g" },
  { name: "Tvorog", size: "200 g" },
  { name: "Bananli tvorojok 5%", size: "400 g" },
]
  .map((item) => PRODUCTS.find((p) => p.name === item.name && p.size === item.size))
  .filter((p): p is (typeof PRODUCTS)[number] => Boolean(p));

function Hero() {
  const { t } = useLang();
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(".hero-nav", {
          opacity: 0,
          y: -24,
          duration: 0.72,
        })
        .from(
          ".hero-copy > *",
          {
            opacity: 0,
            y: 26,
            duration: 0.82,
            stagger: 0.12,
          },
          "-=0.36",
        )
        .from(
          ".hero-product",
          {
            opacity: 0,
            x: 42,
            y: 18,
            scale: 0.95,
            duration: 0.95,
          },
          "-=0.58",
        )
        .from(
          ".hero-glow",
          {
            opacity: 0,
            scale: 0.82,
            duration: 1,
          },
          "-=0.86",
        );
    },
    { scope: container },
  );

  return (
    <section
      className="hero-shell relative w-[1280px] h-[720px] mx-auto overflow-hidden bg-[#f7efe3]"
      ref={container}
      style={{ position: 'relative' }}
    >
      {/* 1. Background */}
      <img 
        src={heroBackground} 
        alt="" 
        className="absolute left-0 top-0 w-[1280px] h-[720px] object-cover pointer-events-none z-0" 
      />

      {/* Header absolutely positioned on top */}
      <div className="absolute left-0 top-0 w-[1280px] h-[80px] z-50">
        <SiteHeader variant="overlay" />
      </div>

      {/* Heading Text */}
      <h1 
        className="absolute z-30 font-[700] text-[#0B3E9C]"
        style={{ left: "60px", top: "200px", fontFamily: "'Playfair Display', serif", fontSize: "72px", lineHeight: "1.1", margin: 0 }}
      >
        Daymilk – tabiiy,<br />
        sifatli va mazali<br />
        sut mahsulotlari
      </h1>

      {/* CTA Button */}
      <Link
        to="/mahsulotlar"
        className="absolute z-30 flex items-center justify-center gap-3 rounded-[999px] bg-gradient-to-b from-[#ffd154] to-[#FDBA21] px-8 py-4 text-[18px] font-semibold text-[#0B3E9C] shadow-[0_4px_14px_rgba(253,186,33,0.3)] transition-transform duration-300 hover:scale-[1.03]"
        style={{ left: "60px", top: "480px", width: "280px", height: "60px" }}
      >
        Mahsulotlarni ko'rish
        <ArrowRight className="h-5 w-5" />
      </Link>

      {/* CSS Podiums have been removed. Products will now rest directly on the scene. */}

      {/* Products Array Elements Layered Exactly as Requested */}

      {/* 6. Qatiq */}
      <img
        src={PRODUCTS.find(p => p.name === "Qatiq 2,0%" && p.size === "900 g")?.img}
        alt="Qatiq"
        className="absolute z-[35] transition-transform duration-300 hover:-translate-y-[5px] pointer-events-auto drop-shadow-xl"
        style={{ left: "650px", top: "330px", height: "185px", width: "auto" }}
      />

      {/* 7. Kefir */}
      <img
        src={PRODUCTS.find(p => p.name === "Kefir 1%" && p.size === "1 litr")?.img}
        alt="Kefir"
        className="absolute z-30 transition-transform duration-300 hover:-translate-y-[5px] pointer-events-auto"
        style={{ left: "735px", top: "105px", height: "410px", width: "auto" }}
      />

      {/* 8. Ayron */}
      <img
        src={PRODUCTS.find(p => p.name === "Ayron 2,5%" && p.size === "1 litr")?.img}
        alt="Ayron"
        className="absolute z-30 transition-transform duration-300 hover:-translate-y-[5px] pointer-events-auto"
        style={{ left: "835px", top: "105px", height: "410px", width: "auto" }}
      />

      {/* 9. Go'ja */}
      <img
        src={PRODUCTS.find(p => p.name === "Go'ja" && p.size === "1 litr")?.img}
        alt="Go'ja"
        className="absolute z-30 transition-transform duration-300 hover:-translate-y-[5px] pointer-events-auto"
        style={{ left: "935px", top: "105px", height: "410px", width: "auto" }}
      />

      {/* 10. Qaymoq */}
      <img
        src={PRODUCTS.find(p => p.name === "Qaymoq 45%" && p.size === "500 g")?.img}
        alt="Qaymoq"
        className="absolute z-[40] transition-transform duration-300 hover:-translate-y-[5px] pointer-events-auto drop-shadow-xl mix-blend-multiply"
        style={{ left: "760px", top: "420px", height: "95px", width: "auto" }}
      />

      {/* 11. Smetana */}
      <img
        src={PRODUCTS.find(p => p.name === "Smetana 20%" && p.size === "500 g")?.img}
        alt="Smetana"
        className="absolute z-[40] transition-transform duration-300 hover:-translate-y-[5px] pointer-events-auto drop-shadow-xl"
        style={{ left: "860px", top: "425px", height: "90px", width: "auto" }}
      />

      {/* 12. Tvorog */}
      <img
        src={PRODUCTS.find(p => p.name === "Tvorog")?.img}
        alt="Tvorog"
        className="absolute z-[35] transition-transform duration-300 hover:-translate-y-[5px] pointer-events-auto drop-shadow-xl"
        style={{ left: "965px", top: "360px", height: "230px", width: "auto" }}
      />
    </section>
  );
}

function Features() {
  const { t } = useLang();
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".feat-card");
      gsap.from(cards, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
      });

      gsap.to(".flow-line", {
        scaleX: 1,
        duration: 1.5,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          end: "bottom 60%",
          scrub: 1,
        },
      });
    },
    { scope: container },
  );

  return (
    <section className="mx-4 mt-20 relative" ref={container}>
      <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-primary-deep mb-12">
        Fermadan Dasturxongacha
      </h2>
      <div className="mx-auto max-w-7xl relative">
        {/* Animated flow line connecting the cards */}
        <div className="hidden lg:block absolute top-[44px] left-[10%] w-[80%] h-1 bg-primary/10 rounded-full overflow-hidden z-0">
          <div className="flow-line w-full h-full bg-primary origin-left scale-x-0 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {FEATURES.map(({ icon: Icon, t: tk, d }, i) => (
            <div
              key={tk}
              className="feat-card bg-card rounded-2xl p-6 flex flex-col items-center text-center shadow-[var(--shadow-card)] border border-border/50 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-2xl"></div>
              <div className="shrink-0 w-20 h-20 rounded-full bg-white border-4 border-primary-soft shadow-md flex items-center justify-center mb-5 relative z-10 group-hover:scale-110 transition-transform">
                <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent-yellow text-primary flex items-center justify-center font-extrabold text-sm shadow-sm">
                  {i + 1}
                </div>
              </div>
              <h3 className="font-display font-bold text-card-foreground text-xl relative z-10">
                {t(tk)}
              </h3>
              <p className="text-sm text-muted-foreground mt-3 relative z-10">{t(d)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Catalog() {
  const { t } = useLang();
  const track = [...CATALOG_FEATURED, ...CATALOG_FEATURED];

  return (
    <section className="mx-4 mt-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between flex-wrap gap-4 px-2 sm:px-4">
          <h2 className="text-3xl font-extrabold text-primary-deep lg:text-4xl">
            {t("nav.products")}
          </h2>
          <Link
            to="/mahsulotlar"
            className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
          >
            {t("catalog.all")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_4%,#000_96%,transparent)] py-4">
          <div
            className="flex w-max gap-5 animate-marquee"
            style={{ animationDuration: "35s" }}
          >
            {track.map((p, i) => (
              <div key={`${p.name}-${p.size}-${i}`} className="w-[220px] shrink-0 sm:w-[260px]">
                <Link
                  to="/mahsulotlar"
                  hash={() => getProductAnchor(p)}
                  aria-label={`${formatProductName(p.name)} ${formatProductSize(p.size)}`}
                  className="group/card mx-2 block overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-primary-deep/5 hover:border-primary/30"
                >
                  <div className="flex h-[280px] items-center justify-center px-4 py-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/[0.02] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      style={{
                        maxHeight: "220px",
                        height: "auto",
                      }}
                      className={`relative z-10 block w-auto max-w-full object-contain transition-transform duration-500 group-hover/card:scale-110 drop-shadow-sm group-hover/card:drop-shadow-md ${p.imgClass || ""}`}
                    />
                  </div>
                  <span className="sr-only">
                    {formatProductName(p.name)} {formatProductSize(p.size)}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}

function Blog() {
  const { t } = useLang();
  return (
    <section className="mx-4 mt-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-primary-deep">
            {t("blog.title")}
          </h2>
          <Link
            to="/retseptlar"
            className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
          >
            {t("blog.all")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {BLOG.map((b) => (
            <article
              key={b.t}
              className="bg-card rounded-2xl overflow-hidden border border-border/60 flex items-center gap-4 p-3 hover:shadow-[var(--shadow-card)] transition"
            >
              <img
                src={b.img}
                alt={t(b.t)}
                loading="lazy"
                width={160}
                height={160}
                className="w-32 h-32 rounded-xl object-cover shrink-0"
              />
              <div className="flex-1">
                <h3 className="font-display font-bold text-card-foreground">{t(b.t)}</h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{t(b.d)}</p>
                <Link
                  to="/retseptlar"
                  className="mt-2 inline-flex items-center gap-1 text-primary text-sm font-semibold"
                >
                  {t("blog.read")} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background pb-0">
      <main>
        <Hero />
        <Features />
        <Catalog />

        <Blog />
      </main>
      <SiteFooter />
    </div>
  );
}
