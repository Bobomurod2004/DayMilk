import { Link, useRouterState } from "@tanstack/react-router";
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
        className="h-16 md:h-20 w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-[1.02]" 
      />
    </Link>
  );
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { lang, setLang, t } = useLang();
  const langs: { code: Lang; label: string }[] = [
    { code: "uz", label: "UZB" },
    { code: "ru", label: "РУС" },
    { code: "en", label: "ENG" },
  ];
  return (
    <header className="sticky top-4 z-50 mx-4">
      <div className="mx-auto max-w-7xl rounded-2xl bg-primary text-primary-foreground shadow-[var(--shadow-brand)]">
        <div className="flex items-center justify-between px-5 py-3">
          <Logo light />
          <nav className="hidden lg:flex items-center gap-1 text-sm">
            {NAV.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-3 py-2 rounded-lg transition-colors hover:bg-white/10 ${
                    active
                      ? "text-accent-yellow font-semibold relative after:content-[''] after:absolute after:bottom-1 after:left-3 after:right-3 after:h-0.5 after:bg-accent-yellow after:rounded-full"
                      : ""
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 text-xs font-medium">
              {langs.map((l, i) => (
                <span key={l.code} className="flex items-center gap-2">
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
            <div className="lg:hidden flex items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <button className="p-2 rounded-lg hover:bg-white/10 transition cursor-pointer">
                    <Menu className="w-6 h-6 text-white" />
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="bg-primary text-primary-foreground border-l-white/10 flex flex-col p-6 w-[280px]"
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
                          className={`px-3 py-1.5 rounded-lg text-xs transition cursor-pointer ${
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
