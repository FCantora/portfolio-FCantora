const loader = document.getElementById("page-loader");
const headerEl = document.querySelector("header");
const langSwitcher = document.getElementById("lang-switcher");
const backToTop = document.getElementById("back-to-top");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

function hideLoader() {
  if (loader) {
    loader.classList.add("hidden");
    loader.classList.remove("flex");
  }
}

function setMenuOpen(open: boolean) {
  if (!mobileMenu) return;
  mobileMenu.classList.toggle("opacity-0", !open);
  mobileMenu.classList.toggle("pointer-events-none", !open);
  mobileMenu.classList.toggle("opacity-100", open);
  mobileMenu.classList.toggle("pointer-events-auto", open);
  menuBtn?.setAttribute("aria-expanded", String(open));
}

const isDesktop = () => window.matchMedia("(min-width: 1024px)").matches;
let lastScrollY = window.scrollY;

function onScroll() {
  const current = window.scrollY;
  const scrollingDown = current > lastScrollY;
  const farFromTop = current > 80;
  if (isDesktop()) {
    document.body.classList.remove("header-hidden");
    if (headerEl instanceof HTMLElement) headerEl.classList.remove("is-hidden");
    if (langSwitcher) {
      langSwitcher.classList.remove("opacity-0", "pointer-events-none");
    }
  } else {
    document.body.classList.toggle("header-hidden", scrollingDown && farFromTop);
    if (headerEl instanceof HTMLElement) {
      headerEl.classList.toggle("is-hidden", scrollingDown && farFromTop);
    }
    if (langSwitcher) {
      langSwitcher.classList.toggle("opacity-0", scrollingDown && farFromTop);
      langSwitcher.classList.toggle("pointer-events-none", scrollingDown && farFromTop);
    }
  }
  if (scrollingDown && farFromTop) {
    setMenuOpen(false);
  }
  if (backToTop) {
    backToTop.classList.toggle("opacity-100", farFromTop);
    backToTop.classList.toggle("pointer-events-auto", farFromTop);
    backToTop.classList.toggle("opacity-0", !farFromTop);
    backToTop.classList.toggle("pointer-events-none", !farFromTop);
  }
  lastScrollY = current;
}

window.addEventListener("pageshow", hideLoader);
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll);
window.addEventListener("load", onScroll);

menuBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!mobileMenu) return;
  const isOpen = mobileMenu.classList.contains("pointer-events-auto");
  setMenuOpen(!isOpen);
});

document.addEventListener("click", (e) => {
  if (!mobileMenu) return;
  if (!mobileMenu.contains(e.target as Node) && (e.target as Node) !== menuBtn) {
    setMenuOpen(false);
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    setMenuOpen(false);
  }
});

mobileMenu?.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    setMenuOpen(false);
  })
);

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

onScroll();
