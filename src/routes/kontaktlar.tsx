import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Phone, Send, Instagram, MapPin, Mail, Clock } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/kontaktlar")({
  head: () => ({
    meta: [
      { title: "Kontaktlar — DAYMILK" },
      { name: "description", content: "DAYMILK bilan bog'lanish: telefon, manzil va ish vaqti." },
      { property: "og:title", content: "Kontaktlar — DAYMILK" },
      {
        property: "og:description",
        content: "Biz bilan bog'laning: telefon, manzil, ijtimoiy tarmoqlar.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("contact.form.success"));
    setName("");
    setPhone("");
    setMsg("");
  };
  const CONTACTS = [
    { icon: Phone, title: t("contact.phone"), value: "+998 90 123 45 67" },
    { icon: Mail, title: t("contact.email"), value: "info@daymilk.uz" },
    { icon: Send, title: t("contact.tg"), value: "@daymilk_uz" },
    { icon: Instagram, title: t("contact.ig"), value: "@daymilk_uz" },
    { icon: MapPin, title: t("contact.addr"), value: t("contact.addr.v") },
    { icon: Clock, title: t("contact.hours"), value: t("contact.hours.v") },
  ];
  return (
    <div className="min-h-screen bg-background pt-4">
      <SiteHeader />
      <main className="mx-4 mt-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-primary-deep">
            {t("contact.title")}
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">{t("contact.subtitle")}</p>

          <div className="mt-10 grid lg:grid-cols-2 gap-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {CONTACTS.map(({ icon: Icon, title, value }) => (
                <div
                  key={title}
                  className="bg-card rounded-2xl p-5 border border-border/60 shadow-[var(--shadow-card)]"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary-soft flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="mt-3 font-display font-bold text-card-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{value}</p>
                </div>
              ))}
            </div>

            <form className="bg-primary-soft rounded-3xl p-8" onSubmit={handleSubmit}>
              <h2 className="text-2xl font-extrabold text-primary-deep">
                {t("contact.form.title")}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{t("contact.form.sub")}</p>
              <div className="mt-5 space-y-3">
                <input
                  type="text"
                  placeholder={t("contact.form.name")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="tel"
                  placeholder={t("contact.form.phone")}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  placeholder={t("contact.form.msg")}
                  rows={4}
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-xl hover:brightness-110 transition cursor-pointer"
                >
                  {t("contact.form.send")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
