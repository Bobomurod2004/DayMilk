import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, ShoppingCart } from "lucide-react";
import { useLang, type Lang } from "@/lib/i18n";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoImg from "@/assets/logo.png";

export const NAV = [
  { key: "nav.home", to: "/" },
  { key: "nav.products", to: "/mahsulotlar" },
  { key: "nav.recipes", to: "/retseptlar" },
  { key: "nav.company", to: "/kompaniya" },
  { key: "nav.contacts", to: "/kontaktlar" },
] as const;

export function Logo() {
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

type SiteHeaderProps = {
  hideOnScroll?: boolean;
  variant?: "solid" | "overlay";
};

export function SiteHeader({ hideOnScroll = false, variant = "solid" }: SiteHeaderProps) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const { lang, setLang, t } = useLang();
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const isOverlay = variant === "overlay";
  const langs: Array<{ code: Lang; label: string }> = [
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
      className={
        isOverlay
          ? "hero-nav absolute inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6 lg:px-10 lg:pt-6"
          : `sticky top-4 z-50 mx-4 transition-transform duration-300 ${
              hideOnScroll && isHidden ? "pointer-events-none" : ""
            }`
      }
      style={
        isOverlay
          ? undefined
          : {
              transform:
                hideOnScroll && isHidden ? "translateY(calc(-100% - 1rem))" : "translateY(0)",
            }
      }
    >
      <div
        className={
          isOverlay
            ? "mx-auto max-w-[1440px]"
            : "mx-auto max-w-7xl rounded-xl bg-white shadow-[0_14px_30px_-18px_rgba(39,168,223,0.2)]"
        }
      >
        <div
          className={`flex items-center justify-between ${
            isOverlay
              ? "rounded-[28px] bg-white/78 px-4 py-2 shadow-[0_20px_44px_-30px_rgba(19,61,122,0.5)] backdrop-blur-md lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none lg:backdrop-blur-none"
              : "px-4 py-1 md:px-5"
          }`}
        >
          <Logo />

          <nav
            className={`hidden items-center lg:flex ${isOverlay ? "gap-3 text-[15px]" : "gap-1 text-[13px]"}`}
          >
            {NAV.map((item) => {
              const active = pathname === item.to;

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={
                    isOverlay
                      ? `relative rounded-full px-4 py-3 transition-colors ${
                          active
                            ? "font-semibold text-primary-deep after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:rounded-full after:bg-primary-deep after:content-['']"
                            : "text-primary-deep/80 hover:text-primary-deep"
                        }`
                      : `rounded-md px-2.5 py-1.5 transition-colors ${
                          active
                            ? "relative font-semibold text-primary-deep after:absolute after:bottom-0.5 after:left-2.5 after:right-2.5 after:h-0.5 after:rounded-full after:bg-primary-deep after:content-['']"
                            : "text-[#4b5563] hover:text-primary-deep"
                        }`
                  }
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>

          <div className={`flex items-center ${isOverlay ? "gap-2 sm:gap-3" : "gap-2.5"}`}>
            {!isOverlay && (
              <div className="hidden items-center gap-1.5 text-[11px] font-medium md:flex">
                {langs.map((item, index) => (
                  <span key={item.code} className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setLang(item.code)}
                      className={`transition hover:text-primary-deep ${
                        lang === item.code ? "font-semibold text-primary-deep" : "text-[#6b7280]"
                      }`}
                    >
                      {item.label}
                    </button>
                    {index < langs.length - 1 && <span className="text-[#d1d5db]">|</span>}
                  </span>
                ))}
              </div>
            )}



            {isOverlay && (
              <Link
                to="/kontaktlar"
                className="hidden items-center gap-2 rounded-full border-2 border-white bg-[#FDBA21] px-5 py-2.5 text-sm font-semibold text-[#0B3E9C] shadow-sm transition hover:scale-[1.03] sm:inline-flex"
              >
                <ShoppingCart className="h-4 w-4" />
                Buyurtma berish
              </Link>
            )}

            <div className="flex items-center lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    type="button"
                    className={`cursor-pointer transition ${
                      isOverlay
                        ? "rounded-full bg-white/84 p-2 shadow-[0_14px_28px_-20px_rgba(19,61,122,0.65)] backdrop-blur-sm hover:bg-white"
                        : "rounded-md p-1.5 hover:bg-[#f3f4f6]"
                    }`}
                  >
                    <Menu className="h-5 w-5 text-primary-deep" />
                  </button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="flex w-[272px] flex-col border-l-[#e5e7eb] bg-white p-6"
                >
                  <div className="mt-8 flex flex-col gap-2 text-base">
                    {NAV.map((item) => {
                      const active = pathname === item.to;

                      return (
                        <SheetClose asChild key={item.to}>
                          <Link
                            to={item.to}
                            className={`rounded-xl px-3 py-2.5 transition-colors ${
                              active
                                ? "bg-[#f0f7ff] font-semibold text-primary-deep"
                                : "text-[#4b5563] hover:bg-[#f9fafb] hover:text-primary-deep"
                            }`}
                          >
                            {t(item.key)}
                          </Link>
                        </SheetClose>
                      );
                    })}
                  </div>



                  <div className="mt-auto border-t border-[#e5e7eb] pt-6">
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-[#9ca3af]">
                      Language / Тил / Язык
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                      {langs.map((item) => (
                        <button
                          key={item.code}
                          type="button"
                          onClick={() => setLang(item.code)}
                          className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs transition ${
                            lang === item.code
                              ? "bg-primary-deep font-semibold text-white"
                              : "border border-[#d1d5db] text-[#6b7280] hover:bg-[#f0f7ff]"
                          }`}
                        >
                          {item.label}
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
