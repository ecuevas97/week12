//    Create a CRD application (CRUD without update) using json-server or another API
   //* Use fetch and async/await to interact with the API
   //* Use a form to create/post new entities
   //* Build a way for users to delete entities
   //* Include a way to get entities from the API and display them
   //* You do NOT need update, but you can add it if you'd like
   //* Use Bootstrap and/or CSS to style your project

   // app.js

// set API endpoint
const API_URL = 'http://localhost:3000/items';

// Get DOM elements
const itemForm = document.getElementById('item-form');
const itemList = document.getElementById('item-list');
const nameInput = document.getElementById('name');

// STEP: Get/Read from API 
async function fetchItems() {
  try {
    const res = await fetch(API_URL); // Use fetch to GET from API
    const items = await res.json();   // Convert response to JSON
    renderItems(items);               // Pass data to render function
  } catch (err) {
    console.error('Error fetching items:', err);
  }
}