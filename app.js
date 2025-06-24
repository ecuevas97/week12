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


// Display items on the page
function renderItems(items) {
  itemList.innerHTML = ''; // Clear the list first
  console.log('Rendering items:', items); 
 
  items.forEach(item => {
    const li = document.createElement('li');  // Create <li>
    li.textContent = item.name; // Set item text
 
// Create a Delete Button (Delete)
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = () => deleteItem(item.id); // On click, call delete

    li.appendChild(deleteBtn);  // Add button to <li>
    itemList.appendChild(li);   // Add <li> to the list
  });
}

// STEP: Create item using form (Create)
itemForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent page reload
  const name = nameInput.value.trim(); // Get input value

  if (!name) return; // Don't submit empty values
  try {
    const res = await fetch(API_URL, {
      method: 'POST', // POST to API
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name }) // Send name in request body
    });
       if (res.ok) {
      nameInput.value = ''; // Clear input
      fetchItems();         // Refresh list
    }
  } catch (err) {
    console.error('Error adding item:', err);
  }
});  