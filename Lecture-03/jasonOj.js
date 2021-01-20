const book = {
    title : "1984",
    author: "George Orwell",
    isAvailable: false
};

const bookJSON = JSON.stringify([book,book]);
console.log(bookJSON);

let Obook = JSON.parse(bookJSON);
console.log(Obook.title);