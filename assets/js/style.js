// グローバルナビ ハンバーガーメニュー
// --------------------------------------------------------------

const hamburgerBtn = document.querySelector("#js_hamburgerBtn");
const hamburgerBg = document.querySelector("#js_hamburgerBg");
const headerNav = document.querySelector("#js_headerNav");
const hamburgerText = document.querySelector(".hamburger_text");
const headerLogo = document.querySelector(".header_logo");
const logoImg = headerLogo.querySelector("img");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  const footerTop = footer.getBoundingClientRect().top;
  if (footerTop < window.innerHeight) {
    header.classList.add("header--hidden");
  } else {
    header.classList.remove("header--hidden");
  }
});

function closeMenu() {
  hamburgerBtn.classList.remove("is_active");
  headerNav.classList.remove("is_active");
  hamburgerBg.classList.remove("is_active");
  headerLogo.classList.remove("is_active");
  hamburgerText.textContent = "menu";
  logoImg.src = "assets/img/logo_black.png";
}

hamburgerBtn.addEventListener("click", function () {
  this.classList.toggle("is_active");
  headerNav.classList.toggle("is_active");
  hamburgerBg.classList.toggle("is_active");
  headerLogo.classList.toggle("is_active");

  const isActive = this.classList.contains("is_active");
  hamburgerText.textContent = isActive ? "close" : "menu";
  logoImg.src = isActive
    ? "assets/img/logo_white.png"
    : "assets/img/logo_black.png";
});

hamburgerBg.addEventListener("click", closeMenu);

headerNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    closeMenu();

    setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth" });
    }, 200);
  });
});

// 360px 未満は JS で viewport を固定する
// --------------------------------------------------------------
!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.outerWidth > 360
        ? "width=device-width,initial-scale=1"
        : "width=360";
    if (viewport.getAttribute("content") !== value) {
      viewport.setAttribute("content", value);
    }
  }
  addEventListener("resize", switchViewport, false);
  switchViewport();
})();
