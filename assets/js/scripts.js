const headerMenu = () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  const header = document.querySelector(".header-menu");
  const headerMenuItem = document.querySelectorAll(".header-menu-item");

  mobileMenu.addEventListener("click", () => {
    //Toggle Header
    header.classList.toggle("is-active");

    //Animation menuItem
    headerMenuItem.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `menuItemFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s `;
      }
    });
    //Mobile menu animation
    mobileMenu.classList.toggle("toggler");
    
  });
  document.addEventListener("click", function (e) {
    if (!header.contains(e.target) && !e.target.matches(".mobile-menu")) {
      header.classList.remove("is-active");
      mobileMenu.classList.remove("toggler");
    }
  });
  //Tắt Mobile menu
};

headerMenu();
