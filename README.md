# Phonebook CRUD Application
This project is a simple phonebook CRUD (Create, Read, Update, Delete) application built using Laravel for the backend and Vue.js for the frontend.

## Features
- Add, view, edit, and delete contacts
- Responsive design
- Simple and intuitive UI

## Prerequisites

- PHP
- Composer
- Node.js
- NPM or Yarn
- MySQL

## Installation

### Clone the Repository
```bash
git clone https://github.com/Gustavo361/phonebook.git
cd phonebook
```

## Project setup
### Backend Setup (Laravel)
```
composer install
```
#### Copy .env.example to .env and configure the database:
```
cp .env.example .env
```
#### Update the .env file with your database credentials:
```plaintext
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=phonebook
DB_USERNAME=your_user
DB_PASSWORD=your_pass
```
#### Generate Application Key:
```
php artisan key:generate
```
#### Run Migrations:
```
php artisan migrate
```
#### Start the Laravel development server:
```
php artisan serve
```

### Frontend Setup (Vue.js)
#### Install Dependencies:
```
npm install
```
#### Build the Frontend:
```
npm run dev
```
## Running the Application
After completing the installation steps, you can access the application at http://localhost:8000.

# Usage
Add a new contact.
View the list of contacts.
Edit or delete existing contacts.

## Explanation in video
[first part](https://www.loom.com/share/0856a0f54c8a4580acbfe73d0b49b013)
[second part](https://www.loom.com/share/23f619b6db8f44bd8de5336031962694)

# Additional Notes
Make sure MySQL is running and the user and database specified in the .env file exist.

# License
This project is licensed under the MIT License - see the LICENSE file for details.
