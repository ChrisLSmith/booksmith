const books = [
  { title: "The Final Empire", author: "Brandon Sanderson", date: "Jan 2025", rating: 5, cover: "https://covers.openlibrary.org/b/id/14658348-L.jpg", reviewUrl: "reviews/the-final-empire.html"},
  { title: "The Way of Kings", author: "Brandon Sanderson", date: "Feb 2025", rating: 4.5, cover: "https://covers.openlibrary.org/b/id/6463712-L.jpg", reviewUrl: "reviews/the-way-of-kings.html"},
  { title: "Warbreaker", author: "Brandon Sanderson", date: "Mar 2025", rating: 4 , cover:"https://covers.openlibrary.org/b/id/14658347-L.jpg", reviewUrl: "reviews/warbreaker.html"},
];

const list = document.getElementById("book-list");

books.forEach(book => {
  const li = document.createElement("li");
  li.className = "list-group-item";

li.innerHTML = `
  <div class="d-flex align-items-start">
    <img src="${book.cover}" alt="${book.title}" class="me-3" style="width: 60px; height: auto; border-radius: 4px;">
    <div class="flex-grow-1">
      <strong><a href="${book.reviewUrl}" class="text-decoration-none">${book.title}</a></strong><br>
      <small class="text-muted">by ${book.author}</small><br>
      <span>${book.date} &mdash; ⭐ ${book.rating}</span>
    </div>
  </div>
`;

  list.appendChild(li);
});