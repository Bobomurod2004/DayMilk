import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
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
import { CATEGORIES, PRODUCTS, sortByCategory, type Product } from "@/lib/products";

export const Route = createFileRoute("/mahsulotlar")({
  head: () => ({
    meta: [
      { title: "Mahsulotlar — DAYMILK" },
      {
        name: "description",
        content:
          "DAYMILK sut mahsulotlari katalogi: sut, kefir, qatiq, ayron, go'ja, qaymoq, tvorog va durda.",
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
  return (
    <Dialog>
      <div className="group/card grid h-full grid-rows-[1fr_auto] overflow-hidden rounded-2xl bg-[#f3f4f6] transition hover:shadow-[var(--shadow-card)]">
        <div className="relative flex h-[270px] items-end justify-center overflow-hidden px-4 pb-4 pt-10 sm:h-[290px] lg:h-[310px]">
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary-deep shadow-sm ring-1 ring-black/5">
            {p.size}
          </span>
          <img
            src={p.img}
            alt={p.name}
            loading="lazy"
            style={{
              height: `${getCardImageHeight(p)}px`,
              maxWidth: p.cardImgMaxW,
              transform: `translateY(${p.cardYOffset ?? 0}px) scale(${p.cardScale ?? 1})`,
            }}
            className={`block max-h-full w-auto max-w-[88%] origin-bottom object-contain object-bottom ${p.cardImgClass || ""}`}
          />
        </div>
        <DialogTrigger asChild>
          <button
            type="button"
            className="mx-2 mb-2 flex min-h-[76px] cursor-pointer items-center justify-between gap-2 rounded-[18px] bg-[#27a8df] px-4 py-3 text-left text-white transition hover:bg-[#1a8fc2]"
            aria-label={`${p.name} ${p.size}, batafsil`}
          >
            <span className="min-w-0">
              <span className="block min-h-10 font-display text-base font-bold leading-tight line-clamp-2 sm:text-lg">
                {p.name}
              </span>
              <span className="mt-1 block text-sm font-semibold text-white/90">{p.size}</span>
            </span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 transition group-hover/card:bg-white/30">
              <ChevronRight className="w-4 h-4" />
            </span>
          </button>
        </DialogTrigger>
      </div>

      {/* Full description — opens in a modal, no page navigation */}
      <DialogContent className="sm:max-w-lg">
        <div className="aspect-[16/10] -mx-6 -mt-6 mb-2 bg-white flex items-center justify-center overflow-hidden border-b border-border">
          <img
            src={p.img}
            alt={p.name}
            className={`h-full w-full object-contain p-4 ${p.imgClass || ""}`}
          />
        </div>
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-primary-deep">{p.name}</DialogTitle>
          <p className="text-sm font-medium text-[#1f9fd6]">{p.size}</p>
          <DialogDescription className="mt-2 text-sm leading-relaxed text-muted-foreground">
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

  // Order products by category sequence, then by size within each category, and show
  // them in one continuous grid. Selecting a category keeps only its products.
  const filtered = sortByCategory(
    active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === active),
  );

  return (
    <div className="min-h-screen bg-background pt-4">
      <SiteHeader />
      <main className="mx-4 mt-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-primary-deep">
            {t("catalog.title")}
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">{t("catalog.subtitle")}</p>
          <div className="mt-8 flex items-center gap-2 flex-wrap border-b border-border pb-3">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition cursor-pointer ${
                  active === c.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                {t(c.key)}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
