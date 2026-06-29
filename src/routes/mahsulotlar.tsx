import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronRight, LayoutGrid } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLang } from "@/lib/i18n";
import {
  CATEGORIES,
  PRODUCTS,
  formatProductName,
  formatProductSize,
  getProductAnchor,
  sortByCategory,
  type Product,
} from "@/lib/products";

export const Route = createFileRoute("/mahsulotlar")({
  head: () => ({
    meta: [
      { title: "Mahsulotlar — DAYMILK" },
      {
        name: "description",
        content:
          "DAYMILK sut mahsulotlari katalogi: sut, kefir, qatiq, ayron, go'ja, qaymoq, tvorog va suzma.",
      },
      { property: "og:title", content: "Mahsulotlar — DAYMILK" },
      { property: "og:description", content: "DAYMILK sut mahsulotlari katalogi." },
    ],
  }),
  component: ProductsPage,
});

function getCardImageHeight(product: Product) {
  return product.cardImgH ?? Math.round((product.imgH ?? 270) * 0.78);
}

function ProductCard({ p }: { p: Product }) {
  const { t } = useLang();
  const productAnchor = getProductAnchor(p);
  const productName = formatProductName(p.name);
  const productSize = formatProductSize(p.size);
  return (
    <Dialog>
      <div
        id={productAnchor}
        className="group/card scroll-mt-28 grid h-full grid-rows-[1fr_auto] overflow-hidden rounded-2xl bg-white transition hover:shadow-[var(--shadow-card)] hover:border border-[#27a8df]/20"
      >
        <div className="relative flex h-[205px] items-end justify-center overflow-hidden px-3 pb-2 pt-2 sm:h-[218px] lg:h-[228px]">
          <img
            src={p.img}
            alt={productName}
            loading="lazy"
            style={{
              height: `${getCardImageHeight(p)}px`,
              maxWidth: p.cardImgMaxW,
              transform: `translateY(${p.cardYOffset ?? 0}px) scale(${p.cardScale ?? 1})`,
            }}
            className={`block max-h-full w-auto max-w-[88%] shrink-0 origin-bottom object-contain object-bottom ${p.cardImgClass || ""}`}
          />
        </div>
        <DialogTrigger asChild>
          <button
            type="button"
            className="mx-2 mb-2 flex h-[58px] cursor-pointer items-center justify-between gap-2 rounded-[16px] bg-[#F8FBFF] border border-[#27a8df] px-3 py-2 text-left text-[#27a8df] transition hover:bg-[#27a8df] hover:text-white"
            aria-label={`${productName} ${productSize}, batafsil`}
          >
            <span className="flex min-w-0 items-center gap-1.5">
              <span className="line-clamp-2 font-display text-[13px] font-bold leading-tight sm:text-sm">
                {productName}
              </span>
              <span className="shrink-0 whitespace-nowrap rounded-full bg-[#27a8df] text-white px-2 py-1 text-[10px] font-bold">
                {productSize}
              </span>
            </span>
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F8FBFF] border border-[#27a8df] group-hover:bg-[#27a8df] group-hover:border-[#27a8df]">
              <ChevronRight className="h-4 w-4 text-[#27a8df] group-hover:text-white" strokeWidth={2.5} />
            </span>
          </button>
        </DialogTrigger>
      </div>

      {/* Full description — opens in a modal, no page navigation */}
      <DialogContent className="sm:max-w-lg">
        <div className="aspect-[16/10] -mx-6 -mt-6 mb-2 bg-white flex items-center justify-center overflow-hidden border-b border-[#e0e7ff]">
          <img
            src={p.img}
            alt={productName}
            className={`h-full w-full object-contain p-4 ${p.imgClass || ""}`}
          />
        </div>
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-[#27a8df]">{productName}</DialogTitle>
          <p className="text-sm font-medium text-[#27a8df]">{productSize}</p>
          <DialogDescription className="mt-2 text-sm leading-relaxed text-[#6b7280]">
            {t(p.desc)}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

function ProductsPage() {
  const { t } = useLang();
  const [active, setActive] = useState("all");
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    if (!hash) {
      return;
    }

    const elementId = decodeURIComponent(hash);
    const scrollToCard = window.setTimeout(() => {
      document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);

    return () => window.clearTimeout(scrollToCard);
  }, [hash]);

  // Order products by category sequence, then by size within each category, and show
  // them in one continuous grid. Selecting a category keeps only its products.
  const filtered = sortByCategory(
    active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === active),
  );

  return (
    <div className="min-h-screen bg-[#F8FBFF] pt-1">
      <SiteHeader hideOnScroll />
      <main className="mx-4 mt-5">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-center text-4xl font-extrabold text-[#27a8df] lg:text-5xl">
            {t("catalog.title")}
          </h1>
          <div className="mx-auto mt-3 flex max-w-5xl flex-nowrap items-center justify-start gap-2 overflow-x-auto border-b border-[#e0e7ff] pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:justify-center">
            {CATEGORIES.map((c) => {
              const isActive = active === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  aria-pressed={isActive}
                  className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "border-[#27a8df] bg-[#27a8df] text-white shadow-md shadow-[#27a8df]/30"
                      : "border-[#27a8df]/30 bg-white text-[#27a8df] hover:border-[#27a8df] hover:bg-[#f0f7ff]"
                  }`}
                >
                  {c.id === "all" && <LayoutGrid className="h-4 w-4 shrink-0" strokeWidth={2.2} />}
                  {t(c.key)}
                </button>
              );
            })}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filtered.map((p) => (
              <ProductCard key={`${p.name}-${p.size}`} p={p} />
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
