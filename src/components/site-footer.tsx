import { Link } from "@tanstack/react-router";
import { Phone, Instagram, Send, Facebook, MapPin } from "lucide-react";
import { Logo, NAV } from "./site-header";
import { useLang } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useLang();
  const productKeys = ["cat.milk", "cat.kefir", "cat.ayron", "cat.cream", "cat.tvorog"];
  return (
    <footer className="mt-20 relative">
      <div className="h-16 wave-divider" aria-hidden />
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <Logo light />
            <p className="mt-4 text-sm text-white/70 max-w-xs">{t("footer.about")}</p>
          </div>
          <div>
            <h4 className="font-display font-bold mb-4">{t("footer.links")}</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-accent-yellow transition">
                    {t(n.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-4">{t("footer.products")}</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {productKeys.map((k) => (
                <li key={k}>
                  <Link to="/mahsulotlar" className="hover:text-accent-yellow transition">
                    {t(k)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent-yellow" /> +998 90 123 45 67
              </li>
              <li className="flex items-center gap-2">
                <Send className="w-4 h-4 text-accent-yellow" /> @daymilk_uz
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-accent-yellow" /> @daymilk_uz
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent-yellow mt-0.5" /> {t("contact.addr.v")}
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-4">{t("footer.follow")}</h4>
            <div className="flex gap-3">
              {[Send, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-yellow hover:text-primary-deep transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <p className="text-center text-xs text-white/60 py-4">{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
