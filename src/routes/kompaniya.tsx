import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Factory, ShieldCheck, Truck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroProducts from "@/assets/hero-products.jpg";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/kompaniya")({
  head: () => ({
    meta: [
      { title: "Kompaniya haqida — DAYMILK" },
      {
        name: "description",
        content:
          "DAYMILK — har kuni yangi va tabiiy sut mahsulotlarini ishlab chiqaruvchi kompaniya.",
      },
      { property: "og:title", content: "Kompaniya haqida — DAYMILK" },
      {
        property: "og:description",
        content: "DAYMILK kompaniyasi haqida ma'lumot, qadriyatlar va missiya.",
      },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Leaf, t: "val.1.t", d: "val.1.d" },
  { icon: Factory, t: "val.2.t", d: "val.2.d" },
  { icon: ShieldCheck, t: "val.3.t", d: "val.3.d" },
  { icon: Truck, t: "val.4.t", d: "val.4.d" },
];

function AboutPage() {
  const { t } = useLang();
  return (
    <div className="min-h-screen bg-background pt-4">
      <SiteHeader />
      <main className="mx-4 mt-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-primary-deep">
            {t("about.title")}
          </h1>
          <p className="mt-4 text-muted-foreground max-w-3xl text-lg">{t("about.intro")}</p>

          <div className="mt-10 grid lg:grid-cols-2 gap-8 items-center bg-primary-soft rounded-3xl p-8 lg:p-12">
            <div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-primary-deep">
                {t("about.mission.t")}
              </h2>
              <p className="mt-4 text-muted-foreground">{t("about.mission.d")}</p>
              <h2 className="mt-6 text-2xl lg:text-3xl font-extrabold text-primary-deep">
                {t("about.values.t")}
              </h2>
              <p className="mt-4 text-muted-foreground">{t("about.values.d")}</p>
            </div>
            <img
              src={heroProducts}
              alt="DAYMILK mahsulotlari"
              className="w-full h-auto object-contain"
            />
          </div>

          <h2 className="mt-16 text-3xl font-extrabold text-primary-deep">{t("about.why")}</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALUES.map(({ icon: Icon, t: tk, d }) => (
              <div
                key={tk}
                className="bg-card rounded-2xl p-5 border border-border/60 shadow-[var(--shadow-card)]"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mt-4 font-display font-bold text-card-foreground">{t(tk)}</h3>
                <p className="text-sm text-muted-foreground mt-1">{t(d)}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
