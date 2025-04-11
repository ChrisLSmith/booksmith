const books = [
  { title: "The Final Empire", date: "Jan 2025", rating: 5 },
  { title: "The Way of Kings", date: "Feb 2025", rating: 4.5 },
  { title: "Warbreaker", date: "Mar 2025", rating: 4 },
];

const list = document.getElementById("book-list");

books.forEach(book => {
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";
  li.innerHTML = `
    <strong>${book.title}</strong>
    <span>${book.date} &mdash; ⭐ ${book.rating}</span>
  `;
  list.appendChild(li);
});