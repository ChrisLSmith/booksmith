const books = [
  { title: "The Final Empire", author: "Brandon Sanderson", date: "Jan 2025", rating: 5 },
  { title: "The Way of Kings", author: "Brandon Sanderson", date: "Feb 2025", rating: 4.5 },
  { title: "Warbreaker", author: "Brandon Sanderson", date: "Mar 2025", rating: 4 },
];

const list = document.getElementById("book-list");

books.forEach(book => {
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = `
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <strong>${book.title}</strong><br>
        <small class="text-muted">by ${book.author}</small>
      </div>
      <div>
        <span>${book.date} &mdash; ⭐ ${book.rating}</span>
      </div>
    </div>
  `;
  list.appendChild(li);
});