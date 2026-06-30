// Shared product catalog used by both the home page marquee and the products page.
import sut1l from "@/assets/products/sut-1l.png";
import kefir1_500 from "@/assets/products/kefir-1-500.jpg";
import kefir1_1000 from "@/assets/products/kefir-1-1000.jpg";
import kefir25_450 from "@/assets/products/kefir-25-450.jpg";
import kefir25_900 from "@/assets/products/kefir-25-900.jpg";
import kefir25_1000 from "@/assets/products/kefir-25-1000.jpg";
import kefir32_500 from "@/assets/products/kefir-32-500.png";
import kefir32_1000 from "@/assets/products/kefir-32-1000.jpg";
import qatiq20_500 from "@/assets/products/qatiq-20-500.jpg";
import qatiq25_900 from "@/assets/products/qatiq-20-900.jpg";
import ayron300 from "@/assets/products/ayron-300.jpg";
import ayron500 from "@/assets/products/ayron-500.jpg";
import ayron1000 from "@/assets/products/ayron-1000.jpg";
import goja500 from "@/assets/products/goja-500.png";
import goja1000 from "@/assets/products/goja-1000.jpg";
import qaymoq190 from "@/assets/products/qaymoq-190.png";
import qaymoq380 from "@/assets/products/qaymoq-380.png";
import qaymoq500 from "@/assets/products/qaymoq-500.png";
import tvorog200 from "@/assets/products/tvorog-200.jpg";
import tvorojok400 from "@/assets/products/tvorojok-banan-400.jpg";
import smetana340 from "@/assets/products/smetana-20-340.png";
import smetana200 from "@/assets/products/smetana-20-200.jpg";
import smetana20_500 from "@/assets/products/smetana-20-500.png";
import tvorojokStrawberry400 from "@/assets/products/tvorojok-qulupnay-400.png";
import suzma200 from "@/assets/products/suzma-200.png";

export const CATEGORIES = [
  { key: "cat.all", id: "all" },
  { key: "cat.milk", id: "milk" },
  { key: "cat.kefir", id: "kefir" },
  { key: "cat.ayron", id: "ayron" },
  { key: "cat.cream", id: "cream" },
  { key: "cat.smetana", id: "smetana" },
  { key: "cat.tvorog", id: "tvorog" },
];

