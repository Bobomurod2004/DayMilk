import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import blogDessert from "@/assets/blog-dessert.jpg";
import blogBreakfast from "@/assets/blog-breakfast.jpg";
import blogTips from "@/assets/blog-tips.jpg";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/retseptlar")({
  head: () => ({
    meta: [
      { title: "Retseptlar — DAYMILK" },
      {
        name: "description",
        content: "Sut mahsulotlari asosida mazali va foydali retseptlar to'plami.",
      },
      { property: "og:title", content: "Retseptlar — DAYMILK" },
      {
        property: "og:description",
        content: "Sutli desertlar, nonushtalar va foydali maslahatlar.",
      },
    ],
  }),
  component: RecipesPage,
});

const ITEMS = [
  { img: blogDessert, t: "blog.1.t", d: "blog.1.d" },
  { img: blogBreakfast, t: "blog.2.t", d: "blog.2.d" },
  { img: blogTips, t: "blog.3.t", d: "blog.3.d" },
  { img: blogDessert, t: "blog.4.t", d: "blog.4.d" },
  { img: blogBreakfast, t: "blog.5.t", d: "blog.5.d" },
  { img: blogTips, t: "blog.6.t", d: "blog.6.d" },
];

function RecipesPage() {
  const { t } = useLang();
  return (
    <div className="min-h-screen bg-background pt-4">
      <SiteHeader />
      <main className="mx-4 mt-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-primary-deep">
            {t("blog.title")}
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">{t("recipes.subtitle")}</p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ITEMS.map((b, i) => (
              <article
                key={i}
                className="bg-card rounded-2xl overflow-hidden border border-border/60 hover:shadow-[var(--shadow-card)] transition"
              >
                <img
                  src={b.img}
                  alt={t(b.t)}
                  loading="lazy"
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-display font-bold text-card-foreground text-lg">{t(b.t)}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{t(b.d)}</p>
                  <a
                    href="#"
                    className="mt-3 inline-flex items-center gap-1 text-primary text-sm font-semibold"
                  >
                    {t("blog.read")} <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
