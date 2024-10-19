const emojis = {
  neutral: "😐",
  slightlyOpen: "😮",
  halfOpen: "😲",
  mostlyOpen: "😯",
  fullyOpen: "😲",
  wink: "😉",
};

const MAX_RAIN = 10;

const createEmojiDivs = (expression) => {
  if (!emojis[expression] || expression === "neutral") {
    throw new Error("Invalid expression");
  }

  const divs = [];
  for (let i = 0; i < MAX_RAIN; i++) {
    const div = document.createElement("div");
    const size = Math.floor(Math.random() * (80 - 20 + 1)) + 20;
    div.textContent = emojis[expression];
    div.style.fontSize = `${size}px`;
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.classList.add("speck");
    divs.push(div);
  }
  return divs;
};

const renderEmojiDivs = (divs) => {
  const fragment = document.createDocumentFragment();

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  divs.forEach((div) => {
    const randomX = Math.floor(Math.random() * viewportWidth);
    const randomY = Math.floor(Math.random() * viewportHeight);

    div.style.left = `${randomX}px`;
    div.style.top = `${randomY}px`;
    fragment.appendChild(div);
  });

  document.body.appendChild(fragment);

  setTimeout(() => {
    divs.forEach((div) => {
      div.remove();
    });
  }, 3000);
};

const createEmojiRain = (expression) => {
  renderEmojiDivs(createEmojiDivs(expression));
};
