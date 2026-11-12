const form = document.querySelector("#searchForm");
const input = document.querySelector("#searchInput");
const result = document.querySelector("#result");

// Expand the compact search icon when the field receives focus.
input.addEventListener("focus", () => form.classList.add("expanded"));
input.addEventListener("blur", () => {
  if (!input.value.trim()) form.classList.remove("expanded");
});

// Keep this demo self-contained: submitting displays the entered query.
// Replace this handler with your site's search route or API when integrating.
form.addEventListener("submit", event => {
  event.preventDefault();
  const query = input.value.trim();
  if (!query) {
    input.focus();
    return;
  }
  result.textContent = `Searching for: ${query}`;
});
