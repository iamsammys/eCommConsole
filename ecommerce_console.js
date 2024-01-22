#!/usr/bin/node
const objStorage = require('./engine');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const user = require('./user');
const cart = require('./cart');
const order = require('./order');
const product = require('./product');


function displayMenu() {
  console.log('\n===== Ecommerce Console =====');
  console.log('1. Create User');
  console.log('2. View All Users');
  console.log('3. Create Product');
  console.log('4. View All Products');
  console.log('5. Create Cart');
  console.log('6. View All Carts');
  console.log('7. Create Order');
  console.log('8. View All Orders');
  console.log('9. Exit');
}

function createUser() {
  rl.question('Enter user details (firstName lastName email): ', (input) => {
    const [firstName, lastName, email] = input.split(' ');
    const newUser = new user(firstName, lastName, email);
    newUser.save();
    console.log('User created successfully!');
    displayMenu();
    processUserInput();
  });
}

function viewAllUsers() {
  const allUsers = objStorage.all('user');
  console.log('\nAll Users:');
  for (const key in allUsers) {
    const currentUser = allUsers[key];
    console.log(`User ${currentUser.id}: ${currentUser.getFullName()} - ${currentUser.email}`);
  }
  displayMenu();
  processUserInput();
}

function createProduct() {
  rl.question('Enter product details (name description price image): ', (input) => {
    const [name, description, price, image] = input.split(' ');
    const newProduct = new product(name, description, price, image);
    newProduct.save();
    console.log('Product created successfully!');
    displayMenu();
    processUserInput();
  });
}

function viewAllProducts() {
  const allProducts = objStorage.all('product');
  console.log('\nAll Products:');
  for (const key in allProducts) {
    const currentProduct = allProducts[key];
    console.log(`Product ${currentProduct.id}: ${currentProduct.name} - ${currentProduct.description}`);
  }
  displayMenu();
  processUserInput();
}

function createCart() {
  rl.question('Enter cart details (userId productId): ', (input) => {
    const [userId, productId] = input.split(' ');
    const newCart = new cart(userId, productId);
    newCart.save();
    console.log('Cart created successfully!');
    displayMenu();
    processUserInput();
  });
}

function viewAllCarts() {
  const allCarts = objStorage.all('cart');
  console.log('\nAll Carts:');
  for (const key in allCarts) {
    const currentCart = allCarts[key];
    console.log(`Cart ${currentCart.id}: User ${currentCart.userId} - Product ${currentCart.productId}`);
  }
  displayMenu();
  processUserInput();
}

function createOrder() {
  rl.question('Enter order details (userId cartId): ', (input) => {
    const [userId, cartId] = input.split(' ');
    const newOrder = new order(userId, cartId);
    newOrder.save();
    console.log('Order created successfully!');
    displayMenu();
    processUserInput();
  });
}

function viewAllOrders() {
  const allOrders = objStorage.all('order');
  console.log('\nAll Orders:');
  for (const key in allOrders) {
    const currentOrder = allOrders[key];
    console.log(`Order ${currentOrder.id}: User ${currentOrder.userId} - Cart ${currentOrder.cartId}`);
  }
  displayMenu();
  processUserInput();
}

function processUserInput() {
  rl.question('Enter your choice: ', (choice) => {
    switch (choice) {
      case '1':
        createUser();
        break;
      case '2':
        viewAllUsers();
        break;
      case '3':
        createProduct();
        break;
      case '4':
        viewAllProducts();
        break;
      case '5':
        createCart();
        break;
      case '6':
        viewAllCarts();
        break;
      case '7':
        createOrder();
        break;
      case '8':
        viewAllOrders();
        break;
      case '9':
        rl.close();
        break;
      default:
        console.log('Invalid choice. Please enter a valid option.');
        displayMenu();
        processUserInput();
    }
  });
}

// Initial display
displayMenu();
// Start processing user input
processUserInput();
