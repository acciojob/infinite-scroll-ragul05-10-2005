//your code here!
const list = document.getElementById("list"); // assuming your UL has id="list"
let itemCount = 0;

// Function to add items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
  }
}

// Add 10 items by default
addItems(10);

// Listen for scroll
window.addEventListener("scroll", () => {
  // Check if user reached bottom
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // Add 2 more items
    addItems(2);
  }
});

