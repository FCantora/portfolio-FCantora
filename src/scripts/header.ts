const loader = document.getElementById("page-loader");
const headerEl = document.querySelector("header");
const langSwitcher = document.getElementById("lang-switcher");
const backToTop = document.getElementById("back-to-top");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

function showLoader() {
  if (loader) {
    loader.classList.remove("hidden");
    loader.classList.add("flex");
  }
}
function hideLoader() {
  if (loader) {
    loader.classList.add("hidden");
    loader.classList.remove("flex");
  }
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
      langSwitcher.classList.remove("opacity-0");
      langSwitcher.classList.remove("pointer-events-none");
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
  if (mobileMenu) {
    if (scrollingDown && farFromTop) {
      mobileMenu.classList.add("opacity-0", "pointer-events-none");
    }
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

menuBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!mobileMenu) return;
  const closing = mobileMenu.classList.contains("pointer-events-auto");
  mobileMenu.classList.toggle("opacity-0", closing);
  mobileMenu.classList.toggle("pointer-events-none", closing);
  mobileMenu.classList.toggle("opacity-100", !closing);
  mobileMenu.classList.toggle("pointer-events-auto", !closing);
});

document.addEventListener("click", (e) => {
  if (!mobileMenu) return;
  if (!mobileMenu.contains(e.target as Node) && (e.target as Node) !== menuBtn) {
    mobileMenu.classList.add("opacity-0", "pointer-events-none");
    mobileMenu.classList.remove("opacity-100", "pointer-events-auto");
  }
});

mobileMenu?.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    mobileMenu.classList.add("opacity-0", "pointer-events-none");
    mobileMenu.classList.remove("opacity-100", "pointer-events-auto");
  })
);

document.getElementById("back-to-top")?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

onScroll();
