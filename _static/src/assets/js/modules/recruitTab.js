/*==============================================================
  recruitTab
  ・Recruitページ 募集要項のタブ
==============================================================*/

{
  const menuItems = document.querySelectorAll(".p-recruit-desc__link");
  const contents = document.querySelectorAll(".p-recruit-desc__content");

  menuItems.forEach((clickedItem) => {
    clickedItem.addEventListener("click", (e) => {
      e.preventDefault();

      menuItems.forEach((item) => {
        item.classList.remove("is-select");
      });
      clickedItem.classList.add("is-select");
      contents.forEach((content) => {
        content.classList.remove("is-select");
      });
      let currentMenu = document.getElementById(clickedItem.dataset.id);
      currentMenu.classList.add("is-select");
    });
  });
}
