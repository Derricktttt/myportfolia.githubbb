/* const allSection = document.querySelectorAll(".section__hidden");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.ClassList.remove(".section__hidden");
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSection.forEach(function (section) {
  sectionObserver.observe(section);
});
 */

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

document.documentElement.style.setProperty("--animate-duration", "2s");

// All animations will take half the time to accomplish
document.documentElement.style.setProperty("--animate-duration", ".5s");
