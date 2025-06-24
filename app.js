//    Create a CRD application (CRUD without update) using json-server or another API
   //* Use fetch and async/await to interact with the API
   //* Use a form to create/post new entities
   //* Build a way for users to delete entities
   //* Include a way to get entities from the API and display them
   //* You do NOT need update, but you can add it if you'd like
   //* Use Bootstrap and/or CSS to style your project

   // app.js

const API_URL = 'http://localhost:3000/items';

// Fetch all items from the API
async function fetchItems() {
  const res = await fetch('http://localhost:3000/items'); // fetch from the server
  const items = await res.json(); 
  console.log(items); 
}
