const currentDate = new Date();
const publicationDate = new Date(
  currentDate.getTime() - 5 * 24 * 60 * 60 * 1000
);
document.getElementById("publication-date").textContent =
  "Опубліковано: " + publicationDate.toLocaleDateString();