// Product names/sizes are universal (same across languages), so they live here as
// plain strings; `desc` points to a translated description, `qty` (in g/ml) is used
// to sort products by size within their category.
// `imgH` keeps the original large home-page sizing. Product-page card fields keep
// all cards on one baseline, while ml/g differences and product groups stay visible.
export const PRODUCTS = [
  // Sut
  {
    name: "Sut 3,2%",
    size: "1 litr",
    qty: 1000,
    img: sut1l,
    imgYOffset: 29,
    cat: "milk",
    desc: "d.milk",
    imgH: 220,
    cardImgH: 310,
    cardImgMaxW: "132%",
    cardScale: 1.14,
    cardYOffset: 36,
    nutritional: {
      protein: "3.2 g",
      fats: "3.2 g",
      carbs: "4.7 g",
      calories: "61 kcal",
    },
    storage: "storage.refrigerated",
    shelfLife: "shelf.days10",
  },
  // Kefir
  // Bottle cards with size-based heights: small bottles (450-500g) are visually smaller,
  // large bottles (900-1000g) are visually larger.
  {
    name: "Kefir 1%",
    size: "500 g",
    qty: 500,
    img: kefir1_500,
    imgYOffset: 17,
    cat: "kefir",
    desc: "d.kefir",
    imgH: 251,
    cardImgH: 180,
    sortGroup: 10,
    nutritional: {
      protein: "3.0 g",
      fats: "1.0 g",
      carbs: "4.0 g",
      calories: "40 kcal",
    },
    storage: "storage.refrigerated",
    shelfLife: "shelf.days10",
  },
  {
    name: "Kefir 1%",
    size: "1 litr",
    qty: 1000,
    img: kefir1_1000,
    imgYOffset: 25,
    cat: "kefir",
    desc: "d.kefir",
    imgH: 365,
    cardImgH: 220,
    sortGroup: 10,
    nutritional: {
      protein: "3.0 g",
      fats: "1.0 g",
      carbs: "4.0 g",
      calories: "40 kcal",
    },
    storage: "storage.refrigerated",
    shelfLife: "shelf.days10",
  },
  {
    name: "Kefir 2,5%",
    size: "450 g",
    qty: 450,
    img: kefir25_450,
    imgYOffset: 29,
    cat: "kefir",
    desc: "d.kefir",
    imgH: 270,
    cardImgH: 180,
    sortGroup: 20,
    nutritional: {
      protein: "2.9 g",
      fats: "2.5 g",
      carbs: "4.0 g",
      calories: "50 kcal",
    },
    storage: "storage.refrigerated",
    shelfLife: "shelf.days10",
  },
  {
    name: "Kefir 2,5%",
    size: "900 g",
    qty: 900,
    img: kefir25_900,
    imgYOffset: 59,
    cat: "kefir",
    desc: "d.kefir",
    imgH: 355,
    cardImgH: 220,
    sortGroup: 20,
    nutritional: {
      protein: "2.9 g",
      fats: "2.5 g",
      carbs: "4.0 g",
      calories: "50 kcal",
    },
    storage: "storage.refrigerated",
    shelfLife: "shelf.days10",
  },
  {
    name: "Kefir 2,5%",
    size: "1 litr",
    qty: 1000,
    img: kefir25_1000,
    imgYOffset: 25,
    cat: "kefir",
    desc: "d.kefir",
    imgH: 365,
    cardImgH: 220,
    sortGroup: 20,
    nutritional: {
      protein: "2.9 g",
      fats: "2.5 g",
      carbs: "4.0 g",
      calories: "50 kcal",
    },
    storage: "storage.refrigerated",
    shelfLife: "shelf.days10",
  },
  {
    name: "Kefir 3,2%",
    size: "500 g",
    qty: 500,
    img: kefir32_500,
    imgYOffset: 21,
    cat: "kefir",
    desc: "d.kefir",
    imgH: 280,
    cardImgH: 180,
    sortGroup: 30,
    nutritional: {
      protein: "2.8 g",
      fats: "3.2 g",
      carbs: "4.0 g",
      calories: "56 kcal",
    },
    storage: "storage.refrigerated",
    shelfLife: "shelf.days10",
  },
  {
    name: "Kefir 3,2%",
    size: "1 litr",
    qty: 1001,
    img: kefir32_1000,
    imgYOffset: 27,
    cat: "kefir",
    desc: "d.kefir",
    imgH: 365,
    cardImgH: 220,
    sortGroup: 30,
    nutritional: {
      protein: "2.8 g",
      fats: "3.2 g",
      carbs: "4.0 g",
      calories: "56 kcal",
    },
    storage: "storage.refrigerated",
    shelfLife: "shelf.days10",
  },
  // Qatiq
  {
    name: "Qatiq 2,0%",
    size: "500 g",
    qty: 500,
    img: qatiq20_500,
    imgYOffset: 34,
    cat: "kefir",
    desc: "d.qatiq",
    imgH: 230,
    cardImgH: 165,
    cardYOffset: 31,
    nutritional: {
      protein: "2.8 g",
      fats: "2.0 g",
      carbs: "3.9 g",
      calories: "45 kcal",
    },
    storage: "storage.refrigerated",
    shelfLife: "shelf.days10",
  },
  {
    name: "Qatiq 2,0%",
    size: "900 g",
    qty: 901,
    img: qatiq25_900,
    imgYOffset: 40,
    cat: "kefir",
    desc: "d.qatiq",
    imgH: 270,
    cardImgH: 200,
    cardYOffset: 37,
    nutritional: {
      protein: "2.8 g",
      fats: "2.0 g",
      carbs: "3.9 g",
      calories: "45 kcal",
    },
    storage: "storage.refrigerated",
    shelfLife: "shelf.days10",
  },
  // Ayron va go'ja (same two-height normalisation as Kefir)
  {
    name: "Ayron 2,5%",
    size: "300 ml",
    qty: 300,
    img: ayron300,
    imgYOffset: 39,
    cat: "ayron",
    desc: "d.ayron",
    imgH: 235,
    cardImgH: 170,
    sortGroup: 10,
    nutritional: {
      protein: "1.4 g",
      fats: "1.5 g",
      carbs: "1.9 g",
      calories: "27 kcal",
    },
    storage: "storage.refrigerated",
    shelfLife: "shelf.days10",
  },
  {
    name: "Ayron 2,5%",
    size: "500 ml",
    qty: 500,
    img: ayron500,
    imgYOffset: 32,
    cat: "ayron",
    desc: "d.ayron",
    imgH: 300,
    cardImgH: 185,
    sortGroup: 10,
    nutritional: {
      protein: "1.4 g",
      fats: "1.5 g",
      carbs: "1.9 g",
      calories: "27 kcal",
    },
    storage: "storage.refrigerated",
    shelfLife: "shelf.days10",
  },
  {
    name: "Ayron 2,5%",
    size: "1 litr",
    qty: 1000,
    img: ayron1000,
    imgYOffset: 36,
    cat: "ayron",
    desc: "d.ayron",
    imgH: 380,
    cardImgH: 220,
    sortGroup: 10,
    nutritional: {
      protein: "1.4 g",
      fats: "1.5 g",
      carbs: "1.9 g",
      calories: "27 kcal",
    },
    storage: "storage.refrigerated",
    shelfLife: "shelf.days10",
  },
  {
    name: "Go'ja",
    size: "500 ml",
    qty: 501,
    img: goja500,
    imgYOffset: 32,
    cat: "ayron",
    desc: "d.goja",
    imgH: 300,
    cardImgH: 185,
    sortGroup: 20,
    nutritional: {
      protein: "1.5 g",
      fats: "1.6 g",
      carbs: "2.2 g",
      calories: "30 kcal",
    },
    storage: "storage.refrigerated",
    shelfLife: "shelf.days10",
  },
  {
    name: "Go'ja",
    size: "1 litr",
    qty: 1002,
    img: goja1000,
    imgYOffset: 17,
    cat: "ayron",
    desc: "d.goja",
    imgH: 370,
    cardImgH: 220,
    sortGroup: 20,
    nutritional: {
      protein: "1.5 g",
      fats: "1.6 g",
      carbs: "2.2 g",
      calories: "30 kcal",
    },
    storage: "storage.refrigerated",
    shelfLife: "shelf.days10",
  },
  // Qaymoq
  {
    name: "Qaymoq 45%",
    size: "190 g",
    qty: 190,
    img: qaymoq190,
    imgYOffset: 25,
    cat: "cream",
    desc: "d.qaymoq",
    imgH: 230,
    cardImgH: 155,
    cardImgMaxW: "96%",
    imgClass: "scale-110",
    nutritional: {
      protein: "2.2 g",
      fats: "45.0 g",
      carbs: "3.0 g",
      calories: "450 kcal",
    },
    storage: "storage.refrigerated",
    shelfLife: "shelf.days14",
  },
  {
    name: "Qaymoq 45%",
    size: "380 g",
    qty: 380,
    img: qaymoq380,
    imgYOffset: 75,
    cat: "cream",
    desc: "d.qaymoq",
    imgH: 270,
    cardImgH: 185,
    cardImgMaxW: "108%",
    cardImgClass: "mix-blend-multiply",
    imgClass: "scale-[1.4] mix-blend-multiply",
    nutritional: {
      protein: "2.2 g",
      fats: "45.0 g",
      carbs: "3.0 g",
      calories: "450 kcal",
    },
    storage: "storage.refrigerated",
    shelfLife: "shelf.days14",
  },
  {
    name: "Qaymoq 45%",
    size: "500 g",
    qty: 500,
    img: qaymoq500,
    imgYOffset: 75,
    cat: "cream",
    desc: "d.qaymoq",
    imgH: 270,
    cardImgH: 195,
    cardImgMaxW: "108%",
    cardImgClass: "mix-blend-multiply",
    imgClass: "scale-[1.4] mix-blend-multiply",
    nutritional: {
      protein: "2.2 g",
      fats: "45.0 g",
      carbs: "3.0 g",
      calories: "450 kcal",
    },
    storage: "storage.refrigerated",
    shelfLife: "shelf.days14",
  },
  // Smetana
  {
    name: "Smetana 20%",
    size: "200 g",
    qty: 200,
    img: smetana200,
    imgYOffset: 22,
    cat: "smetana",
    desc: "d.smetana",
    imgH: 230,
    cardImgH: 165,
    cardImgMaxW: "98%",
    nutritional: {
      protein: "2.8 g",
      fats: "20.0 g",
      carbs: "3.2 g",
      calories: "206 kcal",
    },
    storage: "storage.refrigerated",
    shelfLife: "shelf.days14",
  },
  {
    name: "Smetana 20%",
    size: "340 g",
    qty: 340,
    img: smetana340,
    imgYOffset: 24,
    cat: "smetana",
    desc: "d.smetana",
    imgH: 270,
    cardImgH: 200,
    cardImgMaxW: "104%",
    nutritional: {
      protein: "2.8 g",
      fats: "20.0 g",
      carbs: "3.2 g",
      calories: "206 kcal",
    },
    storage: "storage.refrigerated",
    shelfLife: "shelf.days14",
  },
  {
    name: "Smetana 20%",
    size: "500 g",
    qty: 500,
    img: smetana20_500,
    imgYOffset: 24,
    cat: "smetana",
    desc: "d.smetana",
    imgH: 270,
    cardImgH: 210,
    cardImgMaxW: "104%",
    nutritional: {
      protein: "2.8 g",
      fats: "20.0 g",
      carbs: "3.2 g",
      calories: "206 kcal",
    },
    storage: "storage.refrigerated",
    shelfLife: "shelf.days14",
  },
  // Tvorog
  {
    name: "Tvorog",
    size: "200 g",
    qty: 200,
    img: tvorog200,
    imgYOffset: 10,
    cat: "tvorog",
    desc: "d.tvorog",
    imgH: 230,
    cardImgH: 180,
    cardImgMaxW: "104%",
    nutritional: {
      protein: "16.0 g",
      fats: "5.0 g",
      carbs: "2.0 g",
      calories: "121 kcal",
    },
    storage: "storage.refrigerated",
    shelfLife: "shelf.days10",
  },
  {
    name: "Bananli tvorojok 5%",
    size: "400 g",
    qty: 400,
    img: tvorojok400,
    imgYOffset: 10,
    cat: "tvorog",
    desc: "d.tvorog",
    imgH: 230,
    cardImgH: 210,
    cardImgMaxW: "104%",
    nutritional: {
      protein: "15.0 g",
      fats: "5.0 g",
      carbs: "8.5 g",
      calories: "145 kcal",
    },
    storage: "storage.refrigerated",
    shelfLife: "shelf.days10",
  },
  {
    name: "Qulupnayli tvorojok 5%",
    size: "400 g",
    qty: 401,
    img: tvorojokStrawberry400,
    imgYOffset: 10,
    cat: "tvorog",
    desc: "d.tvorog",
    imgH: 230,
    cardImgH: 210,
    cardImgMaxW: "104%",
    nutritional: {
      protein: "15.0 g",
      fats: "5.0 g",
      carbs: "8.5 g",
      calories: "145 kcal",
    },
    storage: "storage.refrigerated",
    shelfLife: "shelf.days10",
  },
  {
    name: "Suzma",
    size: "200 g",
    qty: 499,
    img: suzma200,
    cat: "tvorog",
    desc: "d.suzma",
    imgH: 235,
    cardImgH: 190,
    cardImgMaxW: "112%",
    nutritional: {
      protein: "18.0 g",
      fats: "9.0 g",
      carbs: "3.0 g",
      calories: "170 kcal",
    },
    storage: "storage.refrigerated",
    shelfLife: "shelf.days10",
  },
];

