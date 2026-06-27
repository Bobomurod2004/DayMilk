import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { Leaf, Factory, Truck, ShieldCheck, ArrowRight, Handshake } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import blogDessert from "@/assets/blog-dessert.jpg";
import blogBreakfast from "@/assets/blog-breakfast.jpg";
import blogTips from "@/assets/blog-tips.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { PRODUCTS, CATEGORIES, sortByCategory } from "@/lib/products";

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

// Hero slideshow: one representative new product image per category, auto-rotating.
const HERO_SLIDES = ["Sut 3,2%", "Kefir 2,5%", "Qatiq 2,0%", "Ayron 2,5%", "Qaymoq 45%", "Smetana 20%", "Tvorog"]
  .map((name) => PRODUCTS.find((p) => p.name === name))
  .filter((p): p is (typeof PRODUCTS)[number] => Boolean(p));

function Hero() {
  const { t } = useLang();
  const container = useRef<HTMLDivElement>(null);
  const [slide, setSlide] = useState(0);

  // Auto-rotate the hero product images.
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 2800);
    return () => clearInterval(id);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero-text", { y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" })
      .from(".hero-image", { scale: 0.9, opacity: 0, duration: 1, ease: "back.out(1.5)" }, "-=0.4")
      .from(".milk-drop", { y: -100, opacity: 0, duration: 2, stagger: 0.3, ease: "bounce.out" }, "-=1");

    gsap.to(".hero-image", {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    
    gsap.to(".milk-drop", {
      y: "120vh",
      duration: 10,
      stagger: 2,
      repeat: -1,
      ease: "none",
    });
  }, { scope: container });

  return (
    <section className="relative mt-6 mx-4" ref={container}>
      <div className="mx-auto max-w-7xl rounded-3xl overflow-hidden relative border border-border bg-white shadow-[var(--shadow-card)]">
        {/* Sut tomchilari (Milk drops effect) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {[...Array(6)].map((_, i) => (
            <svg key={i} className="milk-drop absolute w-8 h-12 text-primary/10" style={{ left: `${10 + i * 15}%`, top: `-10%` }} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C12 2 5 10 5 15C5 18.866 8.13401 22 12 22C15.866 22 19 18.866 19 15C19 10 12 2 12 2Z" />
            </svg>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center px-8 lg:px-14 py-14 lg:py-20 relative z-10">
          <div>
            <h1 className="hero-text text-5xl lg:text-6xl font-extrabold text-primary-deep leading-[1.05]">
              {t("hero.title.1")}
              <br />
              {t("hero.title.2")}
            </h1>
            <p className="hero-text mt-6 text-muted-foreground text-lg max-w-md">{t("hero.desc")}</p>
            <div className="hero-text mt-6 flex items-center gap-3 border-l-4 border-accent-yellow pl-4">
              <span className="text-primary font-semibold">{t("brand.tagline")}</span>
            </div>

            <div className="hero-text mt-8 flex flex-wrap gap-3">
              <Link
                to="/mahsulotlar"
                className="bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-xl shadow-[var(--shadow-brand)] hover:brightness-110 transition inline-flex items-center gap-2"
              >
                {t("hero.cta.products")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/kompaniya"
                className="bg-accent-yellow text-accent-yellow-foreground font-semibold px-6 py-3.5 rounded-xl hover:brightness-105 transition inline-flex items-center gap-2"
              >
                {t("hero.cta.about")} <Handshake className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center items-center py-10">
            {/* Animated Glow backdrops (Blobs) */}
            <div className="absolute top-0 -left-4 w-64 md:w-80 h-64 md:h-80 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob -z-10"></div>
            <div className="absolute top-0 -right-4 w-64 md:w-80 h-64 md:h-80 bg-accent-yellow/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 -z-10"></div>
            
            {/* Main floating image — auto-rotating product slideshow */}
            <div className="relative z-10 hero-image w-full max-w-md h-[420px]">
              {HERO_SLIDES.map((p, i) => (
                <img
                  key={p.name}
                  src={p.img}
                  alt={p.name}
                  width={400}
                  height={400}
                  loading={i === 0 ? "eager" : "lazy"}
                  className={`absolute inset-0 m-auto w-full h-full object-contain max-h-[420px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)] mix-blend-multiply transition-opacity duration-700 ease-in-out ${i === slide ? "opacity-100" : "opacity-0"} ${p.imgClass || ""}`}
                />
              ))}
            </div>

            {/* Slide indicators */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
              {HERO_SLIDES.map((p, i) => (
                <button
                  key={p.name}
                  onClick={() => setSlide(i)}
                  aria-label={p.name}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === slide ? "w-6 bg-primary" : "w-2 bg-primary/30 hover:bg-primary/50"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const { t } = useLang();
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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
      }
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
      }
    });
  }, { scope: container });

  return (
    <section className="mx-4 mt-20 relative" ref={container}>
      <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-primary-deep mb-12">Fermadan Dasturxongacha</h2>
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
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent-yellow text-primary flex items-center justify-center font-extrabold text-sm shadow-sm">{i+1}</div>
              </div>
              <h3 className="font-display font-bold text-card-foreground text-xl relative z-10">{t(tk)}</h3>
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
  const [active, setActive] = useState("all");

  const filtered = sortByCategory(
    active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === active),
  );
  // Duplicate the list so the marquee track can loop seamlessly (animation runs to -50%).
  const track = [...filtered, ...filtered];

  return (
    <section className="mx-4 mt-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary-deep">
          {t("catalog.title")}
        </h2>
        <div className="mt-6 flex items-center justify-between gap-4 flex-wrap border-b border-border pb-3">
          <div className="flex items-center gap-2 flex-wrap">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition cursor-pointer ${active === c.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:bg-muted"
                  }`}
              >
                {t(c.key)}
              </button>
            ))}
          </div>
          <Link
            to="/mahsulotlar"
            className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
          >
            {t("catalog.all")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Auto-scrolling marquee: products glide right-to-left and loop forever; pauses on hover. */}
        <div className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_4%,#000_96%,transparent)]">
          <div className="flex w-max gap-4 animate-marquee py-1">
            {track.map((p, i) => (
              <div key={`${p.name}-${p.size}-${i}`} className="w-[280px] sm:w-[320px] shrink-0">
                <div className="group/card h-full rounded-[24px] overflow-hidden bg-[#f3f4f6] flex flex-col justify-between hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition mx-2">
                  <div className="h-[420px] flex items-end justify-center pt-[30px] px-[20px] pb-[10px]">
                    {/* Wrapper carries the per-product base offset so all product bases
                        land on one bottom line; the img keeps its own hover/scale transforms. */}
                    <div
                      className="flex items-end"
                      style={p.imgYOffset ? { transform: `translateY(${p.imgYOffset}px)` } : undefined}
                    >
                      <img
                        src={p.img}
                        alt={p.name}
                        loading="lazy"
                        style={{ height: p.imgH ? `${p.imgH}px` : undefined }}
                        className={`w-auto max-w-full object-contain object-bottom block group-hover/card:scale-[1.03] transition-transform origin-bottom duration-300 ${p.imgClass || ""}`}
                      />
                    </div>
                  </div>
                  <div className="mx-[12px] mb-[12px] bg-[#27a8df] rounded-[22px] px-[24px] py-[20px] text-white flex flex-col justify-center">
                    <h3 className="font-display font-bold text-xl leading-tight truncate">{p.name}</h3>
                    <p className="text-sm text-white/90 mt-1">{p.size}</p>
                  </div>
                </div>
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
    <div className="min-h-screen bg-background pt-4 pb-0">
      <SiteHeader />
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
