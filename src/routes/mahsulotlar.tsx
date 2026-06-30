import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronRight, LayoutGrid, Beef, Droplet, Wheat, Flame, Snowflake, Calendar, Phone, Mail, Send, Handshake } from "lucide-react";
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
  return product.cardImgH ?? Math.round((product.imgH ?? 240) * 0.75);
}

const PRODUCT_CARD_IMAGE_LIFT = 28;

function ProductCard({ p }: { p: Product }) {
  const { t } = useLang();
  const productAnchor = getProductAnchor(p);
  const productName = formatProductName(p.name);
  const productSize = formatProductSize(p.size);

  // Get image height based on product size
  const imageHeight = getCardImageHeight(p);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          id={productAnchor}
          className="group/card scroll-mt-28 grid h-full grid-rows-[1fr_auto] overflow-hidden rounded-xl bg-white transition hover:shadow-md hover:border-2 border-primary-deep/30 cursor-pointer"
        >
          <div className="relative flex h-[240px] items-end justify-center overflow-hidden px-2 pb-3 pt-2">
            <img
              src={p.img}
              alt={productName}
              loading="lazy"
              style={{
                height: `${imageHeight}px`,
                maxWidth: p.cardImgMaxW || "88%",
              }}
              className={`block w-auto shrink-0 object-contain object-bottom ${p.cardImgClass || ""}`}
            />
          </div>
          <div className="mx-1.5 mb-1.5 flex h-[52px] items-center justify-between gap-2 rounded-lg bg-[#F8FBFF] border border-primary-deep px-2.5 py-1.5 text-left text-primary-deep transition group-hover/card:bg-primary-deep group-hover/card:text-white">
            <span className="flex min-w-0 items-center gap-1.5">
              <span className="line-clamp-2 font-display text-[13px] font-bold leading-tight sm:text-sm">
                {productName}
              </span>
              <span className="shrink-0 whitespace-nowrap rounded-full bg-primary-deep text-white px-2 py-0.5 text-[10px] font-bold sm:text-[11px] group-hover/card:bg-white group-hover/card:text-primary-deep">
                {productSize}
              </span>
            </span>
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F8FBFF] border border-primary-deep group-hover/card:bg-white group-hover/card:border-white">
              <ChevronRight className="h-3.5 w-3.5 text-primary-deep" strokeWidth={2.5} />
            </span>
          </div>
        </div>
      </DialogTrigger>

      {/* Full description — opens in a modal, no page navigation */}
      <DialogContent className="sm:max-w-5xl max-h-[90vh] overflow-y-auto">
        <div className={`grid gap-6 ${p.cat === 'milk' ? 'md:grid-cols-[1.2fr_1fr]' : 'md:grid-cols-2'}`}>
          {/* Left side - Product Image */}
          <div className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] ${p.cat === 'milk' ? 'p-2' : 'p-4'}`}>
            <img
              src={p.img}
              alt={productName}
              className={`object-contain ${p.imgClass || ""}`}
              style={{
                width: p.cat === 'milk' ? '100%' : 'auto',
                height: p.cat === 'milk' ? 'auto' : 'auto',
                maxWidth: '100%',
                maxHeight: p.cat === 'milk' ? '700px' : 'none'
              }}
            />
          </div>

          {/* Right side - Product Details */}
          <div className="space-y-4">
            <DialogHeader>
              <DialogTitle className="font-display text-2xl text-primary-deep">
                {productName}
              </DialogTitle>
              <div className="flex items-center gap-2">
                <span className="inline-block rounded-full bg-primary-deep px-3 py-1 text-xs font-bold text-white">
                  {productSize}
                </span>
              </div>
            </DialogHeader>

            {/* Description */}
            <DialogDescription className="text-sm leading-relaxed text-[#4b5563]">
              {t(p.desc)}
            </DialogDescription>

            {/* Nutritional Information */}
            {p.nutritional && (
              <div className="space-y-3 rounded-lg border border-primary-deep/30 bg-[#f0f9ff] p-4">
                <h3 className="text-sm font-bold text-primary-deep">
                  {t("product.nutritional")}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {/* Protein */}
                  <div className="flex items-center gap-2 rounded-lg bg-white p-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ef4444]/10">
                      <Beef className="h-4 w-4 text-[#ef4444]" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#6b7280]">{t("product.protein")}</p>
                      <p className="text-sm font-bold text-[#1f2937]">{p.nutritional.protein}</p>
                    </div>
                  </div>

                  {/* Fats */}
                  <div className="flex items-center gap-2 rounded-lg bg-white p-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f59e0b]/10">
                      <Droplet className="h-4 w-4 text-[#f59e0b]" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#6b7280]">{t("product.fats")}</p>
                      <p className="text-sm font-bold text-[#1f2937]">{p.nutritional.fats}</p>
                    </div>
                  </div>

                  {/* Carbs */}
                  <div className="flex items-center gap-2 rounded-lg bg-white p-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8b5cf6]/10">
                      <Wheat className="h-4 w-4 text-[#8b5cf6]" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#6b7280]">{t("product.carbs")}</p>
                      <p className="text-sm font-bold text-[#1f2937]">{p.nutritional.carbs}</p>
                    </div>
                  </div>

                  {/* Calories */}
                  <div className="flex items-center gap-2 rounded-lg bg-white p-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#10b981]/10">
                      <Flame className="h-4 w-4 text-[#10b981]" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#6b7280]">{t("product.calories")}</p>
                      <p className="text-sm font-bold text-[#1f2937]">{p.nutritional.calories}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Storage Conditions */}
            {p.storage && (
              <div className="flex items-start gap-3 rounded-lg bg-[#eff6ff] p-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3b82f6]">
                  <Snowflake className="h-4 w-4 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-[#1e40af]">{t("product.storage")}</p>
                  <p className="mt-0.5 text-sm text-[#4b5563]">{t(p.storage)}</p>
                </div>
              </div>
            )}

            {/* Shelf Life */}
            {p.shelfLife && (
              <div className="flex items-start gap-3 rounded-lg bg-[#f0fdf4] p-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#10b981]">
                  <Calendar className="h-4 w-4 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-[#065f46]">{t("product.shelf")}</p>
                  <p className="mt-0.5 text-sm text-[#4b5563]">{t(p.shelfLife)}</p>
                </div>
              </div>
            )}
          </div>
        </div>
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
        <div className="mx-auto max-w-6xl">
          <h1 className="text-center text-3xl font-extrabold text-primary-deep lg:text-4xl">
            {t("catalog.title")}
          </h1>
          <div className="mx-auto mt-2 flex max-w-4xl flex-nowrap items-center justify-start gap-2 overflow-x-auto border-b border-primary-deep/20 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:justify-center">
            {CATEGORIES.map((c) => {
              const isActive = active === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  aria-pressed={isActive}
                  className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "border-primary-deep bg-primary-deep text-white shadow-md shadow-primary-deep/30"
                      : "border-primary-deep/30 bg-white text-primary-deep hover:border-primary-deep hover:bg-[#f0f7ff]"
                  }`}
                >
                  {c.id === "all" && <LayoutGrid className="h-4 w-4 shrink-0" strokeWidth={2.2} />}
                  {t(c.key)}
                </button>
              );
            })}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filtered.map((p) => (
              <ProductCard key={`${p.name}-${p.size}`} p={p} />
            ))}
          </div>

          {/* Partnership Section */}
          <div className="mb-6 mt-10">
            <div className="rounded-xl border border-primary-deep/15 bg-white p-4 shadow-sm md:p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-2 text-primary-deep">
                  <Handshake className="h-5 w-5 shrink-0" strokeWidth={2} />
                  <h2 className="font-display text-lg font-bold md:text-xl">
                    {t("partnership.title")}
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 md:max-w-2xl md:flex-1">
                  <a
                    href="tel:+998901234567"
                    className="group flex items-center gap-3 rounded-lg border border-primary-deep/15 bg-[#f8fbff] px-3 py-2.5 transition hover:border-primary-deep/40 hover:bg-white"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-deep/10 transition group-hover:bg-primary-deep/15">
                      <Phone className="h-4 w-4 text-primary-deep" strokeWidth={2} />
                    </div>
                    <div className="min-w-0 text-left">
                      <p className="text-xs font-semibold text-[#6b7280]">{t("partnership.phone")}</p>
                      <p className="truncate text-sm font-bold text-[#1f2937]">+998 90 123 45 67</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@daymilk.uz"
                    className="group flex items-center gap-3 rounded-lg border border-primary-deep/15 bg-[#f8fbff] px-3 py-2.5 transition hover:border-primary-deep/40 hover:bg-white"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-deep/10 transition group-hover:bg-primary-deep/15">
                      <Mail className="h-4 w-4 text-primary-deep" strokeWidth={2} />
                    </div>
                    <div className="min-w-0 text-left">
                      <p className="text-xs font-semibold text-[#6b7280]">{t("partnership.email")}</p>
                      <p className="truncate text-sm font-bold text-[#1f2937]">info@daymilk.uz</p>
                    </div>
                  </a>

                  <a
                    href="https://t.me/daymilk_uz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-lg border border-primary-deep/15 bg-[#f8fbff] px-3 py-2.5 transition hover:border-primary-deep/40 hover:bg-white"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-deep/10 transition group-hover:bg-primary-deep/15">
                      <Send className="h-4 w-4 text-primary-deep" strokeWidth={2} />
                    </div>
                    <div className="min-w-0 text-left">
                      <p className="text-xs font-semibold text-[#6b7280]">{t("partnership.telegram")}</p>
                      <p className="truncate text-sm font-bold text-[#1f2937]">@daymilk_uz</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
