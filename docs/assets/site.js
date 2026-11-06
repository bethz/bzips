"use strict";

const search = document.getElementById("search");
if (search) {
  const projects = Array.from(document.querySelectorAll("[data-project]"));
  const status = document.getElementById("search-status");
  const updateResults = () => {
    const query = search.value.trim().toLowerCase();
    let count = 0;
    projects.forEach((project) => {
      const matches = project.dataset.search.toLowerCase().includes(query);
      project.hidden = !matches;
      if (matches) count += 1;
    });
    status.textContent = count === 0
      ? "No projects match your search."
      : `${count} project${count === 1 ? "" : "s"} found.`;
  };
  document.getElementById("project-search").hidden = false;
  search.addEventListener("input", updateResults);
  updateResults();
}

document.querySelectorAll("pre[data-prompt]").forEach((prompt) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "copy-button";
  button.textContent = "Copy prompt";
  const status = document.createElement("p");
  status.setAttribute("role", "status");
  button.addEventListener("click", async () => {
    try {
      if (!navigator.clipboard) throw new Error("Clipboard API unavailable");
      await navigator.clipboard.writeText(prompt.textContent);
      status.textContent = "Prompt copied.";
    } catch (error) {
      status.textContent = "Could not copy automatically. Select the prompt text and copy it manually.";
    }
  });
  prompt.after(button, status);
});
