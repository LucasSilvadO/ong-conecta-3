document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  if (!menuToggle || !menu) return;

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");   // mostra/esconde o <ul id="menu">
    menuToggle.classList.toggle("open"); // anima o ícone (3 linhas -> X)

    // acessibilidade
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", (!expanded).toString());
  });
});
