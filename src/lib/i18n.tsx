import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "uz" | "ru" | "en";

type Dict = Record<string, string>;

export const translations: Record<Lang, Dict> = {
  uz: {
    "nav.home": "Bosh sahifa",
    "nav.products": "Mahsulotlar",
    "nav.recipes": "Retseptlar",
    "nav.company": "Kompaniya haqida",
    "nav.contacts": "Kontaktlar",
    "brand.tagline": "Tabiiy. Yangi. Ishonchli.",

    "hero.title.1": "Tabiiy va sifatli",
    "hero.title.2": "sut mahsulotlari",
    "hero.desc":
      "Har kuni yangi, ishonchli va mazali mahsulotlar oilangiz hamda hamkorlaringiz uchun.",
    "hero.cta.products": "Mahsulotlarni ko'rish",
    "hero.cta.about": "Biz haqimizda",

    "feat.1.t": "Tabiiy mahsulot",
    "feat.1.d": "Faqat tabiiy xomashyodan yasalgan mahsulotlar.",
    "feat.2.t": "Kunlik ishlab chiqarish",
    "feat.2.d": "Zamonaviy uskunalarda kun sayin ishlab chiqaramiz.",
    "feat.3.t": "Tez yetkazib berish",
    "feat.3.d": "Buyurtmalaringizni tez va ishonchli yetkazib beramiz.",
    "feat.4.t": "Sifat nazorati",
    "feat.4.d": "Har bosqichda qat'iy sifat nazorati va xavfsizlik.",

    "catalog.title": "Mahsulotlar katalogi",
    "catalog.subtitle": "Har kuni yangi va tabiiy sut mahsulotlari to'liq tanlovi.",
    "catalog.all": "Barcha mahsulotlar",
    "cat.all": "Hammasi",
    "cat.milk": "Sut",
    "cat.kefir": "Kefirlar",
    "cat.qatiq": "Qatiq",
    "cat.ayron": "Ayron va go'ja",
    "cat.cream": "Qaymoq",
    "cat.tvorog": "Tvorog",
    "cat.smetana": "Smetana",

    "p.milk": "Sut 3,2%",
    "p.kefir": "Kefir 2,5%",
    "p.qatiq": "Qatiq 2,0%",
    "p.ayron": "Ayron",
    "p.goja": "Go'ja",
    "p.qaymoq": "Qaymoq 45%",
    "p.tvorog": "Tvorog 5%",
    "p.smetana": "Smetana",
    "d.milk":
      "Tabiiy sigir sutidan tayyorlangan, 3,2% yog'lilikdagi yangi sut. Kalsiy va vitaminlarga boy, bolalar va kattalar uchun ideal. Ultra-pasterizatsiya texnologiyasi foydali xususiyatlarni to'liq saqlaydi.",
    "d.kefir":
      "Foydali probiotiklarga boy, 2,5% yog'lilikdagi kefir. Hazm tizimini yaxshilaydi va immunitetni mustahkamlaydi. Tabiiy achitqi yordamida tayyorlangan, yangi ta'mga ega.",
    "d.qatiq":
      "An'anaviy usulda tayyorlangan, 2,0% yog'lilikdagi qatiq. Yumshoq, quyuq va tabiiy ta'mli. Salatlar, ovqatlar va alohida iste'mol uchun mos.",
    "d.ayron":
      "Sof va yangi sutdan tayyorlangan tabiiy ayron. Chanqovni qondiradi va organizmni tetiklashtiradi. Issiq kunlar uchun ideal ichimlik.",
    "d.goja":
      "An'anaviy retsept bo'yicha tayyorlangan to'yimli go'ja. Yengil va foydali, har kungi iste'mol uchun mos. Tabiiy tarkib va yoqimli ta'm.",
    "d.qaymoq":
      "45% yog'lilikdagi yuqori sifatli qaymoq. Quyuq, mazali va boy ta'mga ega. Nonushta va shirinliklar uchun ideal tanlov.",
    "d.tvorog":
      "5% yog'lilikdagi yumshoq tvorog. Oqsilga boy, sportchilar va sog'lom turmush tarzini sevuvchilar uchun mos. Yangi va tabiiy.",
    "d.smetana":
      "Tabiiy sutdan tayyorlangan, foydali va mazali smetana. Taomlar va salatlar uchun ajoyib tanlov.",
    "d.durda":
      "An'anaviy retsept bo'yicha tayyorlangan tabiiy durda. Undirilgan bug'doy asosida, to'yimli va foydali. O'zbek dasturxonining noyob taomi.",
    "d.suzma":
      "Pasterizatsiya qilingan sigir sutidan tayyorlangan tabiiy suzma. Quyuq, oqsilga boy va mazali. Nonushta hamda milliy taomlar uchun ideal.",
    "mass.vol1l": "Sof hajm: 1 L",
    "mass.vol500": "Sof hajm: 500 ml",
    "mass.g920": "Sof massa: 920 g",
    "mass.g400": "Sof massa: 400 g",
    "mass.g350": "Sof massa: 350 g",
    "mass.g290": "Sof massa: 290 g",
    "mass.g340": "Sof massa: 340 g",
    "mass.g200": "Sof massa: 200 g",

    "blog.title": "Retseptlar va foydali maqolalar",
    "blog.all": "Barcha maqolalar",
    "blog.read": "O'qish",
    "blog.1.t": "Sutli desertlar",
    "blog.1.d": "Mazali va oson tayyorlanadigan sutli desertlar to'plami.",
    "blog.2.t": "Sog'lom nonushta",
    "blog.2.d": "Har kuni uchun foydali va energiya beruvchi nonushtalar.",
    "blog.3.t": "Foydali maslahatlar",
    "blog.3.d": "Sut mahsulotlari haqida foydali maslahatlar va tavsiyalar.",
    "blog.4.t": "Bolalar uchun shirinliklar",
    "blog.4.d": "Qaymoq asosida bolalarbop shirinliklar.",
    "blog.5.t": "Smuzi va kokteyllar",
    "blog.5.d": "Sut va mevalardan tayyorlanadigan tetiklantiruvchi ichimliklar.",
    "blog.6.t": "Tvorog taomlari",
    "blog.6.d": "Sirniki, zapekanka va boshqa tvorog taomlari.",
    "recipes.subtitle":
      "DAYMILK mahsulotlari bilan tayyorlangan mazali taomlar va foydali maslahatlar.",

    "about.title": "Kompaniya haqida",
    "about.intro":
      "DAYMILK — har kuni yangi va tabiiy sut mahsulotlarini ishlab chiqaruvchi O'zbekiston kompaniyasi. Bizning maqsadimiz — har bir oilaga sifatli va xavfsiz mahsulot yetkazish.",
    "about.mission.t": "Bizning missiya",
    "about.mission.d":
      "O'zbekiston oilalariga har kuni yangi, tabiiy va ishonchli sut mahsulotlarini taqdim etish. Biz an'anaviy mazani zamonaviy texnologiyalar bilan birlashtirib, eng yuqori sifatga erishamiz.",
    "about.values.t": "Bizning qadriyatlar",
    "about.values.d":
      "Halollik, sifat va mijozlarga g'amxo'rlik — bizning ishimizning asosiy prinsiplari.",
    "about.why": "Nima uchun DAYMILK?",
    "val.1.t": "Tabiiy mahsulot",
    "val.1.d": "Faqat tabiiy xomashyodan yasalgan mahsulotlar.",
    "val.2.t": "Zamonaviy ishlab chiqarish",
    "val.2.d": "Yangi avlod uskunalari va texnologiyalari.",
    "val.3.t": "Sifat nazorati",
    "val.3.d": "Har bosqichda qat'iy nazorat va standartlar.",
    "val.4.t": "Ishonchli logistika",
    "val.4.d": "O'z vaqtida va sifatli yetkazib berish tizimi.",

    "contact.title": "Kontaktlar",
    "contact.subtitle": "Savol va takliflaringiz bo'lsa, biz bilan bog'laning.",
    "contact.phone": "Telefon",
    "contact.email": "Email",
    "contact.tg": "Telegram",
    "contact.ig": "Instagram",
    "contact.addr": "Manzil",
    "contact.addr.v": "Toshkent vil., Qibray tumani, Sanoat ko'chasi, 12-uy",
    "contact.hours": "Ish vaqti",
    "contact.hours.v": "Dushanba — Shanba, 09:00 — 18:00",
    "contact.form.title": "Xabar yuboring",
    "contact.form.sub": "Biz tez orada siz bilan bog'lanamiz.",
    "contact.form.name": "Ismingiz",
    "contact.form.phone": "Telefon raqamingiz",
    "contact.form.msg": "Xabaringiz",
    "contact.form.send": "Yuborish",
    "contact.form.success": "Xabaringiz muvaffaqiyatli yuborildi!",

    "footer.about": "Siz uchun har kuni yangi va sifatli sut mahsulotlarini ishlab chiqaramiz.",
    "footer.links": "Tezkor havolalar",
    "footer.products": "Mahsulotlar",
    "footer.contact": "Biz bilan bog'laning",
    "footer.follow": "Bizni kuzating",
    "footer.rights": "© 2026 DAYMILK. Barcha huquqlar himoyalangan.",
  },
  ru: {
    "nav.home": "Главная",
    "nav.products": "Продукция",
    "nav.recipes": "Рецепты",
    "nav.company": "О компании",
    "nav.contacts": "Контакты",
    "brand.tagline": "Натурально. Свежо. Надёжно.",

    "hero.title.1": "Натуральные и качественные",
    "hero.title.2": "молочные продукты",
    "hero.desc": "Каждый день свежие, надёжные и вкусные продукты для вашей семьи и партнёров.",
    "hero.cta.products": "Смотреть продукцию",
    "hero.cta.about": "О нас",

    "feat.1.t": "Натуральный продукт",
    "feat.1.d": "Продукция исключительно из натурального сырья.",
    "feat.2.t": "Ежедневное производство",
    "feat.2.d": "Производим каждый день на современном оборудовании.",
    "feat.3.t": "Быстрая доставка",
    "feat.3.d": "Доставляем заказы быстро и надёжно.",
    "feat.4.t": "Контроль качества",
    "feat.4.d": "Строгий контроль качества и безопасности на каждом этапе.",

    "catalog.title": "Каталог продукции",
    "catalog.subtitle": "Полный выбор свежих и натуральных молочных продуктов каждый день.",
    "catalog.all": "Вся продукция",
    "cat.all": "Все",
    "cat.milk": "Молоко",
    "cat.kefir": "Кефир",
    "cat.qatiq": "Катык",
    "cat.ayron": "Айран и гужа",
    "cat.cream": "Сливки",
    "cat.tvorog": "Творог",
    "cat.smetana": "Сметана",

    "p.milk": "Молоко 3,2%",
    "p.kefir": "Кефир 2,5%",
    "p.qatiq": "Катык 2,0%",
    "p.ayron": "Айран",
    "p.goja": "Гужа",
    "p.qaymoq": "Сливки 45%",
    "p.tvorog": "Творог 5%",
    "p.smetana": "Сметана",
    "d.milk":
      "Свежее молоко 3,2% жирности из натурального коровьего молока. Богато кальцием и витаминами, идеально для детей и взрослых. Ультрапастеризация сохраняет все полезные свойства.",
    "d.kefir":
      "Кефир 2,5% жирности, богатый полезными пробиотиками. Улучшает пищеварение и укрепляет иммунитет. Приготовлен на натуральной закваске.",
    "d.qatiq":
      "Катык 2,0% жирности, приготовленный традиционным способом. Нежный, густой и натуральный вкус. Подходит для салатов и блюд.",
    "d.ayron":
      "Натуральный айран из свежего молока. Утоляет жажду и освежает организм. Идеальный напиток для жарких дней.",
    "d.goja":
      "Сытная гужа по традиционному рецепту. Лёгкая и полезная, подходит для ежедневного употребления. Натуральный состав и приятный вкус.",
    "d.qaymoq":
      "Высококачественные сливки 45% жирности. Густые, вкусные и насыщенные. Идеальный выбор для завтрака и десертов.",
    "d.tvorog":
      "Мягкий творог 5% жирности. Богат белком, подходит для спортсменов и любителей здорового образа жизни. Свежий и натуральный.",
    "d.smetana":
      "Сметана из натурального молока, полезная и вкусная. Отличный выбор для блюд и салатов.",
    "d.durda":
      "Натуральная гужа (дурда) по традиционному рецепту. На основе пророщенной пшеницы, сытная и полезная. Уникальное блюдо узбекского стола.",
    "d.suzma":
      "Натуральная сузма из пастеризованного коровьего молока. Густая, богатая белком и вкусная. Идеальна для завтрака и национальных блюд.",
    "mass.vol1l": "Объём: 1 л",
    "mass.vol500": "Объём: 500 мл",
    "mass.g920": "Масса: 920 г",
    "mass.g400": "Масса: 400 г",
    "mass.g350": "Масса: 350 г",
    "mass.g290": "Масса: 290 г",
    "mass.g340": "Масса: 340 г",
    "mass.g200": "Масса: 200 г",

    "blog.title": "Рецепты и полезные статьи",
    "blog.all": "Все статьи",
    "blog.read": "Читать",
    "blog.1.t": "Молочные десерты",
    "blog.1.d": "Подборка вкусных и простых молочных десертов.",
    "blog.2.t": "Здоровый завтрак",
    "blog.2.d": "Полезные и заряжающие энергией завтраки на каждый день.",
    "blog.3.t": "Полезные советы",
    "blog.3.d": "Полезные советы и рекомендации о молочных продуктах.",
    "blog.4.t": "Сладости для детей",
    "blog.4.d": "Детские лакомства на основе сливок.",
    "blog.5.t": "Смузи и коктейли",
    "blog.5.d": "Освежающие напитки из молока и фруктов.",
    "blog.6.t": "Блюда из творога",
    "blog.6.d": "Сырники, запеканка и другие блюда из творога.",
    "recipes.subtitle": "Вкусные блюда и полезные советы с продуктами DAYMILK.",

    "about.title": "О компании",
    "about.intro":
      "DAYMILK — узбекская компания, производящая свежие и натуральные молочные продукты каждый день. Наша цель — доставить качественный и безопасный продукт в каждую семью.",
    "about.mission.t": "Наша миссия",
    "about.mission.d":
      "Предоставлять семьям Узбекистана свежие, натуральные и надёжные молочные продукты каждый день. Мы сочетаем традиционный вкус с современными технологиями для высочайшего качества.",
    "about.values.t": "Наши ценности",
    "about.values.d": "Честность, качество и забота о клиентах — основные принципы нашей работы.",
    "about.why": "Почему DAYMILK?",
    "val.1.t": "Натуральный продукт",
    "val.1.d": "Продукция исключительно из натурального сырья.",
    "val.2.t": "Современное производство",
    "val.2.d": "Оборудование и технологии нового поколения.",
    "val.3.t": "Контроль качества",
    "val.3.d": "Строгий контроль и стандарты на каждом этапе.",
    "val.4.t": "Надёжная логистика",
    "val.4.d": "Своевременная и качественная система доставки.",

    "contact.title": "Контакты",
    "contact.subtitle": "Если у вас есть вопросы или предложения — свяжитесь с нами.",
    "contact.phone": "Телефон",
    "contact.email": "Email",
    "contact.tg": "Telegram",
    "contact.ig": "Instagram",
    "contact.addr": "Адрес",
    "contact.addr.v": "Ташкентская обл., Кибрайский р-н, ул. Саноат, 12",
    "contact.hours": "Часы работы",
    "contact.hours.v": "Понедельник — Суббота, 09:00 — 18:00",
    "contact.form.title": "Отправьте сообщение",
    "contact.form.sub": "Мы свяжемся с вами в ближайшее время.",
    "contact.form.name": "Ваше имя",
    "contact.form.phone": "Ваш телефон",
    "contact.form.msg": "Ваше сообщение",
    "contact.form.send": "Отправить",
    "contact.form.success": "Ваше сообщение успешно отправлено!",

    "footer.about": "Каждый день производим для вас свежие и качественные молочные продукты.",
    "footer.links": "Быстрые ссылки",
    "footer.products": "Продукция",
    "footer.contact": "Связаться с нами",
    "footer.follow": "Подписывайтесь",
    "footer.rights": "© 2026 DAYMILK. Все права защищены.",
  },
  en: {
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.recipes": "Recipes",
    "nav.company": "About",
    "nav.contacts": "Contacts",
    "brand.tagline": "Natural. Fresh. Trusted.",

    "hero.title.1": "Natural and quality",
    "hero.title.2": "dairy products",
    "hero.desc": "Every day fresh, reliable and tasty products for your family and partners.",
    "hero.cta.products": "View products",
    "hero.cta.about": "About us",

    "feat.1.t": "Natural product",
    "feat.1.d": "Made only from natural raw materials.",
    "feat.2.t": "Daily production",
    "feat.2.d": "Produced daily on modern equipment.",
    "feat.3.t": "Fast delivery",
    "feat.3.d": "We deliver your orders quickly and reliably.",
    "feat.4.t": "Quality control",
    "feat.4.d": "Strict quality and safety control at every step.",

    "catalog.title": "Product catalog",
    "catalog.subtitle": "A complete selection of fresh and natural dairy products every day.",
    "catalog.all": "All products",
    "cat.all": "All",
    "cat.milk": "Milk",
    "cat.kefir": "Kefir",
    "cat.qatiq": "Qatiq",
    "cat.ayron": "Ayran & Go'ja",
    "cat.cream": "Cream",
    "cat.tvorog": "Cottage cheese",
    "cat.smetana": "Sour cream",

    "p.milk": "Milk 3.2%",
    "p.kefir": "Kefir 2.5%",
    "p.qatiq": "Qatiq 2.0%",
    "p.ayron": "Ayran",
    "p.goja": "Go'ja",
    "p.qaymoq": "Cream 45%",
    "p.tvorog": "Cottage cheese 5%",
    "p.smetana": "Sour cream",
    "d.milk":
      "Fresh 3.2% fat milk made from natural cow's milk. Rich in calcium and vitamins, ideal for children and adults. Ultra-pasteurization preserves all the beneficial properties.",
    "d.kefir":
      "Kefir with 2.5% fat, rich in beneficial probiotics. Improves digestion and strengthens immunity. Made with natural starter cultures.",
    "d.qatiq":
      "Qatiq with 2.0% fat, made the traditional way. Soft, thick and naturally flavored. Perfect for salads and meals.",
    "d.ayron":
      "Natural ayran made from fresh milk. Quenches thirst and refreshes the body. The ideal drink for hot days.",
    "d.goja":
      "Hearty go'ja made to a traditional recipe. Light and wholesome, perfect for everyday enjoyment. Natural ingredients and pleasant taste.",
    "d.qaymoq":
      "High-quality cream with 45% fat. Thick, tasty and rich. The perfect choice for breakfast and desserts.",
    "d.tvorog":
      "Soft cottage cheese with 5% fat. High in protein, great for athletes and healthy-living enthusiasts. Fresh and natural.",
    "d.smetana":
      "Sour cream made from natural milk, healthy and delicious. Excellent choice for meals and salads.",
    "d.durda":
      "Natural durda made to a traditional recipe. Based on sprouted wheat, hearty and wholesome. A unique dish of the Uzbek table.",
    "d.suzma":
      "Natural suzma made from pasteurised cow's milk. Thick, protein-rich and tasty. Perfect for breakfast and traditional dishes.",
    "mass.vol1l": "Volume: 1 L",
    "mass.vol500": "Volume: 500 ml",
    "mass.g920": "Net weight: 920 g",
    "mass.g400": "Net weight: 400 g",
    "mass.g350": "Net weight: 350 g",
    "mass.g290": "Net weight: 290 g",
    "mass.g340": "Net weight: 340 g",
    "mass.g200": "Net weight: 200 g",

    "blog.title": "Recipes and useful articles",
    "blog.all": "All articles",
    "blog.read": "Read",
    "blog.1.t": "Milk desserts",
    "blog.1.d": "A collection of tasty and easy milk desserts.",
    "blog.2.t": "Healthy breakfast",
    "blog.2.d": "Nutritious and energizing breakfasts for every day.",
    "blog.3.t": "Useful tips",
    "blog.3.d": "Helpful tips and advice about dairy products.",
    "blog.4.t": "Sweets for kids",
    "blog.4.d": "Kid-friendly treats based on cream.",
    "blog.5.t": "Smoothies and cocktails",
    "blog.5.d": "Refreshing drinks made from milk and fruits.",
    "blog.6.t": "Cottage cheese dishes",
    "blog.6.d": "Syrniki, casseroles and other cottage cheese dishes.",
    "recipes.subtitle": "Delicious dishes and useful tips made with DAYMILK products.",

    "about.title": "About the company",
    "about.intro":
      "DAYMILK is an Uzbek company that produces fresh and natural dairy products every day. Our goal is to deliver quality and safe products to every family.",
    "about.mission.t": "Our mission",
    "about.mission.d":
      "To provide Uzbek families with fresh, natural and reliable dairy products every day. We combine traditional taste with modern technology for the highest quality.",
    "about.values.t": "Our values",
    "about.values.d": "Honesty, quality and customer care are the main principles of our work.",
    "about.why": "Why DAYMILK?",
    "val.1.t": "Natural product",
    "val.1.d": "Made only from natural raw materials.",
    "val.2.t": "Modern production",
    "val.2.d": "New generation equipment and technology.",
    "val.3.t": "Quality control",
    "val.3.d": "Strict control and standards at every step.",
    "val.4.t": "Reliable logistics",
    "val.4.d": "Timely and high-quality delivery system.",

    "contact.title": "Contacts",
    "contact.subtitle": "If you have questions or suggestions, get in touch with us.",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.tg": "Telegram",
    "contact.ig": "Instagram",
    "contact.addr": "Address",
    "contact.addr.v": "Tashkent region, Qibray district, Sanoat street, 12",
    "contact.hours": "Working hours",
    "contact.hours.v": "Monday — Saturday, 09:00 — 18:00",
    "contact.form.title": "Send a message",
    "contact.form.sub": "We will contact you shortly.",
    "contact.form.name": "Your name",
    "contact.form.phone": "Your phone",
    "contact.form.msg": "Your message",
    "contact.form.send": "Send",
    "contact.form.success": "Your message has been sent successfully!",

    "footer.about": "Every day we produce fresh and quality dairy products for you.",
    "footer.links": "Quick links",
    "footer.products": "Products",
    "footer.contact": "Contact us",
    "footer.follow": "Follow us",
    "footer.rights": "© 2026 DAYMILK. All rights reserved.",
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };
const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("uz");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang") as Lang | null;
      if (saved === "uz" || saved === "ru" || saved === "en") setLangState(saved);
    } catch (error) {
      // Ignore errors when accessing localStorage in SSR or if disabled
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch (error) {
      // Ignore errors when accessing localStorage in SSR or if disabled
    }
  };

  const t = (k: string) => translations[lang][k] ?? translations.uz[k] ?? k;

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang(): Ctx {
  const ctx = useContext(LangContext);
  if (!ctx) return { lang: "uz", setLang: () => {}, t: (k) => translations.uz[k] ?? k };
  return ctx;
}
