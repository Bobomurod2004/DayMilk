import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { useLang, type Lang } from "@/lib/i18n";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import logoImg from "@/assets/logo.png";

export const NAV = [
  { key: "nav.home", to: "/" },
  { key: "nav.products", to: "/mahsulotlar" },
  { key: "nav.recipes", to: "/retseptlar" },
  { key: "nav.company", to: "/kompaniya" },
  { key: "nav.contacts", to: "/kontaktlar" },
] as const;


export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group flex items-center">
      <img
        src={logoImg}
        alt="Day Milk Logo"
        className="h-12 w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.02] md:h-14"
      />
    </Link>
  );
}

export function SiteHeader({ hideOnScroll = false }: { hideOnScroll?: boolean }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { lang, setLang, t } = useLang();
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const langs: { code: Lang; label: string }[] = [
    { code: "uz", label: "UZB" },
    { code: "ru", label: "РУС" },
    { code: "en", label: "ENG" },
  ];

  useEffect(() => {
    if (!hideOnScroll) {
      setIsHidden(false);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 24) {
        setIsHidden(false);
      } else if (delta > 8) {
        setIsHidden(true);
      } else if (delta < -8) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hideOnScroll]);

  return (
    <header
      className={`sticky top-4 z-50 mx-4 transition-transform duration-300 ${
        hideOnScroll && isHidden ? "pointer-events-none" : ""
      }`}
      style={{
        transform: hideOnScroll && isHidden ? "translateY(calc(-100% - 1rem))" : "translateY(0)",
      }}
    >
      <div className="mx-auto max-w-7xl rounded-xl bg-[oklch(0.58_0.14_252)] text-primary-foreground shadow-[0_14px_30px_-18px_oklch(0.58_0.14_252_/_0.5)]">
        <div className="flex items-center justify-between px-4 py-1 md:px-5">
          <Logo light />
          <nav className="hidden items-center gap-1 text-[13px] lg:flex">
            {NAV.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`rounded-md px-2.5 py-1.5 transition-colors hover:bg-white/12 ${
                    active
                      ? "relative font-semibold text-accent-yellow after:absolute after:bottom-0.5 after:left-2.5 after:right-2.5 after:h-0.5 after:rounded-full after:bg-accent-yellow after:content-['']"
                      : ""
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2.5">
            <div className="hidden items-center gap-1.5 text-[11px] font-medium md:flex">
              {langs.map((l, i) => (
                <span key={l.code} className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setLang(l.code)}
                    className={`transition hover:text-accent-yellow ${lang === l.code ? "text-accent-yellow font-semibold" : "text-white/50"}`}
                  >
                    {l.label}
                  </button>
                  {i < langs.length - 1 && <span className="text-white/30">|</span>}
                </span>
              ))}
            </div>
            {/* Mobile menu trigger */}
            <div className="flex items-center lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button className="cursor-pointer rounded-md p-1.5 transition hover:bg-white/12">
                    <Menu className="h-5 w-5 text-white" />
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="flex w-[272px] flex-col border-l-white/10 bg-[oklch(0.58_0.14_252)] p-6 text-primary-foreground"
                >
                  <div className="mt-8 flex flex-col gap-2 text-base">
                    {NAV.map((item) => {
                      const active = pathname === item.to;
                      return (
                        <SheetClose asChild key={item.to}>
                          <Link
                            to={item.to}
                            className={`px-3 py-2.5 rounded-xl transition-colors hover:bg-white/10 ${
                              active
                                ? "text-accent-yellow font-semibold bg-white/5"
                                : "text-white/80"
                            }`}
                          >
                            {t(item.key)}
                          </Link>
                        </SheetClose>
                      );
                    })}
                  </div>
                  <div className="mt-auto border-t border-white/10 pt-6">
                    <p className="text-[11px] text-white/50 mb-3 uppercase tracking-wider font-semibold">
                      Language / Тил / Язык
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      {langs.map((l) => (
                        <button
                          key={l.code}
                          type="button"
                          onClick={() => setLang(l.code)}
                          className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs transition ${
                            lang === l.code
                              ? "bg-accent-yellow text-accent-yellow-foreground font-semibold"
                              : "text-white/60 border border-white/20 hover:bg-white/5"
                          }`}
                        >
                          {l.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
