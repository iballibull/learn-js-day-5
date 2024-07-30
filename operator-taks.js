// TASK 1
let favouriteBook1 = 'Atomic Habbits';
const favouriteBook2 = 'Doraemon';

try {
  favouriteBook1 = 'Dilan';
  favouriteBook2 = 'Ancika';
} catch (error) {
  console.log(`Error : ${error.message}`);
}

// Display true if the name of books have same name otherwise display false
console.log(favouriteBook1 == favouriteBook2);

// TASK 2
let priceOfBook1 = 100000;
let priceOfBook2 = 75000;

// Find the average price from those 2 books
let avaragePrice = (priceOfBook1 + priceOfBook2) / 2;
console.log(`The average price of two books is Rp ${avaragePrice.toLocaleString('id-ID')}`);

//  If the average price more than 500000 Expensive
let priceCategory = avaragePrice > 500000 ? 'Expensive' : 'Cheap';
console.log(priceCategory);
