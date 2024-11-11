// Function to toggle the "active" class
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from the API
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      const accordion = document.querySelector(".accordion");

      // Use forEach to iterate through each post and create elements
      data.forEach((post) => {
        // Create a container div for each FAQ section
        const sectionDiv = document.createElement("div");
        sectionDiv.classList.add("section");

        // Create title div and add the title text
        const titleDiv = document.createElement("div");
        titleDiv.classList.add("title");
        titleDiv.textContent = post.title;

        // Create description div and add the body text
        const descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("description");
        descriptionDiv.innerHTML = `<p>${post.body}</p>`;

        // Initially hide the description div
        descriptionDiv.style.display = "none";

        // Add click event listener to the title to toggle the description
        titleDiv.addEventListener("click", (e) => {
          toggle(e); // Toggle the active class on the title
          descriptionDiv.style.display =
            descriptionDiv.style.display === "none" ? "block" : "none";
        });

        // Append the title and description to the section div
        sectionDiv.appendChild(titleDiv);
        sectionDiv.appendChild(descriptionDiv);

        // Append the section div to the accordion
        accordion.appendChild(sectionDiv);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
