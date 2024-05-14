/**
 * @type {HTMLAnchorElement}
 */
const discordButton = document.querySelector(`a[href="#discord_username"]`);

discordButton.addEventListener('click', (_ev) => {
  const elements = document.querySelectorAll(".discord_username");

  try {
    navigator.clipboard.writeText("8x13b");
  } catch (err) {
    console.error("Failed to copy to clipboard:");
    console.error(err);
  }

  elements.forEach((element) => {
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    }
  });
});