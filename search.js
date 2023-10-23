const data = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Grapes",
    "Lemon",
    "Orange",
    "Peach",
    "Pear",
    "Strawberry",
];

const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("results");

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    resultsList.innerHTML = ""; // Clear previous results

    if (searchTerm.length === 0) {
        return; // No need to search if the input is empty
    }

    const matchingItems = data.filter(item => item.toLowerCase().includes(searchTerm));

    if (matchingItems.length === 0) {
        resultsList.innerHTML = "<li>No results found.</li>";
    } else {
        matchingItems.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            resultsList.appendChild(li);
        });
    }
}

searchInput.addEventListener("input", performSearch);
