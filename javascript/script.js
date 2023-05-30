const navList = document.querySelectorAll(".list-item"),
  sectionTabs = document.querySelectorAll(".section-tabs-item"),
  destNav = document.querySelectorAll(".subject__nav-item"),
  destSub = document.querySelectorAll(".dest-subject__content"),
  destImg = document.querySelectorAll(".dest-img"),
  crewNav = document.querySelectorAll(".crew-list__item"),
  crewSub = document.querySelectorAll(".crew-title"),
  crewImgs = document.querySelectorAll(".crew-imgs__items"),
  techNav = document.querySelectorAll(".tech-item"),
  techSub = document.querySelectorAll(".tech-title"),
  techimgs = document.querySelectorAll(".tech-imgs__items");

function tabsPar(tabsList, tabsItem) {
  tabsList.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabsList.forEach((tab) => {
        tab.classList.remove("active");
      });
      tab.classList.add("active");
      tabsItem.forEach((content) => {
        content.classList.remove("active");
      });
      tabsItem[index].classList.add("active");
    });
  });
}

tabsPar(navList, sectionTabs);

function tabsChild(navTabs, navItem, navImg) {
  navTabs.forEach((tab, idx) => {
    tab.addEventListener("click", () => {
      navTabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tab.classList.add("active");
      navItem.forEach((content, i) => {
        content.classList.remove("active");
        navImg[i].classList.remove("active");
      });
      navItem[idx].classList.add("active");
      navImg[idx].classList.add("active");
      setTimeout(() => {
        navItem[idx].classList.add("animate");
        navImg[idx].classList.add("animate");
      }, 100);
    });
  });
}

tabsChild(destNav, destSub, destImg);
tabsChild(crewNav, crewSub, crewImgs);
tabsChild(techNav, techSub, techimgs);

const menuBurger = document.querySelector(".nav__burger"),
  navListS = document.querySelector(".nav__list"),
  menuBurgerActive = document.querySelector(".hamburger-one");

menuBurger.addEventListener("click", () => {
  navListS.classList.toggle("active");
  menuBurger.classList.toggle("active");
});