export type Product = {
  name: string;
  size: string;
  qty: number;
  img: string;
  cat: string;
  desc: string;
  imgH?: number;
  cardImgH?: number;
  cardImgMaxW?: string;
  cardScale?: number;
  cardYOffset?: number;
  cardImgClass?: string;
  sortGroup?: number;
  imgClass?: string;
  // Home marquee only: px to push the product down so every image's real base
  // lands on one bottom line (compensates for differing bottom whitespace in photos).
  imgYOffset?: number;
  // Nutritional information per 100g
  nutritional?: {
    protein: string;    // e.g., "3.2 g"
    fats: string;       // e.g., "3.2 g"
    carbs: string;      // e.g., "4.7 g"
    calories: string;   // e.g., "61 kcal"
  };
  storage?: string;     // Storage conditions translation key
  shelfLife?: string;   // Shelf life translation key
};

export function getProductAnchor(product: Pick<Product, "name" | "size">) {
  const normalize = (value: string) =>
    value
      .toLowerCase()
      .replace(/['`’]/g, "")
      .replace(/[%.,]/g, "")
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

  return `${normalize(product.name)}-${normalize(product.size)}`;
}

export function formatProductName(name: string) {
  return name.replace(/(\d+),0%/g, "$1%");
}

export function formatProductSize(size: string) {
  const match = size.match(/^(\d+)\s*([a-zA-Z]+)$/);

  if (!match) {
    return size;
  }

  return `${match[1]} ${match[2].toLowerCase()}`;
}

// Products ordered by category sequence, product family, then by size.
const catOrder = CATEGORIES.filter((c) => c.id !== "all").map((c) => c.id);
export function sortByCategory(items: Product[]): Product[] {
  return items
    .slice()
    .sort(
      (a, b) =>
        catOrder.indexOf(a.cat) - catOrder.indexOf(b.cat) ||
        (a.sortGroup ?? 0) - (b.sortGroup ?? 0) ||
        a.qty - b.qty ||
        a.name.localeCompare(b.name),
    );
}
