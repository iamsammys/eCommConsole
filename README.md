# Ecommerce Console

The Ecommerce Console is a simple command-line interface (CLI) for managing users, products, carts, and orders in an e-commerce application. It leverages Node.js and a set of models implemented in separate files.

## Features

- **Create Users**: Add new users with first name, last name, and email.
- **View Users**: Display a list of all existing users.
- **Create Products**: Add new products with name, description, price, and image.
- **View Products**: Display a list of all existing products.
- **Create Carts**: Create new shopping carts by specifying user and product IDs.
- **View Carts**: Display a list of all existing shopping carts.
- **Create Orders**: Generate new orders by providing user and cart IDs.
- **View Orders**: Display a list of all existing orders.

## Usage

1. **Installation**: Ensure Node.js is installed.

2. **Clone the Repository**: Clone the repository.

3. **Run the Console**: Navigate to the script's directory and run:

   ```bash
   node ./ecommerce_console.js
   ```

===== Ecommerce Console =====

1. Create User
2. View All Users
3. Create Product
4. View All Products
5. Create Cart
6. View All Carts
7. Create Order
8. View All Orders
9. Exit

Enter your choice: 1
Enter user details (firstName lastName email): John Doe john.doe@example.com
User created successfully!

===== Ecommerce Console =====

1. Create User
2. View All Users
3. Create Product
4. View All Products
5. Create Cart
6. View All Carts
7. Create Order
8. View All Orders
9. Exit

Enter your choice: 2
...

## Update

delete and update features for each of the models are yet too be added.

## The files are saved to a json file which is reloaded at the start of te app
