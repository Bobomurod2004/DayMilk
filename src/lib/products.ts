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
  { key: "cat.qatiq", id: "qatiq" },
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
    size: "1 L",
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
  },
  // Kefir
  // Bottle cards are normalised to two even heights (small: 450/500, big: 900/1L)
  // with a shared bottom baseline. cardImgH 400 forces a uniform render box; per-bottle
  // cardScale equalises the visible bottle height (photos frame the bottle differently),
  // and cardYOffset lifts each bottle's real base onto the same line.
  {
    name: "Kefir 1%",
    size: "500 g",
    qty: 500,
    img: kefir1_500,
    imgYOffset: 17,
    cat: "kefir",
    desc: "d.kefir",
    imgH: 251,
    cardImgH: 400,
    cardScale: 0.84,
    cardYOffset: 23,
    sortGroup: 10,
  },
  {
    name: "Kefir 1%",
    size: "1 L",
    qty: 1000,
    img: kefir1_1000,
    imgYOffset: 25,
    cat: "kefir",
    desc: "d.kefir",
    imgH: 365,
    cardImgH: 400,
    cardScale: 0.957,
    cardYOffset: 21,
    sortGroup: 10,
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
    cardImgH: 400,
    cardScale: 0.869,
    cardYOffset: 28,
    sortGroup: 20,
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
    cardImgH: 400,
    cardScale: 1.11,
    cardYOffset: 50,
    sortGroup: 20,
  },
  {
    name: "Kefir 2,5%",
    size: "1 L",
    qty: 1000,
    img: kefir25_1000,
    imgYOffset: 25,
    cat: "kefir",
    desc: "d.kefir",
    imgH: 365,
    cardImgH: 400,
    cardScale: 0.965,
    cardYOffset: 20,
    sortGroup: 20,
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
    cardImgH: 400,
    cardScale: 0.828,
    cardYOffset: 20,
    sortGroup: 30,
  },
  {
    name: "Kefir 3,2%",
    size: "1 L",
    qty: 1001,
    img: kefir32_1000,
    imgYOffset: 27,
    cat: "kefir",
    desc: "d.kefir",
    imgH: 365,
    cardImgH: 400,
    cardScale: 0.961,
    cardYOffset: 22,
    sortGroup: 30,
  },
  // Qatiq
  {
    name: "Qatiq 2,0%",
    size: "500 g",
    qty: 500,
    img: qatiq20_500,
    imgYOffset: 34,
    cat: "qatiq",
    desc: "d.qatiq",
    imgH: 230,
    cardImgH: 215,
    cardYOffset: 31,
  },
  {
    name: "Qatiq 2,0%",
    size: "900 g",
    qty: 901,
    img: qatiq25_900,
    imgYOffset: 40,
    cat: "qatiq",
    desc: "d.qatiq",
    imgH: 270,
    cardImgH: 250,
    cardYOffset: 37,
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
    cardImgH: 400,
    cardScale: 0.907,
    cardYOffset: 47,
    sortGroup: 10,
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
    cardImgH: 400,
    cardScale: 0.888,
    cardYOffset: 29,
    sortGroup: 10,
  },
  {
    name: "Ayron 2,5%",
    size: "1 L",
    qty: 1000,
    img: ayron1000,
    imgYOffset: 36,
    cat: "ayron",
    desc: "d.ayron",
    imgH: 380,
    cardImgH: 400,
    cardScale: 1.0,
    cardYOffset: 30,
    sortGroup: 10,
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
    cardImgH: 400,
    cardScale: 0.8,
    cardYOffset: 26,
    sortGroup: 20,
  },
  {
    name: "Go'ja",
    size: "1 L",
    qty: 1002,
    img: goja1000,
    imgYOffset: 17,
    cat: "ayron",
    desc: "d.goja",
    imgH: 370,
    cardImgH: 400,
    cardScale: 0.941,
    cardYOffset: 14,
    sortGroup: 20,
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
    cardImgH: 205,
    cardImgMaxW: "96%",
    cardYOffset: 20,
    imgClass: "scale-110",
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
    cardImgH: 245,
    cardImgMaxW: "108%",
    cardScale: 1.28,
    cardYOffset: 62,
    cardImgClass: "mix-blend-multiply",
    imgClass: "scale-[1.4] mix-blend-multiply",
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
    cardImgH: 245,
    cardImgMaxW: "108%",
    cardScale: 1.28,
    cardYOffset: 62,
    cardImgClass: "mix-blend-multiply",
    imgClass: "scale-[1.4] mix-blend-multiply",
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
    cardImgH: 218,
    cardImgMaxW: "98%",
    cardYOffset: 21,
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
    cardImgH: 265,
    cardImgMaxW: "104%",
    cardYOffset: 23,
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
    cardImgH: 265,
    cardImgMaxW: "104%",
    cardYOffset: 23,
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
    cardImgH: 220,
    cardImgMaxW: "104%",
    cardYOffset: -56,
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
    cardImgH: 220,
    cardImgMaxW: "104%",
    cardYOffset: -56,
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
    cardImgH: 220,
    cardImgMaxW: "104%",
    cardYOffset: -56,
  },
  {
    name: "Suzma",
    size: "200 g",
    qty: 499,
    img: suzma200,
    cat: "tvorog",
    desc: "d.suzma",
    imgH: 235,
    cardImgH: 240,
    cardImgMaxW: "112%",
    cardYOffset: -55,
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
