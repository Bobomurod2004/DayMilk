import { Link } from "@tanstack/react-router";
import { Phone, Instagram, Send, MapPin } from "lucide-react";
import { Logo, NAV } from "./site-header";
import { useLang } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useLang();

  return (
    <footer className="relative mt-14">
      <div className="h-12 wave-divider" aria-hidden />
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-2 lg:grid-cols-[1.15fr_1fr_1fr]">
          <div className="space-y-4">
            <Logo light />
            <p className="max-w-xs text-sm text-white/70">{t("footer.about")}</p>
            <div className="flex gap-3">
              <a
                href="https://t.me/daymilk_uz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-accent-yellow hover:text-primary-deep"
              >
                <Send className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/daymilk_uz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-accent-yellow hover:text-primary-deep"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display font-bold">{t("footer.links")}</h4>
            <ul className="grid gap-2 text-sm text-white/80 sm:grid-cols-2 lg:grid-cols-1">
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
            <h4 className="mb-4 font-display font-bold">{t("footer.contact")}</h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent-yellow" /> +998 90 123 45 67
              </li>
              <li className="flex items-center gap-2">
                <Send className="w-4 h-4 text-accent-yellow" /> @daymilk_uz
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent-yellow mt-0.5" /> {t("contact.addr.v")}
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <p className="text-center text-xs text-white/60 py-4">{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
