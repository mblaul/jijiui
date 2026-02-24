window.onload = () => {
  createColorGrid();
};

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
      event.target.innerHTML = "Switch to dark mode";
      break;
    }

    case "theme-light": {
      document.documentElement.dataset.theme = "theme-dark";
      event.target.innerHTML = "Switch to light mode";
    }
  }
}

function createColorGrid() {
  const colorGrid = document.getElementById("color-grid");

  const colors = ["blue", "pink", "gold", "beige", "grey"];

  let swatchValues = [];

  colors.forEach((color) => {
    for (let i = 0; i <= 9; i++) {
      if (i === 0) {
        swatchValues.push(`${color}-50`);
      } else {
        swatchValues.push(`${color}-${i * 100}`);
      }
    }
  });

  swatchValues.forEach((swatchValue) => {
    const colorBox = document.createElement("div");
    colorBox.classList.add("color-swatch");

    colorBox.style.backgroundColor = `var(--${swatchValue})`;
    colorGrid.appendChild(colorBox);
  });
}
