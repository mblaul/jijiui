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

  const swatchValues = colors.map((color) => {
    let result = [];

    for (let i = 0; i <= 9; i++) {
      if (i === 0) {
        result.push(`${color}-50`);
      } else {
        result.push(`${color}-${i * 100}`);
      }
    }

    return result;
  });

  swatchValues.forEach((swatchColumn) => {
    const colorColumn = document.createElement("div");
    colorColumn.classList.add("color-column");

    swatchColumn.forEach((swatchValue) => {
      const colorBox = document.createElement("div");
      colorBox.classList.add("color-swatch");

      colorBox.style.backgroundColor = `var(--${swatchValue})`;
      colorColumn.appendChild(colorBox);
    });

    colorGrid.appendChild(colorColumn);
  });
}
