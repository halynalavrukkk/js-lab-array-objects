let book = {
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
  year: 1997,
  isRead: true,
  bookInfo() {
    return `Назва: "${this.title}", Автор: ${this.author}, Рік: ${this.year}, Прочитана: ${this.isRead ? "Так" : "Ні"}`;
  },
  markAsRead() {
    this.isRead = true;
  }
};

function showBookInfo() {
  document.getElementById("out-task1").innerText = book.bookInfo();
}

function toggleBookRead() {
  book.isRead = !book.isRead;
  document.getElementById("out-task1").innerText = book.bookInfo();
}

function createBook(title, author, year, isRead) {
  return {
    title,
    author,
    year,
    isRead,
    bookInfo() {
      return `Назва: "${this.title}", Автор: ${this.author}, Рік: ${this.year}, Прочитана: ${this.isRead ? "Так" : "Ні"}`;
    },
    markAsRead() {
      this.isRead = true;
    }
  };
}

let library = [
  createBook("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 1997, true),
  createBook("The Hobbit", "J.R.R. Tolkien", 1937, false),
  createBook("1984", "George Orwell", 1949, true)
];

function renderBookList(arr, elementId) {
  if (!arr.length) {
    document.getElementById(elementId).innerText = "Список порожній.";
    return;
  }
  let html = "<ul>";
  arr.forEach(b => {
    html += `<li><strong>"${b.title}"</strong> — ${b.author} (${b.year} р.) | Прочитана: ${b.isRead ? "Так" : "Ні"}</li>`;
  });
  html += "</ul>";
  document.getElementById(elementId).innerHTML = html;
}

function showAllBooks() {
  renderBookList(library, "out-library");
}

function addDefaultBook() {
  library.push(createBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, false));
  renderBookList(library, "out-library");
}

function sortBooksByYear() {
  library.sort((a, b) => a.year - b.year);
  renderBookList(library, "out-library");
}

function filterUnreadBooks() {
  let unread = library.filter(b => !b.isRead);
  renderBookList(unread, "out-library");
}

function findTolkien() {
  let found = library.find(b => b.author === "J.R.R. Tolkien");
  if (found) {
    document.getElementById("out-library").innerText = `Знайдена книга: "${found.title}", Автор: ${found.author}, Рік: ${found.year}`;
  } else {
    document.getElementById("out-library").innerText = "Книгу не знайдено.";
  }
}

function showAvgYear() {
  if (!library.length) return;
  let total = library.reduce((sum, b) => sum + b.year, 0);
  let avg = Math.round(total / library.length);
  document.getElementById("out-library").innerText = `Середній рік видання всіх книг у бібліотеці: ${avg} р.`;
}

function addBookPrompt() {
  let title = prompt("Введіть назву книги:");
  if (!title) return;

  let author = prompt("Введіть автора книги:");
  let year = +prompt("Введіть рік видання книги:");
  let isRead = confirm("Чи прочитана книга?");

  let newBook = createBook(title, author, year, isRead);
  library.push(newBook);
  
  renderBookList(library, "out-prompt");
}

let games = [
  { title: "The Witcher 3", platform: "PC", genre: "RPG", year: 2015, isCompleted: true },
  { title: "Cyberpunk 2077", platform: "PC", genre: "RPG", year: 2020, isCompleted: true },
  { title: "Elden Ring", platform: "PS5", genre: "Action RPG", year: 2022, isCompleted: false },
  { title: "GTA V", platform: "PC", genre: "Action", year: 2013, isCompleted: true }
];

function renderGameList(arr) {
  let html = "<ul>";
  arr.forEach(g => {
    html += `<li><strong>"${g.title}"</strong> | Платформа: ${g.platform} | Жанр: ${g.genre} | Рік: ${g.year} | Пройдено: ${g.isCompleted ? "Так" : "Ні"}</li>`;
  });
  html += "</ul>";
  document.getElementById("out-games").innerHTML = html;
}

function showAllGames() {
  renderGameList(games);
}

function filterUncompletedGames() {
  let uncompleted = games.filter(g => !g.isCompleted);
  renderGameList(uncompleted);
}

function findEldenRing() {
  let found = games.find(g => g.title === "Elden Ring");
  if (found) {
    document.getElementById("out-games").innerText = `Знайдено: "${found.title}" (${found.genre}, ${found.year} р.) - Платформа: ${found.platform}`;
  } else {
    document.getElementById("out-games").innerText = "Гру не знайдено.";
  }
}

function sortGamesByYear() {
  games.sort((a, b) => b.year - a.year);
  renderGameList(games);
}