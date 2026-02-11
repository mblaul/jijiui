document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

function toggleTheme(event) {
  const isSystemDarkMode =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");

  if (document.documentElement.dataset?.theme == undefined) {
    document.documentElement.dataset.theme = isSystemDarkMode
      ? "theme-dark"
      : "theme-light";
  }

  switch (document.documentElement.dataset?.theme) {
    case "theme-dark": {
      document.documentElement.dataset.theme = "theme-light";
      event.target.innerHTML = "☀️";
      break;
    }

    case "theme-light": {
      document.documentElement.dataset.theme = "theme-dark";
      event.target.innerHTML = "🌙";
    }
  }
}
